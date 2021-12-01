function reverseWords(word) {
    let reversedWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
    }
    return reversedWord
}

function processReverseWords(text) {
    let split = text.split(' ')
    for (let i = 0; i < split.length; i++) {
        split[i] = reverseWords(split[i])
    }
    const join = split.join(' ')
    return join
}


console.log(processReverseWords("I am A Great human"))