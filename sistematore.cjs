const fs = require("fs")
const path = require("path")

const contentDir = "./content"

function fixFrontmatter(content) {
  if (!content.startsWith("---")) {
    // File senza frontmatter YAML valido, non toccare
    return null
  }

  const parts = content.split("---")

  if (parts.length < 3) {
    // Frontmatter malformato
    return null
  }

  const yaml = parts[1].trim()
  const body = parts.slice(2).join("---").trim()

  const lines = yaml.split("\n").filter(line => line.trim() !== "")
  const newYaml = []
  let hasTitle = false
  let hasDraft = false
  let hasTags = false
  let hasCreated = false

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith("title:")) {
      hasTitle = true
      newYaml.push(trimmed)
    } else if (trimmed.startsWith("draft:")) {
      hasDraft = true
      newYaml.push(trimmed)
    } else if (trimmed.startsWith("tags:")) {
      hasTags = true
      newYaml.push(trimmed)
    } else if (trimmed.startsWith("created:")) {
      hasCreated = true
      newYaml.push(trimmed)
    } else {
      newYaml.push(trimmed)
    }
  }

  if (!hasDraft) {
    newYaml.push("draft: false")
  }
  if (!hasTags) {
    newYaml.push("tags: []")
  }
  if (!hasCreated) {
    const now = new Date().toISOString()
    newYaml.push(`created: "${now}"`)
  }

  const fixed = "---\n" + newYaml.join("\n") + "\n---\n\n" + body
  return fixed
}

function processFile(filePath) {
  const ext = path.extname(filePath)
  if (ext !== ".md") {
    console.log(`⏭️  Ignorato file non Markdown: ${filePath}`)
    return
  }

  const content = fs.readFileSync(filePath, "utf8")
  const fixed = fixFrontmatter(content)

  if (fixed !== null) {
    fs.writeFileSync(filePath, fixed, "utf8")
    console.log(`✅ Sistemato: ${filePath}`)
  } else {
    console.log(`⚠️  Frontmatter non modificato (possibile errore YAML): ${filePath}`)
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      walk(fullPath)
    } else {
      processFile(fullPath)
    }
  }
}

console.log("🔍 Scansiono tutti i file Markdown per sistemare il frontmatter...")
walk(contentDir)
console.log("🎯 Sistemazione completata!")