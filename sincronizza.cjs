// sincronizza.cjs
const { execSync } = require("child_process")
const readline = require("readline")
const fs = require("fs")
const path = require("path")

const origine = "/Users/mak/Karyl/Università/Obsidian Karyl/obsidian Karyl"
const destinazione = path.join(__dirname, "content")
const backup = path.join(__dirname, "backup_obsidian")

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise(resolve => rl.question(query, ans => {
    rl.close()
    resolve(ans)
  }))
}

async function main() {
  const answer = await askQuestion("⚡ Vuoi davvero sincronizzare e sovrascrivere i file? (si/no): ")

  if (answer.trim().toLowerCase() !== "si") {
    console.log("❌ Sincronizzazione annullata.")
    return
  }

  console.log("🔒 Creo un backup degli appunti originali...")
  try {
    fs.rmSync(backup, { recursive: true, force: true })
    execSync(`cp -r "${origine}" "${backup}"`, { stdio: "inherit" })
    console.log(`✅ Backup salvato in ${backup}`)
  } catch (err) {
    console.error("❌ Errore nella creazione del backup:", err)
    return
  }

  console.log("🔄 Copio i file nuovi in Quartz...")
  try {
    execSync(`cp -r "${origine}/"* "${destinazione}/"`, { stdio: "inherit" })
    console.log("✅ Copiati!")
  } catch (err) {
    console.error("❌ Errore nella copia dei file:", err)
    return
  }

  console.log("🛠️ Sistemo i file con il sistematore...")
  try {
    execSync(`node sistematore.cjs`, { stdio: "inherit" })
    console.log("✅ File sistemati!")
  } catch (err) {
    console.error("❌ Errore nella sistemazione:", err)
    return
  }

  console.log("📤 Preparo il push su GitHub...")
  try {
    execSync(`git add .`, { stdio: "inherit" })
    execSync(`git commit -m "Sync contenuti automatico"`, { stdio: "inherit" })
    execSync(`git push`, { stdio: "inherit" })
    console.log("🚀 Tutto sincronizzato e online!")
  } catch (err) {
    console.error("❌ Errore nel push su GitHub:", err)
  }
}

main()