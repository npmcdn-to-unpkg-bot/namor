import test from 'ava'
import * as generate from '../src/generate'

// -----------------------------------------------------------------------------
// generate()
// -----------------------------------------------------------------------------

test('generate()', t => {
  const string1 = generate.default()
  t.is(typeof string1, 'string')
  t.ok(string1.match(/-/g).length === 2)

  const string2 = generate.default(3)
  t.is(typeof string2, 'string')
  t.ok(string2.match(/-/g).length === 3)

  const string3 = generate.default(4)
  t.is(typeof string3, 'string')
  t.ok(string3.match(/-/g).length === 4)

  const string4 = generate.default(1)
  t.is(typeof string4, 'string')
  t.ok(string4.match(/-/g).length === 1)

  const string5 = generate.default(1, 0)
  t.is(typeof string5, 'string')
  t.notOk(string5.match(/-/g))

  const string6 = generate.default(3, 0)
  t.is(typeof string6, 'string')
  t.ok(string6.match(/-/g).length === 2)

  const string7 = generate.default(3, 10)
  t.is(typeof string7, 'string')
  t.ok(parseInt(string7.slice(-10), 10) > 999999999)

  const string8 = generate.default(2, 2)
  t.is(typeof string8, 'string')
  t.ok(parseInt(string8.slice(-2), 10) > 9)

  t.throws(() => generate.default(5))
  t.throws(() => generate.default(0))
  t.throws(() => generate.default(-1))
  t.throws(() => generate.default(2, -1))
})

// -----------------------------------------------------------------------------
// randomFromArray()
// -----------------------------------------------------------------------------

test('randomFromArray()', t => {
  const arr = ['one', 'two', 'three', 'four', 'five']
  const rand = generate.randomFromArray(arr)

  t.ok(arr.indexOf(rand) > -1)
})

// -----------------------------------------------------------------------------
// randomNumber()
// -----------------------------------------------------------------------------

test('randomNumber()', t => {
  function testLength(len) {
    for (let i = 0; i < 100; i++) {
      const num = generate.randomNumber(len)
      t.is(String(num).length, len)
    }
  }

  testLength(1)
  testLength(5)
  testLength(10)
  testLength(25)
  testLength(50)
  testLength(100)

  t.throws(() => generate.randomNumber(0))
  t.throws(() => generate.randomNumber(-1))
})
