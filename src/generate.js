import data from '../data.json'

/**
 * generate a random name
 * @param {int} wordCount - The number of words to include
 * @param {int} trailingNumLen - The length of the appended number
 */
export default function (wordCount = 2, trailingNumLen = 4) {
  if (wordCount < 1) {
    throw new Error('word count must be above 0')
  } else if (wordCount > 4) {
    throw new Error('word count cannot be above 4')
  }

  if (trailingNumLen < 0) {
    throw new Error('number length must be above 0')
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
    name += randomFromArray(data[`${splitPattern[i]}s`]) + '-'
  }

  name += trailingNumLen ? randomNumber(trailingNumLen) : ''
  /* remove trailing dash */
  if (name.slice(-1) === '-') name = name.slice(0, -1)

  return name
}

/**
 * picks a random value from an array
 * @param {array} arr - The array to pick from
 * @returns {any} The value at the random key
 */
export function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * generates a random number and returns as string to prevent limits
 * @param {int} size - The number of digits to return
 * @returns {string} The generated random number (in string format)
 */
export function randomNumber(size) {
  if (!size || size <= 0) {
    throw new Error('random number size must be above 0!')
  }

  let number = ''
  for (let i = 0; i < size; i++) {
    let rand
    if (i === 0) {
      /* prevents the first number from being 0 */
      rand = Math.floor((Math.random() * 9) + 1)
    } else {
      rand = Math.floor(Math.random() * 10)
    }

    number += String(rand)
  }

  return number
}
