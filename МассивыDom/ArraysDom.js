// Task 1

let fruits = ["Яблоко", "Банан", "Апельсин"]

console.log(fruits)



// Task 2


let fruits2 = fruits.shift()
console.log(fruits2)

fruits2 = fruits.pop()
console.log(fruits2)

fruits.push("Груша")
console.log(fruits)



// Task 3


let fruits3 = ["Яблоко", "Банан", "Апельсин"]

console.log(fruits3)


fruits3.forEach(function(item) {
    console.log(item);
});

//

fruits3.forEach(item => console.log(item))


// Task 4


 fruits3 = fruits.forEach(item => console.log(item));

console.log(fruits3);   // forEach ничего не возвращает поэтому вывелось undefined


// fruits3 = fruits.forEach        // wrong
// console.log(fruits3)



// Task 5


// let lengths = fruits.map   - wrong


fruits4 = ["Peach", "Apple", "Banana", "Cherry"]

let lengths = fruits4.map(fruit4 => fruit4.length);
console.log(lengths)



// Task 6


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers)


let numbers2 = [3, 5, 3, 6, 3, 2, 8, 46, 39, 40, 384, 4753, 66]
let evenNumbers2 = numbers2.filter(num => num % 2 === 0)
console.log(evenNumbers2)



// Task 7


// numbers3 = numbers.reduce(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)          // wrong
// console.log(numbers3)


numbers = numbers.reduce((acc, num) => acc + num, 0)
console.log(numbers)


numbers2 = numbers2.reduce((acc, num) => acc + num, 0)
console.log(numbers2)



// Task 8


// numbers3 = numbers.find()        wrong
// console.log(numbers3)


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers.find(num => num > 5);    // find() → возвращает первый найденный элемент,  filter() → возвращает массив всех подходящих элементов.

console.log(result);    // Вывод: 6



numbers2 = [3, 5, 3, 6, 3, 2, 8, 46, 39, 40, 384, 4753, 66]
let result2 = numbers2.find(num => num > 10)

console.log(result2)


// Task 9

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = arr1.concat(arr2)
console.log(arr3)



let arr4 = [7, 8, 9]
let arr5 = [10, 11, 12]

let arr6 = arr4.concat(arr5)
console.log(arr6)



let newArr = [13, 14, 15]
let newArr2 = [16, 17, 18]

let newArr3 = newArr.concat(newArr2)
console.log(newArr3)



// Task 10


let check = fruits.includes("Банан");
console.log(check)

check = fruits.includes("Персик");
console.log(check)

check = fruits.includes("Яблоко");
console.log(check)

check = fruits.includes("Слива");
console.log(check)

check = fruits.includes("Апельсин");
console.log(check)

check = fruits.includes("Груша")
console.log(check)



// Task 11


rev = fruits.reverse()
console.log(rev)

rev2 = fruits4.reverse()
console.log(rev2)

rev3 = numbers.reverse()
console.log(rev3)

rev4 = numbers2.reverse()
console.log(rev4)


//


const users = [
  { name: 'Анна', age: 25 },
  { name: 'Иван', age: 30 }
];

const names = users.map(user => user.name);
const age = users.map(user => user.age);

console.log(names); // ['Анна', 'Иван']
console.log(age)