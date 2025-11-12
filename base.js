const myLibrary = [];

function Book(title, author, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}