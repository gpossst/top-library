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
  myLibrary.push(new Book(title.value, author.value, pages.value, read.value));
  inputs.reset();
  form.style.visibility = 'hidden';
});

// ------- Array Display Functionality -------

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
