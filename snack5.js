function isPalindrome(stringa) {
    const stringa2 = stringa.trim().toLowerCase()
    const stringaInversa = stringa2.split("").reverse().join("")
    return stringa2 === stringaInversa
}

module.exports = { isPalindrome }