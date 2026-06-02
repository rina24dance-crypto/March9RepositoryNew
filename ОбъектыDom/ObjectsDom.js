// Task 1

let person = {
    name: "Rina",
    age: 26,
    city: "Almaty"

};

console.log(person);


let person2 = {
    name: "Jalen",
    age: 29,
    city: "New York",
    isEmployed: true
}

console.log(person2)



// Task 2


let personRepeat = {
    name: "Rina",
    age: 26,
    city: "Almaty",

};

personRepeat.city = "Boston";
console.log(personRepeat.name);
console.log(personRepeat.age);
console.log(personRepeat.city)



// Task 3

personRepeat = {
    name: "Rina",
    age: 26,
    city: "Almaty",

};

personRepeat.greet = function () {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`)
}
personRepeat.greet()




let greet2 = function (name, age) {
    {
        console.log(`Привет, меня зовут ${name}, мне ${age}`)
    }

}

greet2("Ринат", 26)



// Task 4


const obj1 = { a: 10, b: 20 };
const obj2 = { a: 10, b: 20 };       //  JavaScript проверяет, указывают ли переменные на один и тот же объект. Поскольку ссылки разные, результат — false.

console.log(obj1 == obj2);   // false
console.log(obj1 === obj2);  // false



// const obj1 = { a: 10, b: 20 };    /*   Здесь obj3 хранит ту же ссылку, что и obj1, поэтому обе проверки возвращают true.   */
// const obj3 = obj1;

// console.log(obj1 == obj3);   // true
// console.log(obj1 === obj3);  // true



// Task 5


const book = {
    title: "Relentless",
    author: "Tim Grover",
    details: {
        year: 2013,
        pages: 272
    }
};

// Поверхностное копирование
// const bookCopy = Object.assign({}, book);
const bookCopy = structuredClone(book);
// Изменяем вложенный объект
bookCopy.details.year = 2026;
console.log(book.details.year);     // 2013
console.log(bookCopy.details.year); // 2013



// Task 6


const calculator = {
    a: 10,
    b: 6,




    sum: function() {
        return this.a + this.b;
    },

    multiply() {
        return this.a * this.b;
    }

}

console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.multiply());



// Task 7

const car = {brand: 1, model: 2}
car.brand = 3   // Так можно менять 
car.model = 6
// car = {brand: 5, model: 7}    // Error, assignment to constant variable
console.log (car)       // Можно изменить свойство объекта потому-что меняется то, что внутри отдельно, а не вся ячейка