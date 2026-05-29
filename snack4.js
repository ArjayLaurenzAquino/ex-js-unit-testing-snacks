function createSlug(string) {
    const stringaModificata = string.split(" ").join("-")
    return stringaModificata
}

module.exports = { createSlug }