const fs = require("fs")
const path = require("path")

const contentDir = path.join(process.cwd(), "content")
const indexFile = path.join(contentDir, "index.md")

function findMarkdownFiles(dir) {
  let files = []
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      files = files.concat(findMarkdownFiles(fullPath))
    } else if (file.endsWith(".md")) {
      files.push(fullPath)
    }
  }
  return files
}

function ensureFrontmatter(filepath) {
  let content = fs.readFileSync(filepath, "utf-8")
  if (!content.startsWith("---")) {
    const title = path.basename(filepath, ".md")
    const newContent = `---
title: "${title}"
---

${content}`
    fs.writeFileSync(filepath, newContent, "utf-8")
    console.log(`✅ Frontmatter aggiunto a: ${filepath}`)
  }
}

function createIndex(files) {
  let links = files
    .filter(f => !f.endsWith("index.md"))
    .map(f => {
      const relativePath = path.relative(contentDir, f).replace(/\.md$/, "")
      return `- [[${relativePath}]]`
    })
    .join("\n")

  const indexContent = `---
title: "Indice"
---

# Indice degli appunti

${links}
`
  fs.writeFileSync(indexFile, indexContent, "utf-8")
  console.log(`📜 Creato nuovo index.md con ${files.length - 1} link!`)
}

function main() {
  console.log("🔍 Scansiono tutti i file Markdown...")
  const files = findMarkdownFiles(contentDir)

  console.log("🛠️ Sistemo i frontmatter...")
  for (const file of files) {
    ensureFrontmatter(file)
  }

  console.log("📝 Creo/aggiorno index.md...")
  createIndex(files)

  console.log("🎯 Sistemazione completata!")
}

main()