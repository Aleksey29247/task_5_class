class PrintEditionItem {

    constructor(name, releaseDate, pagesCount,) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
        //this._state = this.state;
    };

    fix() {
        this.state *= 1.5;


    };

    get state() {
        return this._state;
    };

    set state(stateSet) {
        if ((stateSet >= 100)) {
            this._state = 100;
        };
        if (stateSet === 0) {
            this._state = 0;
        };
        if ((stateSet > 0) && (stateSet < 100)) {
            this._state = stateSet;
        };
    };
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";

    };
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;

    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";

    };

}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";

    };

}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";

    };
};

///Задача 2
class Library {

    constructor(name) {

        this.name = name;

        this.books = [];

    };

    addBook(book) {

        if (book.state > 30) {

            this.books.push(book);
        };

    };

    findBookBy(type, value) {

        let findBook = this.books.find(book => book[type] === value);

        if (typeof findBook === 'object') {

            return findBook;

        } else {

            return null;

        };

    };

    giveBookByName(bookName) {

        let giveBook = this.books.find(book => book.name === bookName);

        if (typeof giveBook === 'object') {

            let index = this.books.indexOf(giveBook);

            this.books.splice(index, 1);

            return giveBook;

        } else {

            return null;

        };

    };

};

// 3 задача 

class Student {

    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    addMark(mark, subjectName) {
        if (this.journal.hasOwnProperty(subjectName) !== true) {
            this.journal[subjectName] = [];
            console.log("Несуществующий предмет. Предмет создан");

        };

        if ((typeof mark === "number") && (mark >= 1) && (mark <= 5)) {
            this.journal[subjectName].push(mark);
        } else {
            return console.log("Ошибка, оценка должна быть числом от 1 до 5");
        };
    }

    getAverageBySubject(subjectName) {
        if (this.journal.hasOwnProperty(subjectName) === true) {
            let sum = 0;
            let marks = this.journal[subjectName];
            marks.forEach((item, idx, marks) => sum += item);
            return sum / marks.length;
        } else {
            return console.error("Несуществующий предмет");
        };
    }




    getAverage() {
        let sum = 0;
        let marks = Object.values(this.journal);
        let resultMarks = [];

        marks.forEach((item, idx, marks) => resultMarks = [].concat(resultMarks, item));
        resultMarks.forEach((item, idx, resultMarks) => sum += item);

        return sum / resultMarks.length;

    }



    exclude(reason) {

        delete this.journal;
        this.excluded = reason;

    };

};