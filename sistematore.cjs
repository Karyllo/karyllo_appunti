// sistematore.cjs
const fs = require("fs")
const path = require("path")

const contentDir = path.join(__dirname, "content")

function aggiustaFrontmatter(data) {
  const now = new Date()
  const formattedDate = now.toISOString().slice(0, 10) // formato YYYY-MM-DD
  const formattedTime = now.toTimeString().slice(0, 5)  // formato HH:MM

  // Trova il frontmatter
  const match = data.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    return data // se non esiste frontmatter, non facciamo nulla
  }

  const frontmatter = match[1]
  const lines = frontmatter.split("\n")
  const fields = lines.map(line => line.split(":")[0].trim())

  let newFrontmatter = frontmatter

  if (!fields.includes("draft")) {
    newFrontmatter += `\ndraft: false`
  }
  if (!fields.includes("tags")) {
    newFrontmatter += `\ntags: []`
  }
  if (!fields.includes("created")) {
    newFrontmatter += `\ncreated: ${formattedDate} ${formattedTime}`
  }

  if (newFrontmatter !== frontmatter) {
    // Ricostruisce il file con frontmatter aggiornato
    const restOfFile = data.slice(match[0].length)
    return `---\n${newFrontmatter}\n---${restOfFile}`
  }

  return data // già corretto
}

function correggiFile(filePath) {
  const ext = path.extname(filePath)
  if (ext !== ".md") return

  const data = fs.readFileSync(filePath, "utf8")
  const nuovoData = aggiustaFrontmatter(data)
  
  if (nuovoData !== data) {
    fs.writeFileSync(filePath, nuovoData, "utf8")
    console.log(`✅ Frontmatter corretto: ${filePath}`)
  }
}

function scanDirectory(directory) {
  const files = fs.readdirSync(directory)
  for (const file of files) {
    const filePath = path.join(directory, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      scanDirectory(filePath)
    } else {
      correggiFile(filePath)
    }
  }
}

// Inizia la sistemazione
console.log("🔍 Scansiono tutti i file Markdown per sistemare il frontmatter...")
scanDirectory(contentDir)
console.log("🎯 Sistemazione completata!")