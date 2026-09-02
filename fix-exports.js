import fs from 'fs'

const src = './svg/'
const output = './lib'

const files = fs.readdirSync(src)

const jsLines = []
const dtsLines = []

files.forEach((file) => {
  if (file === 'alpha-d.svg') { return }
  const functionName = file.replace('.svg', '').split('-')
    .map(entry => `${entry[0].toUpperCase()}${entry.slice(1)}`)

  const exportName = functionName.join('')
  const moduleName = functionName.join('.')

  // Node ESM (and TS "node16"/"nodenext" resolution) require explicit
  // file extensions on relative specifiers; tsc's own output omits them
  // because the source files import each other without an extension.
  jsLines.push(`export { ${exportName} } from "./${moduleName}.js" \n`)
  dtsLines.push(`export { ${exportName} } from "./${moduleName}.js" \n`)
})

fs.writeFileSync(`${output}/index.js`, jsLines.join(''))
fs.writeFileSync(`${output}/index.d.ts`, dtsLines.join(''))
