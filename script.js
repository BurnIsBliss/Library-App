function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (title+' by '+author+', '+pages+', '+read);
    }
}

const myLibrary = [new Book ('This is book #1', 'ABC auth', 234, 'Not read'), new Book ('#2', 'XYZ', 927, 'Read'), new Book ('watta!', 'ORS', '127', 'Not read')]

function addBookToLibrary () {
    // Do it later
}

function displayBooksInLibrary () {
    const tbodyElement = document.querySelector("tbody");
    for (let i in myLibrary) {
        const tableRowElement = document.createElement("tr");
        tableRowElement.classList = 'row-' + i;
        for (let j in myLibrary[i]) {
            const tableDataElement = document.createElement("td");
            if (typeof(myLibrary[i][j])!='function') {
                tableDataElement.textContent = myLibrary[i][j];
                tableRowElement.appendChild(tableDataElement);
            }
        }
        tbodyElement.appendChild(tableRowElement);
    }
}




displayBooksInLibrary()