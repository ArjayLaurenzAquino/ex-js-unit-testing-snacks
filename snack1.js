function getInitials(fullName) {
    const names = fullName.split(" ").filter(str => str !== "")
    const initials = names.map(name => name.charAt(0))
    return initials.join("").toUpperCase()
}

module.exports = { getInitials }