const myLibrary = [];

function Book(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(author, title, pages){
    const book = new Book(author, title, pages);
    myLibrary.push(book);
}