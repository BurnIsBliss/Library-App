// Book constructor
// function Book (title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function () {
//         return (title+' by '+author+', '+pages+', '+read);
//     }
// }

class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author,
        this.pages = pages;
        this.read = read;
    }

    info = function () {
        return (title+' by '+author+', '+pages+', '+read);
    }

    changeReadStatus = function () {
        if ((this.read).toLowerCase()=='read')
            this.read = 'Not read';
        else
            this.read = 'Read';
    }

}

// Book.prototype.changeReadStatus = function () {
//     if ((this.read).toLowerCase()=='read')
//         this.read = 'Not read';
//     else
//         this.read = 'Read';
// }

const myLibrary = [new Book ('This is book #1', 'ABC auth', 234, 'Not read'), new Book ('#2', 'XYZ', 927, 'Read'), new Book ('watta!', 'ORS', '127', 'Not read')]

// const myLibrary = [new Book ('This is book #1', 'ABC auth', 234, 'Not read'), new Book ('#2', 'XYZ', 927, 'Read'), new Book ('watta!', 'ORS', '127', 'Not read')]

function addBookToLibrary () {
    // Do it later
}


// function to display the books in the library as a table along with the delete and toggle buttons
function displayBooksInLibrary () {
    const tbodyElement = document.querySelector("tbody");
    for (let i in myLibrary) {
        const tableRowElement = document.createElement("tr");
        tableRowElement.classList = 'row-' + i;
        for (let j in myLibrary[i]) {
            const tableDataElement = document.createElement("td");
            if (typeof(myLibrary[i][j])!='function') {
                tableDataElement.textContent = myLibrary[i][j];
                if (j=='read') {
                    tableDataElement.classList = "readStatus-"+i;
                }
                tableRowElement.appendChild(tableDataElement);
            }
        }

        // Add the toggle button to the row for read and not read
        const dataElementForToggle = document.createElement("td");
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Toggle";
        toggleButton.classList.add("toggleButton", i);
        dataElementForToggle.appendChild(toggleButton);
        dataElementForToggle.style = "border : 0; background-color: white;"
        tableRowElement.appendChild(dataElementForToggle);

        // Add the delete button to the row
        const tableDataElement = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton", i);
        tableDataElement.appendChild(deleteButton);
        tableDataElement.style = "border : 0; background-color: white;"
        tableRowElement.appendChild(tableDataElement);

        tbodyElement.appendChild(tableRowElement);
    }
}

// Adding functionality for the toggle button
function addFunctionalityToggleAndDelete () {
    const toggleButton = document.querySelectorAll(".toggleButton");
    toggleButton.forEach((button) => {button.addEventListener("click", () => {
        myLibrary[Number(button.className[(button.className).length - 1])].changeReadStatus();
        const changeColumnReadStatus = document.querySelector('.readStatus-'+button.className[(button.className).length - 1]);
        changeColumnReadStatus.textContent = myLibrary[Number(button.className[(button.className).length - 1])]['read'];
                }
            )
        }
    )
    // Adding functionality to the Delete element
    const deleteButton = document.querySelectorAll(".deleteButton");
    deleteButton.forEach((button) => {
        button.addEventListener("click", () => {
            myLibrary.splice(Number(button.className[(button.className).length - 1]), 1);
            const tableBodyElement = document.querySelector("tbody");
            while (tableBodyElement.lastElementChild) {
                tableBodyElement.lastElementChild.remove();
            }
            displayBooksInLibrary();
            addFunctionalityToggleAndDelete();
            }
        )
    })
}

function openNewBookDialog () {
    const dialogElement = document.querySelector(".addBookModal");
    const newBookButton = document.querySelector(".addBook");
    newBookButton.addEventListener("click", () => {dialogElement.showModal();})

    const closeButton = document.querySelector(".closeButton");
    closeButton.addEventListener("click", () => {dialogElement.close();})

    const submitButton = document.querySelector(".submitButton");
    submitButton.addEventListener("click", (event) => {
        
        // event.preventDefault();
        // dialogElement.close();
    })
}

// Initialization
displayBooksInLibrary();
addFunctionalityToggleAndDelete();
openNewBookDialog();