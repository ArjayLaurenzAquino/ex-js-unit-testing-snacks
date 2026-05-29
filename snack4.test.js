const { createSlug } = require("./snack4")

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("Questo-è-un-test")
})