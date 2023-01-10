const form = document.querySelector('#form-container');
const myLibrary = [];

// ------- Constructor Functionality -------

const submitBtn = document.querySelector('#submit-button');
const inputs = document.querySelector('#form');

// new book constructor

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let completed;
    if (read === true) {
      completed = 'read';
    } else { completed = 'not read'; }
    alert(`${title} by ${author} has ${pages}. You have ${completed} this book.`);
  };
}

// push created book to myLibrary array

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value !== '' || author.value !== '' || pages.value !== '') {
    if (document.querySelector('#read').checked) {
      myLibrary.push(new Book(title.value, author.value, pages.value, true));
    } else { myLibrary.push(new Book(title.value, author.value, pages.value, false)); }
  }
  inputs.reset();
  removeAllChildNodes(list);
  popList();
  form.style.visibility = 'hidden';
});

// ------- Array Display Functionality -------

const list = document.getElementById('list');

const popList = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    const popTitle = document.createElement('div');
    popTitle.textContent = myLibrary[i].title;
    list.appendChild(popTitle);
    const popAuthor = document.createElement('div');
    popAuthor.textContent = myLibrary[i].author;
    list.appendChild(popAuthor);
    const popPages = document.createElement('div');
    popPages.textContent = myLibrary[i].pages;
    list.appendChild(popPages);
    const popRead = document.createElement('div');
    popRead.textContent = myLibrary[i].read;
    list.appendChild(popRead);
    const statusBtn = document.createElement('button');
    statusBtn.textContent = 'Complete';
    statusBtn.addEventListener('click', (e) => readBook(i));
    list.appendChild(statusBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => deleteBook(i));
    list.appendChild(deleteBtn);
  }
};

// ------- Delete Child Nodes -------

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// ------- Popup Functionality -------

const popupOpenBtn = document.querySelector('.new-book');
const popupCloseBtn = document.querySelector('#cancel-button');

// link opening button to popup
popupOpenBtn.addEventListener('click', () => {
  form.style.visibility = 'visible';
});

// link closing button to popup
popupCloseBtn.addEventListener('click', () => {
  form.style.visibility = 'hidden';
});

// delete single book function
const deleteBook = (bookNum) => {
  myLibrary.splice(bookNum, 1);
  removeAllChildNodes(list);
  popList();
};

// book status read
const readBook = (bookNum) => {
  myLibrary[bookNum].read = true;
  removeAllChildNodes(list);
  popList();
};
