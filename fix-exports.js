import fs from 'fs'

const src = './svg/'
const output = './lib'

fs.readdir(src, (err, files) => {
  const indexStream = fs.createWriteStream(`${output}/index.js`)
  indexStream.once('open', () => {

    files.forEach((file, i) => {
      if (file === 'alpha-d.svg') { return }
      const functionName = file.replace('.svg', '').split('-')
        .map(entry => `${entry[0].toUpperCase()}${entry.slice(1)}`)

      indexStream.write(`export { ${functionName.join('')} } from "./${functionName.join('.')}.js" \n`)
    })
    indexStream.end()
  })
})