// salva questo come fixFrontmatter.js
const fs = require('fs')
const path = require('path')

const contentFolder = './content'
const outputFolder = './content-fixed'

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function hasFrontMatter(content) {
  return content.trim().startsWith('---')
}

function generateFrontMatter(title) {
  return `---\ntitle: ${title}\ndescription: Appunto automatico\n---\n\n`
}

function fixFile(inputPath, outputPath) {
  const content = fs.readFileSync(inputPath, 'utf8')
  let newContent = content

  if (!hasFrontMatter(content)) {
    const fileName = path.basename(inputPath, '.md')
    const title = fileName.replace(/[-_]/g, ' ')
    newContent = generateFrontMatter(title) + content
  }

  fs.writeFileSync(outputPath, newContent)
}

function processFolder(inputDir, outputDir) {
  ensureDirSync(outputDir)

  const entries = fs.readdirSync(inputDir, { withFileTypes: true })
  for (const entry of entries) {
    const inputPath = path.join(inputDir, entry.name)
    const outputPath = path.join(outputDir, entry.name)

    if (entry.isDirectory()) {
      processFolder(inputPath, outputPath)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      fixFile(inputPath, outputPath)
    }
  }
}

processFolder(contentFolder, outputFolder)

console.log('✅ Copia creata in content-fixed con frontmatter aggiunti dove mancavano!')