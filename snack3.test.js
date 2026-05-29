const { average } = require("./snack3")

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const numeri = [9, 5, 7]
    expect(average(numeri)).toBe(7)
    expect(() => average(["ciao", 5])).toThrow()
})