const { getInitials } = require("./snack1.js")

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Giuseppe Rossi")).toBe("GR")
    expect(getInitials("    Arjay Laurenz Aquino")).toBe("ALA")
})