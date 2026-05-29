function getInitials(fullName) {
    const names = fullName.split(" ")
    const initials = names.map(name => name.charAt(0))
    return initials.join("")
}

module.exports = { getInitials }