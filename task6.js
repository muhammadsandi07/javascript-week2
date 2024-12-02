const divideAndSort = (angka) => {
  s = angka.toString().split(0)
  let result = []
  let y = []
  let reversed
  for (let i = 0; i < 2; i++) {
    let temp = s[i].split('')
    for (let j = 0; j < temp.length; j++) {
      y.push(Number(temp[j]))
      if (j === temp.length - 1) {
        reversed = y.sort((a, b) => a - b)
        result = [...result, ...reversed]
        reversed = null
        y = []
      }
    }
    console.log(result)
  }
  return result
}

console.log(divideAndSort(5956560159466056))
