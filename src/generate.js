import data from '../data.json'
import { randomFromArray, randomNumber } from './random'

/**
 * generate a random name
 * @param {int} wordCount - The number of words to include
 * @param {int} trailingNumLen - The length of the appended number
 */
export default function (options = {}) {
  if (!options.numLen && options.numLen !== 0) {
    options.numLen = 4
  }
  const numberLength = parseInt(options.numLen, 10)

  if (!options.words && options.words !== 0) {
    options.words = 2
  }
  const wordCount = parseInt(options.words, 10)

  if (wordCount < 1) {
    throw new Error('word count must be above 0')
  } else if (wordCount > 4) {
    throw new Error('word count cannot be above 4')
  }

  if (numberLength < 0) {
    throw new Error('trailing number length must be above 0')
  }

  let pattern
  switch (wordCount) {
    case 1:
      pattern = 'noun'
      break
    case 2:
    default:
      pattern = randomFromArray(['adjective|noun', 'noun|verb'])
      break
    case 3:
      pattern = 'adjective|noun|verb'
      break
    case 4:
      pattern = 'adjective|noun|noun|verb'
      break
  }

  let name = ''
  const splitPattern = pattern.split('|')

  for (let i = 0; i < splitPattern.length; i++) {
    const wordsToChooseFrom = options.manly
      ? data.manly[`${splitPattern[i]}s`]
      : data[`${splitPattern[i]}s`]

    name += randomFromArray(wordsToChooseFrom) + '-'
  }

  name += numberLength ? randomNumber(numberLength) : ''
  /* remove trailing dash */
  if (name.slice(-1) === '-') name = name.slice(0, -1)

  return name
}
