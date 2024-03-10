const axios = require('axios');

// Task 1: Get the book list available in the shop
async function getBookList() {
    try {
        const response = await axios.get('http://bookshop.com/books');
        return response.data;
    } catch (error) {
        console.error('Error fetching book list:', error);
        return [];
    }
}

// Task 2: Get the books based on ISBN
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(`http://bookshop.com/books?isbn=${isbn}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching books with ISBN ${isbn}:`, error);
        return [];
    }
}

// Task 3: Get all books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`http://bookshop.com/books?author=${author}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching books by ${author}:`, error);
        return [];
    }
}

// Task 4: Get all books based on Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://bookshop.com/books?title=${title}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching books with title ${title}:`, error);
        return [];
    }
}

// Task 5: Get book Review
async function getBookReview(bookId) {
    try {
        const response = await axios.get(`http://bookshop.com/books/${bookId}/review`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching review for book with ID ${bookId}:`, error);
        return null;
    }
}

// Task 6: Register New user
async function registerNewUser(userData) {
    try {
        const response = await axios.post('http://bookshop.com/users/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering new user:', error);
        return null;
    }
}

// Task 7: Login as a Registered user
async function loginUser(credentials) {
    try {
        const response = await axios.post('http://bookshop.com/users/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}

// Task 8: Add/Modify a book review
async function addModifyBookReview(bookId, reviewData) {
    try {
        const response = await axios.post(`http://bookshop.com/books/${bookId}/review`, reviewData);
        return response.data;
    } catch (error) {
        console.error(`Error adding/modifying review for book with ID ${bookId}:`, error);
        return null;
    }
}

// Task 9: Delete book review added by that particular user
async function deleteBookReview(bookId, reviewId) {
    try {
        const response = await axios.delete(`http://bookshop.com/books/${bookId}/review/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting review ${reviewId} for book with ID ${bookId}:`, error);
        return null;
    }
}

// Task 10: Get all books - Using async callback function
async function getAllBooks() {
    try {
        const response = await axios.get('http://bookshop.com/books/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching all books:', error);
        return [];
    }
}

// Task 11: Search by ISBN - Using Promises
function searchByISBN(isbn) {
    return new Promise((resolve, reject) => {
        axios.get(`http://bookshop.com/books?isbn=${isbn}`)
            .then(response => resolve(response.data))
            .catch(error => {
                console.error(`Error searching books by ISBN ${isbn}:`, error);
                reject(error);
            });
    });
}

// Task 12: Search by Author
async function searchByAuthor(author) {
    try {
        const response = await axios.get(`http://bookshop.com/books?author=${author}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching books by author ${author}:`, error);
        return [];
    }
}

// Task 13: Search by Title
async function searchByTitle(title) {
    try {
        const response = await axios.get(`http://bookshop.com/books?title=${title}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching books by title ${title}:`, error);
        return [];
    }
}

// Task 14: Submission of Project GitHub Link
// No code needed for this task

// Example usage:
(async () => {
    const bookList = await getBookList();
    console.log(bookList);

    const booksByISBN = await getBooksByISBN('978-3-16-148410-0');
    console.log(booksByISBN);

    const booksByAuthor = await getBooksByAuthor('J.K. Rowling');
    console.log(booksByAuthor);

    const booksByTitle = await getBooksByTitle('Harry Potter');
    console.log(booksByTitle);

    const bookReview = await getBookReview('123456');
    console.log(bookReview);

    const newUser = await registerNewUser({ username: 'john_doe', password: 'password123' });
    console.log(newUser);

    const loggedInUser = await loginUser({ username: 'john_doe', password: 'password123' });
    console.log(loggedInUser);

    const reviewAdded = await addModifyBookReview('123456', { rating: 4, comment: 'Great book!' });
    console.log(reviewAdded);

    const reviewDeleted = await deleteBookReview('123456', '7890');
    console.log(reviewDeleted);

    const allBooks = await getAllBooks();
    console.log(allBooks);

    const booksByISBNPromise = searchByISBN('978-3-16-148410-0');
    booksByISBNPromise.then(books => console.log(books)).catch(error => console.error(error));

    const booksByAuthorPromise = searchByAuthor('J.K. Rowling');
    console.log(await booksByAuthorPromise);

    const booksByTitlePromise = searchByTitle('Harry Potter');
    console.log(await booksByTitlePromise);
})();
