// Task 1

let count = 0
while (count <= 10) {
    console.log(count);
    count++;
}


// Task 2

let newCount = 0

while (newCount <= 10) {
    if (newCount === 5) {
        newCount++           // Если убрать newCount++ то не будет считать после 4
        continue;

    }

    if (newCount === 8) {
        break
    }

    console.log(newCount)
    newCount = newCount + 1       // Если убрать newCount = newCount + 1, то будет бесконечный цикл 

}



// Task 3


let doCount = 10

do {
    // do while сначала делает, а потом проверяет
    console.log(doCount)
    doCount++
} while (doCount < 6)



let doCount2 = 10

while (doCount2 < 20) {      // while сначала проверяет все ли верно
    console.log(doCount2)
    doCount2++

}



// Task 4

number = 0
while (true) {
    if (number == 10) {       // Это правильно но не по заданию потому-что нет prompt и пользователь не может вывести 10; Здесь просто выводятся числа с 0
        break;
    }
    console.log(number)
    number++         // Если убрать number ++ то будет бесконечно выводится 0
}


// Task 4 по заданию


while (true) {
    let number = Number(prompt("Введите число:"));     // Если убрать Number то не будет выводится 10 потому-что сначала нужно преобразовать number из строки число

    if (number === 10) {
        //console.log("Вы ввели 10. Цикл завершён.");
        break;
    }

    console.log("Неверное число. Попробуйте снова.");
}



// Task 5


for (let a = 1; a <= 10; a++) {
    console.log(a)
}

for (let b = 1; b <= 7; b++) {
    console.log(b)
}

for (let c = 1; c <= 3; c++) {
    console.log(c)
}

for (let d = 1; d <= 8; d++) {
    console.log(d)
}


// Task 6

let newNum = 0
for (; ;) {
    if (newNum > 100) {
        break;
    }
    console.log(newNum)
    newNum++
}



let i = 0;

for (; ;) {
    i++;            // Выводится с 1 потому-что я увеличиваю "i" до вывода, а не после; Если после то нужно после console.log(i)


    if (i > 100) {
        break;
    }
    //console.log(i)      // Здесь будет выводится все потому-что вывод внутри цикла

}
console.log(i); // Почему выходит только 101, а не с 1 до 100? Потому что в этом коде console.log(i) находится после завершения цикла, а не внутри него.




// Task 7

let array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}


let array2 = [6, 7, 8, 9, 10]

for (let a = 0; a < array.length; a++) {
    console.log(array2[a])
}


let array3 = [11, 12, 13, 14, 15]

for (let b = 0; b < array.length; b++) {
    console.log(array3[b])
}



// Task 8


for (let c = 1; c <= 5; c++) {     // for используют, когда заранее известно количество повторений; То есть ты понимаешь, сколько раз нужно пройти цикл.
    console.log(c)
}


let input = "";

while (input !== "10") {                             // while используют, когда количество повторений заранее неизвестно и зависит от условия (например, ввод пользователя, ожидание события, поиск).
    input = prompt("Введите число (10 для выхода):");
}



let input2;

while (input2 !== "stop") {
   input2 = prompt("Введите 'stop' для завершения");

   if (input2 !== "stop") {                 // Благодаря этой строке не будет выводиться "Вы ввели stop"
      console.log("Вы ввели: " + input2);
   }
}



// let input3;

// while (input3 !== "Job finished") {
//     input3 = prompt("Enter 'Job finished' once you do everything")    // Правильный вывод Job finished но выводить в консоль я могу что угодно

//     if (input3 !== "Job finished") {
//         console.log("You entered:" + input3)      // Нужны ли здесь закоментированные строки? Нужно чтобы выводить ошибки пользователя
//     }
// }


// let input = "";
// while (parseInt(input) !== 15) {
//     input = prompt("Enter 15 for exit");
// }




// Task 9

for (let i = 10; i >= 1; i--) {      // Цикл for который выводит числа от 10 до 1 в обратном порядке
    console.log(i);
}


for (let i = 20; i >= 11; i--) {
    console.log(i)
}



// Task 10


for (let i = 1; i <= 10; i ++) {     // Цикл for, который выводит только четные числа от 2 до 10
    if ( i % 2 == 0) {
        console.log(i)
    }
}


for (let i = 11; i <= 20; i ++) {    // Здесь только нечетные числа
    if (i % 2 == 1) {
        console.log (i)
    }
}


for (let i = 21; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 31; i <= 40; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}