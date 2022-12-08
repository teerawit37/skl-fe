import bookTypes from './bookTypes'

export function addBook() {
    return { type: bookTypes.ADD_BOOK }
}

export function buyBook() {
    return { type: bookTypes.BUY_BOOK }
}