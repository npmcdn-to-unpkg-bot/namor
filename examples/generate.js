var namor = require('../lib')

var nameCount = 10

for (var i = 0; i < nameCount; i++) {
  var name = namor.generate()
  console.log('regular:', name)
}

for (var i = 0; i < nameCount; i++) {
  var name = namor.generate({ manly: true })
  console.log('manly:', name)
}
