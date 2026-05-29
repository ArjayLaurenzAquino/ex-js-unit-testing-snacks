function average(array) {
    const somma = array.reduce((prev, curr) => prev + curr, 0)
    const media = somma / array.length
    return media
}

module.exports = { average }