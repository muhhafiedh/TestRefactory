function isPalindrome(text) {
    const textLength = text.length;
    for (let i = 0; i < textLength / 2; i++) {
        if (text[i].toLowerCase() !== text[textLength - 1 - i].toLowerCase())
            return false;
    }
    return true;
}

console.log(isPalindrome("Makan nasi goreng"))
