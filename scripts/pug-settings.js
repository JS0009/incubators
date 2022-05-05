const fs = require('fs')
const YAML = require('js-yaml')

const settings = fs.readFileSync('src/settings.yaml', 'utf-8')
YAML.parse = YAML.load

const buff = []

for(const [key, value] of Object.entries(YAML.parse(settings))) {
    buff.push(`- var ${key} = ${JSON.stringify(value)}`)
}

fs.writeFileSync('src/pug_modules/settings.pug', buff.join('\n') + '\n')

