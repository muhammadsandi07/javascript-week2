// palindrom

const palindrom  = (text) =>{
    const reversed = text.split('').reverse().join('')
    if(reversed === text){
        return `${text} adalah palindrom;`
    }else{
        return `${text} bukan palindrom;`

    }
}

console.log(palindrom('malam'));

// reverse words
const reverseWord  = (text) =>{
    const reversed = text.split(' ').reverse().join(' ')
    return reversed
    
}

console.log(reverseWord("saya belajar javascript "));