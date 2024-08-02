// Set min date prevent order in the past
function minDateString() {
    const now = new Date()
    const day = now.getDate()
    let month = now.getMonth()
    const year = now.getFullYear()
    let dateString = `${year}-${month + 1}-${day}`
    return dateString
}

// Set max date allow order in 10 days only
function maxDateString() {
    const now = new Date()
    now.setDate(now.getDate() + 10)
    const day = now.getDate()
    let month = now.getMonth()
    const year = now.getFullYear()
    let dateString = `${year}-${month + 1}-${day}`
    return dateString
}

export {
    minDateString,
    maxDateString
}