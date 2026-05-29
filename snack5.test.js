const { isPalindrome } = require("./snack5")

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Anna")).toBeTruthy()
    expect(isPalindrome("Cane")).toBeFalsy()
})