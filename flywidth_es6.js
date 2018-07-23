class Book {
    constructor(title, author, iban, pages, year, gerne){
        this.title = title;
        this.author = author;
        this.pages = pages
        this.iban = iban,
        this.year = year;
        this.gerne = gerne;
    }

    getTitle(){
        return this.title;
    }

    showGerne(){
        return this.gerne;
    }
}

let it = new Book('It', 'Stephen King', 12345, 700, 1990, 'horror');