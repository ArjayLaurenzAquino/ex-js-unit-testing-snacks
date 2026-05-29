function average(array) {
    array.forEach(a => {
        if (isNaN(a)) {
            throw new Error("La funzione vuole solo numeri!")
        }
    })

    return array.reduce((prev, curr) => prev + curr, 0) / array.length
}

module.exports = { average }