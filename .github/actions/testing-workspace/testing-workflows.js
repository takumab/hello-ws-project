import  {dirname, join} from "path";
import {fileURLToPath} from "url";
import {writeFileSync} from "fs";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(`Directory name: ${__dirname}`)

const outputPath = join(__dirname,'..', '..', 'workspaces.yml')
writeFileSync(outputPath, '@hello-tac');
console.log({ outputPath });
