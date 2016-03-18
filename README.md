<div align="center">
<img src="https://github.com/jsonmaur/namor/raw/master/assets/namor.png">
</div>
<br> <br>

[![Build Status](https://travis-ci.org/jsonmaur/namor.svg?branch=master)](https://travis-ci.org/jsonmaur/namor)
[![Coverage Status](https://coveralls.io/repos/github/jsonmaur/namor/badge.svg?branch=master)](https://coveralls.io/github/jsonmaur/namor?branch=master)

A manly name generator for Javascript. Generates random url-friendly names of a rugged nature. This comes in handy if you need to generate unique subdomains (like Heroku does), or unique names for anything else. Works in Node.js and web browsers.

> *Please Note: Generated names are not guaranteed to always be unique. To reduce the chances of collision, you can increase the length of the trailing number (see below). Always make sure you check your database before assuming a generated value is unique.*

## Getting Started

```bash
npm install namor --save
```

```javascript
var namor = require('namor')

/* defaults to two words, and 4 trailing numbers */
var generatedName = namor.generate()

/* generate with 3 words and no numbers */
var generatedName = namor.generate(3, 0)
```

#### Some Examples

```
bronco-brimstone-3314
pure-fireball-2782
carnal-glory-10756
saber-strike-5734
ballistic-iron-4512
hardened-jerky-4148
potent-bourbon-3517
avenged-falcon-7282

almighty-dog-run
deep-flames-dread
fiery-forge-conquer
pummeled-brawn-triumph
primal-attack-kick
```

## API

#### .generate (wordCount, trailingNumLen)

- `wordCount` `[default: 2, min: 1, max: 4]` - The number of words to include in the generated name. Must be a positive integer no higher than 4.
- `trailingNumLen` `[default: 4]` - The length of the random trailing number. Must be a positive integer. It can also be set to `0` to exclude a trailing number.

## Testing and Contributing

```bash
git clone https://github.com/jsonmaur/namor.git
cd namor
npm install
npm test
```

If you want to contribute or come across an issue that you know how to fix, [just do it](https://www.youtube.com/watch?v=ZXsQAXx_ao0). Pull requests are better than issues.
