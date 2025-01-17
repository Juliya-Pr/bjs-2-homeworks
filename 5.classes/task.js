class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    this._state = value;

    if (value < 0) {
      return this._state = 0;
    }

    if (value > 100) {
      return this._state = 100;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.type = 'magazine';
      this._state = 100;

    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state){
      super(name, releaseDate, pagesCount, state);
      this.type = 'book';
      this.author = author;
    }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = 'detective';
  }
}

//задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let result = this.books.find(item => value === item[type]);
		if (result) {
			return result;
		} else {
			return null;
		}
  }

  giveBookByName(bookName) {
    let index = this.books.findIndex(item => item.name === bookName);
    if (index !== -1) {
      let deletedObj = this.books.splice(index, 1);
      return deletedObj[0];
    } else {
      return null;
    }
  }
}
