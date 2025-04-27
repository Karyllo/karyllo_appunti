const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'content');

// Leggi tutti i file nella cartella
fs.readdirSync(directoryPath).forEach(file => {
  const fullPath = path.join(directoryPath, file);

  if (fs.lstatSync(fullPath).isFile() && path.extname(fullPath) === '.md') {
    let content = fs.readFileSync(fullPath, 'utf8').trim();
    let updated = false;

    // Aggiungi _Status se manca
    if (!content.includes('_Status:')) {
      content = `_Status: #da_sistemare\n\n` + content;
      updated = true;
    }

    // Aggiungi _Tags se manca
    if (!content.includes('_Tags:')) {
      content = content.replace(/_Status:.*?\n/, match => match + `_Tags:\n\n`);
      updated = true;
    }

    // Aggiungi # Titolo se manca
    if (!/^# /.test(content)) {
      const filenameWithoutExtension = path.basename(file, '.md');
      content = content + `\n\n# ${filenameWithoutExtension}\n`;
      updated = true;
    }

    // Scrivi se abbiamo modificato
    if (updated) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Sistemato: ${file}`);
    }
  }
});

console.log("✅ Sistemazione completata!");