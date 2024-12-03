// palindrom

const palindrom = (sentences) => {
  if (typeof sentences === 'string') {
    const temp = sentences.toLocaleLowerCase()
    const reversed = temp.split('').reverse().join('')
    if (reversed === temp) {
      return `${sentences} adalah palindrom`
    } else {
      return `${sentences} bukan palindrom`
    }
  }
}

console.log(palindrom('malam'))
console.log(palindrom('kasur rusak'))
console.log(palindrom('Kasur Rusak'))

// reverse words
const reverseWord = (text) => {
  const reversed = text.split(' ').reverse().join(' ')
  return reversed
}

console.log(reverseWord('saya belajar javascript'))
