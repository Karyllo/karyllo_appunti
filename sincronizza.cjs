#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const { spawnSync, spawn } = require('child_process');
const readline = require('readline');

// Richiede il pacchetto 'js-yaml' per validare il frontmatter
let yaml;
try {
    yaml = require('js-yaml');
} catch (e) {
    console.warn("Avviso: modulo 'js-yaml' non trovato. Validazione YAML disabilitata.");
}

// CONFIGURAZIONE: Modifica qui i percorsi!
const OBSIDIAN_FOLDER = "/Users/mak/Karyl/Università/Obsidian Karyl/obsidian Karyl";
const QUARTZ_ROOT = "/Users/mak/quartz";
const CONTENT_FOLDER = path.join(QUARTZ_ROOT, "content");
const BACKUP_FOLDER = path.join(QUARTZ_ROOT, "backup_obsidian");

// Funzione per strip finale slash
function stripTrailingSlash(p) {
    if (!p) return p;
    return p.endsWith(path.sep) ? p.slice(0, -1) : p;
}

const srcDir = stripTrailingSlash(OBSIDIAN_FOLDER);
const destDir = stripTrailingSlash(CONTENT_FOLDER);

// Funzione per chiedere conferma
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}

async function main() {
    const answer = await askQuestion("⚡ Vuoi davvero sincronizzare e sovrascrivere i file? (sì/no): ");
    if (answer.trim().toLowerCase() !== "sì") {
        console.log("❌ Sincronizzazione annullata.");
        return;
    }

    // 1. Backup
    console.log("🔒 Creo backup della cartella Obsidian...");
    try {
        fs.rmSync(BACKUP_FOLDER, { recursive: true, force: true });
        spawnSync('cp', ['-r', srcDir, BACKUP_FOLDER], { stdio: 'inherit' });
        console.log(`✅ Backup salvato in ${BACKUP_FOLDER}`);
    } catch (err) {
        console.error("❌ Errore nella creazione del backup:", err);
        return;
    }

    // 2. Sincronizzazione con rsync
    console.log("🔄 Sincronizzo con rsync...");
    const rsyncResult = spawnSync('rsync', ['-av', '--delete', '--exclude', '5-template/', srcDir + path.sep, destDir + path.sep], { stdio: 'inherit' });
    if (rsyncResult.status !== 0) {
        console.error(`❌ Errore: rsync ha restituito codice ${rsyncResult.status}`);
        process.exit(rsyncResult.status || 1);
    }

    // 3. Sistemazione Markdown
    console.log("🛠️ Sistemo i file Markdown...");
    function fixMarkdownFiles(dir) {
        let entries;
        try {
            entries = fs.readdirSync(dir);
        } catch (err) {
            console.error(`Impossibile leggere ${dir}: ${err.message}`);
            return;
        }
        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            let stat;
            try {
                stat = fs.lstatSync(fullPath);
            } catch (err) {
                console.error(`Impossibile accedere a ${fullPath}: ${err.message}`);
                continue;
            }
            if (stat.isDirectory()) {
                fixMarkdownFiles(fullPath);
            } else if (stat.isFile()) {
                const ext = path.extname(entry).toLowerCase();
                if (ext === '.md') {
                    try {
                        let content = fs.readFileSync(fullPath, 'utf8').trim();
                        if (content.length === 0) {
                            console.warn(`Avviso: file Markdown vuoto ignorato -> ${fullPath}`);
                            continue;
                        }
                        if (!content.startsWith('---')) {
                            console.warn(`Avviso: frontmatter mancante -> ${fullPath}`);
                            continue;
                        }
                        const lines = content.split(/\r?\n/);
                        let secondDashIndex = lines.findIndex((line, i) => i > 0 && line.trim() === '---');
                        if (secondDashIndex === -1) {
                            console.warn(`Avviso: frontmatter non chiuso -> ${fullPath}`);
                            lines.push('---');
                            content = lines.join('\n');
                        }
                        if (yaml) {
                            try {
                                yaml.load(lines.slice(1, secondDashIndex !== -1 ? secondDashIndex : undefined).join('\n'));
                            } catch (e) {
                                console.error(`Errore YAML in ${fullPath}: ${e.message}`);
                            }
                        }
                        fs.writeFileSync(fullPath, content, 'utf8');
                    } catch (err) {
                        console.error(`Errore leggendo ${fullPath}: ${err.message}`);
                    }
                }
            }
        }
    }
    fixMarkdownFiles(CONTENT_FOLDER);

    // 4. Build Quartz
    console.log("🏗️ Build Quartz...");
    const buildProc = spawn('npm', ['run', 'build'], { cwd: QUARTZ_ROOT });
    buildProc.stdout.pipe(process.stdout);
    buildProc.stderr.pipe(process.stderr);
    buildProc.on('close', code => {
        if (code !== 0) {
            console.error(`❌ Build fallita con codice ${code}`);
        } else {
            console.log("✅ Build completata");
            // 5. Push su GitHub
            console.log("📤 Git push...");
            spawnSync('git', ['add', '-A'], { cwd: QUARTZ_ROOT, stdio: 'inherit' });
            spawnSync('git', ['commit', '-m', 'Sync automatico'], { cwd: QUARTZ_ROOT, stdio: 'inherit' });
            const pushResult = spawnSync('git', ['push'], { cwd: QUARTZ_ROOT, stdio: 'inherit' });
            if (pushResult.status !== 0) {
                console.error(`❌ Push fallito con codice ${pushResult.status}`);
            } else {
                console.log("🚀 Push completato!");
            }
        }
    });
}

main();