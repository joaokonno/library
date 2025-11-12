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

function displayBooks(){
    const table = document.createElement('table'); // create table
    document.body.appendChild(table); // append table to the document
    const book = {title: 'test', author: 'test', pages: 1}; // create an instance of Book for getting key
    const keys = Object.keys(book); // get the Book properties
    const header_row = document.createElement('tr'); // create the header row
    table.appendChild(header_row); // append header row to the table

    for (const key of keys){ // loop through the keys to populate the header row
        const td = document.createElement('td');
        td.innerHTML = key
        header_row.appendChild(td);
    }

    for (const book of myLibrary){ // create a row for every book
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (const key of keys){ // populate each row with book data
            const td = document.createElement('td');
            tr.append(td);
            td.innerHTML = book[key]
        }
    }
   
}

// some test data
addBookToLibrary('black holes', 'stephen hawking', 310);
addBookToLibrary('understanding analysis', 'abbott', 200);
addBookToLibrary('introduction to electrodynamics', 'griffiths', 400);
displayBooks();