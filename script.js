async function fetchBooks() {
    try {
      const response = await fetch('https://www.anapioficeandfire.com/api/books');
      const data = await response.json();
      processBooks(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  function processBooks(books) {
    const booksContainer = document.getElementById('books-container');
    
    books.slice(0, 10).forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      
      const titleElement = document.createElement('h2');
      titleElement.textContent = book.name;
      
      const isbnElement = document.createElement('p');
      isbnElement.textContent = `ISBN: ${book.isbn}`;
      
      const pagesElement = document.createElement('p');
      pagesElement.textContent = `Pages: ${book.numberOfPages}`;
      
      const authorsElement = document.createElement('p');
      authorsElement.textContent = `Authors: ${book.authors.join(', ')}`;
      
      const publisherElement = document.createElement('p');
      publisherElement.textContent = `Publisher: ${book.publisher}`;
      
      const releasedElement = document.createElement('p');
      releasedElement.textContent = `Released: ${book.released}`;
      
      bookElement.append(titleElement, isbnElement, pagesElement, authorsElement, publisherElement, releasedElement);
      booksContainer.appendChild(bookElement);
    });
  }

  fetchBooks();

