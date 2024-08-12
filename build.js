import fs from 'fs'

const src = './svg/'
const output = './src'

fs.readdir(src, (err, files) => {
  if (!fs.existsSync(output)){
    fs.mkdirSync(output);
  }
  const indexStream = fs.createWriteStream(`${output}/index.ts`)
  indexStream.once('open', () => {

    files.forEach((file, i) => {
      if (file === 'alpha-d.svg') { return }
      const functionName = file.replace('.svg', '').split('-')
        .map(entry => `${entry[0].toUpperCase()}${entry.slice(1)}`)

      const svg = fs.readFileSync(src + file, { encoding: 'utf8' })
        .replace(/id="(.*?)"/g, '')
        .replace(/(viewBox="(.*?)")/g, '$1' + ' width="24" height="24" fill="currentColor" {...props}')
      const icon = `import type { SVGProps } from 'react'
export function ${functionName.join('')}(props: SVGProps<SVGSVGElement>) {
  return (
    ${svg}
  )
}
`
      const iconFileName = `${output}/${functionName.join('.')}.tsx`
      const stream = fs.createWriteStream(iconFileName)
      stream.once('open', () => stream.end(icon))
      indexStream.write(`export { ${functionName.join('')} } from "./${functionName.join('.')}" \n`)
    })
    indexStream.end()
  })
})