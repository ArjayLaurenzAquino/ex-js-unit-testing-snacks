function findPostById(array, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`)
    }

    array.forEach(a => {
        if (
            a.id === undefined ||
            a.title === undefined ||
            a.slug === undefined
        ) {
            throw new Error('Array non è nel formato corretto')
        }
    })
    return array.find(p => p.id === id) || null
}

module.exports = { findPostById }