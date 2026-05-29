const { findPostById } = require("./snack7.js")

const posts = [
    { id: 1, title: "Il Signore degli Anelli", slug: "Boh" },
    { id: 2, title: "Il Trono di Spade", slug: "Boh" }
]

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Il Trono di Spade", slug: "Boh" })
    expect(findPostById(posts, 3)).toBe(null)
    expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id')
    expect(() => findPostById([50, 96], 2)).toThrow('Array non è nel formato corretto')
})