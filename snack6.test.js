const { createSlug } = require("./snack6.js")

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido")
    expect(() => createSlug(null)).toThrow("Titolo non valido")
})