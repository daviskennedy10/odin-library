const myLibrary = []

function Book(name, date, size){
    this.name = name
    this.id = crypto.randomUUID()
    this.date = date
    this.size = size


}

function addBookToLibrary(name, date, size){
    let book = new Book(name, date, size)
    myLibrary.push(book)
}


function displayBooks(){
    const container = document.querySelector(".library-container")
    container.innerHTML = ""

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i]
        const bookcard = document.createElement("div")
        bookcard.innerHTML = `<h3>${book.name} </h3> <p>${book.date}</p><p>${book.size}</p><small>ID: ${book.id}</small>`
        container.appendChild(bookcard)
    }
}

let bookA = new Book("othello", 2002, "big")
let bookB = new Book("Romeo", 2005, "small")
let bookC = new Book("Ruger", 2012, "medium")
let bookD = new Book("Rema", 2019, "big")
let bookE = new Book("Tems", 2020, "big")
myLibrary.push(bookA)
myLibrary.push(bookB)
myLibrary.push(bookC)
myLibrary.push(bookD)
myLibrary.push(bookE)
displayBooks()

const button = document.querySelector(".new-book")
const dialog = document.querySelector("#book-dialog")
button.addEventListener("click", ()=>{
    dialog.showModal()
})

const form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const name = document.querySelector("#book-name").value
    const date = document.querySelector("#book-date").value
    const size = document.querySelector("#book-size").value
    let put = new Book(name, date, size)
    myLibrary.push(put)
    displayBooks()
    dialog.close()

})