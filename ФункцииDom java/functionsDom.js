
/* Task 1 */



let greet = function (name) {           /* Тут нужно прописать внутри скобок function чтобы вывелась функция внизу */

    console.log("Hi I want to say Hello world " + name + "and also it's been a wonderful time")

}

greet("and Rina ");
greet("and Dina ");




/* Task 2 */

sayHello(" Rina")       /* Можно вызвать до инициализации */
sayHello(" Zina")

function sayHello(userName) {
    console.log("Hi" + userName)
}


sayHello(" Lina")
sayHello(" Sabrina")



/* Task 3 */


const add = (a, b) => a + b;        /* Переменная которая хранит в себе функцию(a, b)  */
console.log(add(7, 8));


// let sum = (c, d) => c + d;
// console.log(sum(2, 3));


function sum (a, b) {
 return a + b     /* Не переменная, а функция */
}
console.log(sum(7, 8)); // 3




/* Task 4 */



let isEven1 = 10         /* Первая здесь всегда будет больше если не сделать меньше второго */
let isEven2 = 9

function checkNums(a, b) {                /* Это правильно ??? */   /* Здесь я просто создал два числа и определил какое из них больше */
    return a > b            /* Если уберу return ничего не меняется */      
}

console.log(checkNums(isEven1, isEven2));

if (checkNums(isEven1, isEven2)) {
    console.log("Первая больше");
} else {
    console.log("Первая меньше")
}


/* right */


// Функция проверки четности           /* Правильно как по заданию */
function isEven(number) {
    return number % 2 === 0;       /* Почему нужно делить именно на 2 */   /* Потому-что это формула*/   /* === Оператор строго равенства */
}

// Вызовы функции и вывод результатов
console.log(isEven(2));  // true
console.log(isEven(7));  // false
console.log(isEven(10)); // true
console.log(isEven(15)); // false





/* Task 5 */


let max1 = 14
let max2 = 9

function checkNums(a, b) {             /* Тут "a" будет присваиваться то, что я указал первым после console.log(checkNums)  */
     return a > b      /* Здесь я просто проверяю какое число больше */
}

console.log(checkNums(max1, max2));



/* right */


function max(a, b) {
    if (a > b) {
        return a;              /* Это правильно как по заданию */
    } else if (b > a) {
        return b;
    } else {
        return "Числа равны";
    }
}


console.log(max(5, 3)); // 5
console.log(max(2, 8)); // 8
console.log(max(4, 4)); // "Числа равны"



/* Task 6 */


function getInitials() {
    let firstInitial = prompt()[0]
    let secondInitial = prompt()[0]
    return firstInitial + ". " + secondInitial + "."         /* Точка нужна после букв в инициализации */
}
 
 console.log(getInitials())




/* Task 7 */


function s(a) {
    return a * a         /* Возведение в квадрат */
}
function cube(a) {
    return s(a) * a         /* Возведение в куб */
}  
console.log(s(2))
console.log(cube(2))



/* Task 8 */

// function sum(...aaaa) {
//     return aaaa.reduce((bbb, ccc) => bbb + ccc)
// }

// console.log(sum(5, 6, 7, 8));


function sum (a, b) {
 return a + b     /* Обычная */
}
console.log(sum(7, 8)); // 3



const sum2 = (a, b) => a + b         /* Стрелочная функция */
console.log(sum2 (4, 32))




/* Task 9 */


function getFactorial(c) {
    if (c == 0) {
        return 1
    }
    if (c == 1) {
        return 1
    }
    return c * getFactorial (c - 1)
} 

console.log(getFactorial (5))