const myLibrary = []; // array for storing books
const table = document.createElement('table'); // create table
document.body.appendChild(table); // append table to the document

function Book(title, author, pages){
    // Constructor for Book objects
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages){
    // This function instantiates a new Book object and pushes it to myLibrary
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function displayBooks(){
    // This function displays all books in a table
    table.innerHTML = ''; // reset the table contents in case we want to update it
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

// Create button for showing dialogue
const add_book_btn = document.createElement('button');
add_book_btn.textContent = 'add book';
document.body.append(add_book_btn);
const dialog = document.querySelector('dialog'); // get a handle for the dialogue

add_book_btn.addEventListener('click', () =>{ // show dialogue when button is pressed
    dialog.showModal();
})

const form = document.querySelector('form');
dialog.addEventListener('close', (event) => {
    console.log(dialog.returnValue);
    // when form is closed, get the data, create a new Book instance and update the table
    if (dialog.returnValue === 'confirm'){
        const formData = new FormData(form); 
        const title = formData.get('title');
        const author = formData.get('author');
        const pages = formData.get('pages');
        console.log(title);
        addBookToLibrary(title, author, pages);
        displayBooks();
    }
})

// configure the confirm button to prevent the default form behaviour and close the dialog
confirmButton = document.querySelector('#confirm-btn');
confirmButton.addEventListener('click', (event) => {
    if (!form.reportValidity()) return; // prevent submission if not all required fields have been filled
    event.preventDefault();
    dialog.close('confirm')
})