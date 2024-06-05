
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'logs');
const destDir = path.join(__dirname, 'dist', 'logs');

if (fs.existsSync(srcDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir).forEach((file) => {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  });
} else {
  console.log('No logs directory found.');
}
