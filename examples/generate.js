const namor = require('../lib')

const nameCount = 10

for (let i = 0; i < nameCount; i++) {
  const name = namor.generate()
  console.log('regular:', name)
}

for (let j = 0; j < nameCount; j++) {
  const name = namor.generate({ manly: true })
  console.log('manly:', name)
}
