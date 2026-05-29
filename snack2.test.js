const { createSlug } = require("./snack2.js")

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("CIAO")).toBe(("ciao"))
    expect(createSlug("CIaO CoMe sTAi?")).toBe(("ciao come stai?"))
})