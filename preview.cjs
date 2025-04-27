const { exec } = require("child_process");

const port = 3000;
const folder = "public";

exec(`npx serve -l ${port} ${folder}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Errore durante il lancio del server: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Errore secondario: ${stderr}`);
  }
  console.log(stdout);
});