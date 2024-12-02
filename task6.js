const divideAndSort = (angka) => {
  s = angka.toString().split(0)
  let result = []
  let y = []
  let reversed
  for (let i = 0; i < 2; i++) {
    let temp = s[i].split('')
    console.log(temp, 'ini temp')
    for (let j = 0; j < temp.length; j++) {
      y.push(Number(temp[j]))
      console.log(y, 'y')
      if (j === temp.length - 1) {
        reversed = y.sort((a, b) => a - b)
        result = [...result, ...reversed]
        reversed = null
        y = []
      }
    }
    console.log(z)
  }
}

divideAndSort(5956560159466056)
