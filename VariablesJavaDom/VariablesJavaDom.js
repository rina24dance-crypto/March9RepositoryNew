

/* Task 1 */

let width = 200;
console.log(width);

let height = 175;              /* Объявляю переменную let которую нельзя использовать до их фактического объявления в коде. */
console.log(height);


height = 176;                 /* Изменяю переменную let что можно делать */
console.log(height);


height = 203;
console.log(height);


let weight = 85;             /* let видна только внутри этого блока */
console.log(weight);


weight = 110;
console.log(weight);


// let weight = 130;           /*  В одной и той же области видимости нельзя создать две переменные с одинаковым именем через let  */
// console.log(weight);        



const age = 19;
console.log(age);

const country = "Kazakhstan"
console.log(country)


/*age = 21      */            /* const не может быть изменена или повторно объявлена будет ошибка */


// const user = { name: "Rina" };
// user.name = "Kolya";                /* Почему тут не выводится Kolya? */


/* Task 2 */


var name = "Vitya";             /* var считается устаревшим можно объявлять сколько угодно раз что может привести к случайной перезаписи данных. Также var виден во всей функции, а let и const внутри одного блока  */
console.log(name)


var name = "Rina";
console.log(name)




/* Task 3 */

console.log(typeof 42);         /* Оператор typeof нужен для определения типа данных значения или переменной */
console.log(typeof "Jerry");
console.log(typeof true);
console.log(typeof false);
console.log(typeof fjdjjjj)


let game = null;                   /* Переменная с типом данных null */
console.log(game);
console.log(typeof game)           /* Почему вывел тут object? */   /*   Вывод object для значения null оператором typeof — это классическая историческая ошибка в JavaScript   */


let horror;              /* Переменная с типом данных undefined */
console.log(horror)
console.log(typeof horror);


let myName = "Rina";           /* Переменная с типом данных string */
console.log(typeof myName);


let myNumber = 26;                   /* Переменная с типом данных number */
console.log(myNumber);
console.log(typeof myNumber);


let isReady = true;                    /* Переменная с типом данных boolean */
console.log(typeof isReady)


let hasDone = false;
console.log(hasDone);


console.log(NaN + 5);


let city = NaN;
console.log(city);
console.log(typeof city)           /* Почему тут выходит number в консоли? */   /* NaN это особое числовое значение */


let result = "текст" / 2;

if (Number.isNaN(result)) {
  console.log("Переменная содержит NaN!");
}



/* Task 4 */



let text = "1.23777";
let textN = parseInt(text);          /* Преобразую строчное число в число; С помощью parceInt можно преобразовывать дробные числа в целые */

console.log(textN, typeof textN)



let text2 = "2.23"              /* функция Number здесь не делает дробные числа целыми */
let textN2 = Number(text2)

console.log(textN2, typeof textN2)



let text3 = "3.5"                   /* функция parseFloat тоже не делает дробные числа целыми */
let textN3 = parseFloat(text3)

console.log(textN3, typeof textN3)




let paper = 2
let paperS = String(paper)             /* Преобразую число в строчное число */

console.log(paperS, typeof paperS)         /* Вывожу в консоль строку и тип данных переменной */


let hotdog = 3
let hotdogS = hotdog.toString()            /* Преобразую число в строчное число */

console.log(hotdogS, typeof hotdogS)


let bool = true
let strBool = bool.toString()             /* Преобразую true в строчное true*/

console.log(strBool, typeof strBool)



/* 4.2 */


let undefined1
console.log(parseInt(undefined1))          /* Здесь выводит NaN (Not a number)  */
// console.log (undefined1.toString())          /* Ошибка - Cannot read properties of undefined */



let null1 = null
console.log(Number(null1))              /* Здесь выводит NaN (Not a number) если есть parseInt и 0 если есть функция Number  */
// console.log (null1.toString())            /* Ошибка - Cannot read properties of null */


let undefined2
console.log(parseInt(undefined2))
console.log(String(undefined2))       /* Здесь выводит underfined без ошибки */

let null2 = null
console.log(parseInt(null2))
console.log(String(null2))           /* Здесь выводит null без ошибки */




/* 5 */


let match = 250
// console.log(match.toString)        /* Я тут вывожу число 250 как строчное число */


console.log(match)
match = "hello"           /* Меняю число 250 на строку, число пропадает и записывается как строка; это динамическая типизация */
console.log(match)


let newNumber = 270
// console.log(String(newNumber))

console.log(newNumber)
newNumber = "wassup"
console.log(newNumber)



let match2 = "370"
// console.log(Number(match2))

console.log(match2)
match2 = false                    /* Меняю строку со значением 370 на boolean false */
console.log(match2)







let number = 200                  /* Динамическая типизация в JavaScript означает что переменные не привязаны к конкретному типу данных */
console.log(typeof number)


number = "wassup man"
console.log(typeof number)


number = true
console.log(typeof number)




/* 6 */


/* 1st way */

// let userName = prompt("Как вас зовут?")
// console.log(userName)
// let age2 = parseInt(prompt("Сколько вам лет?"))         
// console.log(age2)
// let hometown = prompt(("Ваш родной город"))
// console.log(hometown)
// let upcomingAge = Number(prompt("Скоро вам будет?"))
// console.log(upcomingAge)


// let userName = "n"
// console.log(userName)

// if (userName) {
//   userName2 = prompt("Как вас зовут? Сколько вам лет!");      /* Этот способ с конструкцией if else */
//   console.log(userName2)

// }
// else {
//   prompt("Нет ответа!")              /* Что тут правильное из трех */   /* Все применимы */
// }


// let userName = alert("Как вас зовут? Сколько вам лет?")
// console.log(userName)


// let userName3 = prompt("Как вас зовут?")
// console.log(userName3)

// let newAge = parseInt(prompt("Сколько вам лет"))
// console.log(newAge)



