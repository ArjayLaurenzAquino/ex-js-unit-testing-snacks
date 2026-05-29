function findPostById(array, id) {
    return array.find(p => p.id === id)
}

module.exports = { findPostById }