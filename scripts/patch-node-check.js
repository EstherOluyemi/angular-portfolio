const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../node_modules/@angular/cli/src/utilities/node-version.js');
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('processMajor > 22')) {
    content = content.replace(
      /for\s*\(const version of exports\.supportedNodeVersions\)\s*\{[\s\S]*?return false;\s*\}/m,
      `return (
        processMajor > 22 ||
        (processMajor === 22 && processMinor > 22) ||
        (processMajor === 22 && processMinor === 22 && processPatch >= 3)
    );`
    );
    fs.writeFileSync(file, content, 'utf8');
  }
}
