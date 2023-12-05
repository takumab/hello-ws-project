const path = require('path');
const {fileURLToPath} = require('url');

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(`Directory name: ${__dirname}`)

const outputPath = path.join(__dirname,'..', '..', 'workspaces.yml')
console.log({ outputPath });
