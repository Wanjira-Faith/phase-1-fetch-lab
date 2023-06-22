
 //Fetch requests
  //Get fetch for all books resources
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
 .then(response => response.json())  //function that needs to be called to convert JSON response into an object                    
 .then(booksData => renderBooks(booksData))
}
 //DOM render functions
function renderBooks(books) {
  //Build books
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML= book.name;
    main.appendChild(h2);
  });
}
 
//Initial Render=only necesarry to call it if fetch() is not called in the DOMContentLoaded
//Get Data and Render our books to the DOM
// function initialize(){
//   fetchBooks()
// } 
// initialize()

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
