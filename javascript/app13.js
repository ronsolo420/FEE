function getBook(title, author) {
    return {
        title,
        author
    };
}

let book = getBook("Harry Potter", "JK");
console.log(book);