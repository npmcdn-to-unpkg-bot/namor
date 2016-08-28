import test from 'ava'
import * as random from './random'

// -----------------------------------------------------------------------------
// randomFromArray()
// -----------------------------------------------------------------------------

test('randomFromArray()', (t) => {
  const arr = ['one', 'two', 'three', 'four', 'five']
  const rand = random.randomFromArray(arr)

  t.truthy(arr.indexOf(rand) > -1)
})

// -----------------------------------------------------------------------------
// randomNumber()
// -----------------------------------------------------------------------------

test('randomNumber()', (t) => {
  const testLength = (len) => {
    for (let i = 0; i < 100; i++) {
      const num = random.randomNumber(len)
      t.is(String(num).length, len)
    }
  }

  testLength(1)
  testLength(5)
  testLength(10)
  testLength(25)
  testLength(50)
  testLength(100)

  t.throws(() => random.randomNumber(0))
  t.throws(() => random.randomNumber(-1))
})
