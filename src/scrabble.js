const letterValues = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

function scrabble(word) {
  if (!word || word.trim() === '') return 0

  let score = 0
  let doubleWord = false
  let tripleWord = false

  // Check for double/triple word score
  if (word.startsWith('{') && word.endsWith('}')) {
    doubleWord = true
    word = word.slice(1, -1)
  } else if (word.startsWith('[') && word.endsWith(']')) {
    tripleWord = true
    word = word.slice(1, -1)
  }

  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toUpperCase()
    let letterScore = 0

    if (letter === '{' && word[i + 2] === '}') {
      letter = word[i + 1].toUpperCase()
      letterScore = (letterValues[letter] || 0) * 2
      i += 2
    } else if (letter === '[' && word[i + 2] === ']') {
      letter = word[i + 1].toUpperCase()
      letterScore = (letterValues[letter] || 0) * 3
      i += 2
    } else {
      letterScore = letterValues[letter] || 0
    }

    score += letterScore
  }

  if (doubleWord) score *= 2
  if (tripleWord) score *= 3

  return score
}

module.exports = scrabble
