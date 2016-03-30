import fs from 'fs'
import glob from 'glob'
import path from 'path'

const data = {}

const dataPath = path.resolve(__dirname, '../data')
glob(`${dataPath}/**/*.txt`, (err, files) => {
  if (err) return console.log(err)

  files.forEach((file) => {
    const keyPath = file
      .replace(dataPath, '')
      .replace(path.extname(file), '')
      .substring(1).split('/')

    const words = fs.readFileSync(file, 'utf8').trim().split('\n')
    assign(data, keyPath, words)
  })

  const output = path.resolve(__dirname, '../data.json')
  fs.writeFileSync(output, JSON.stringify(data))
})

function assign(obj, keyPath, value) {
  const lastKeyIndex = keyPath.length - 1

  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = keyPath[i]
    if (!(key in obj)) obj[key] = {}
    obj = obj[key]
  }

  obj[keyPath[lastKeyIndex]] = value
}

//     return Promise.all([
//       getWords(`${__dirname}/adjectives.txt`, 'adjectives'),
//       getWords(`${__dirname}/nouns.txt`, 'nouns'),
//       getWords(`${__dirname}/verbs.txt`, 'verbs'),
//       getWords(`${__dirname}/manly/adjectives.txt`, 'manly.adjectives'),
//       getWords(`${__dirname}/manly/nouns.txt`, 'manly.nouns'),
//       getWords(`${__dirname}/manly/verbs.txt`, 'manly.verbs')
//     ])
//
// export function getWords(file, keyPath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) return reject(err)
//
//       keyPath = keyPath.split('.')
//       data = data.trim().split('\n')
//
//       assign(WORDS, keyPath, data)
//       resolve()
//     })
//   })
// }
