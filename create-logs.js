
const fs = require('fs');
const path = require('path');

// const srcDir = path.join(__dirname, 'logs');
// const destDir = path.join(__dirname, 'dist', 'logs');
const srcDir = path.join(__dirname);
const destDir = path.join(__dirname);

const logDir = path.join(__dirname, 'logs');
const logFilePath = path.join(logDir, 'user.log');

console.log('logDir ', logDir)

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
  fs.writeFileSync(logFilePath, '');
}



console.log('Contenido de la carpeta "root":');

const items = fs.readdirSync(srcDir);
items.forEach(item => {
  const itemPath = path.join(srcDir, item);
  const stats = fs.statSync(itemPath);

  if (stats.isDirectory()) {
    console.log(`Directorio: ${item}`);
  } else if (stats.isFile()) {
    console.log(`Archivo: ${item}`);
  }
});

// if (fs.existsSync(srcDir)) {
//   fs.mkdirSync(destDir, { recursive: true });
//   fs.readdirSync(srcDir).forEach((file) => {
//     fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
//   });
// } else {

//   fs.appendFileSync(logFilePath, log);
//   console.log('sourceDir: ', srcDir)
//   console.log('destDir: ', destDir)
//   console.log('No logs directory found.');
// }
