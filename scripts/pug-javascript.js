const fs = require('fs')

const prefix = 'node_modules/@yababay67/hash-router'
const buff = fs.readFileSync(`${prefix}/MarkdownRouter.js`, 'utf-8').split('\n')
    .concat(fs.readFileSync(`${prefix}/index.js`, 'utf-8').split('\n'))
buff.push(`setRouter(MarkdownRouter)`)

const allJs = 'script(type="module")\n' + buff
    .filter(el => !el.startsWith('export'))
    .filter(el => !el.startsWith('import'))
    .map(el => `    | ${el}`)
    .join('\n') + `\n\n`

fs.writeFileSync('src/pug_modules/script.pug', allJs)

