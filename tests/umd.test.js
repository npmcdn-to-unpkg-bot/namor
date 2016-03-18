/* global Namor */
import test from 'ava'
import '../src/umd'

// -----------------------------------------------------------------------------
// UMD global
// -----------------------------------------------------------------------------

test('UMD global', t => {
  t.ok(Namor)
  t.is(typeof Namor.generate, 'function')
})
