/* Task 1 */

// let userName = prompt("enter your number:");
// if (userName >= 10) {
    // console.log("Число больше 10")               --- wrong
// } else
//     (userName <= 10)  
//     console.log("Число меньше или равно 10")



let userNumber = parseInt(prompt("enter your number"));

if (userNumber > 10) {
    console.log("Число больше 10")          /*  ---- right */
}  else {
    console.log("Число меньше или ровно 10")
}




/* Task 2 */


let askUser = confirm("Хотите удалить файл?");

if (askUser) {
    console.log("Файл удален")
} else {
    console.log("Удаление отменено")
};



/* Task 3 */


let userAge = prompt("enter your age");

if (userAge < 18) {
    console.log("Вы еще подросток")
} else if (userAge >= 18 && userAge < 30) {
    console.log("Вы молодой взрослый")
} else if (userAge >= 30) {
    console.log("Вы уже взрослый")
}



/* Task 4 */


// let newNumber = prompt("enter new number")
// newNumber = 15    /* лишнее потому-что программа будет видеть только всегда это */
// // console.log(newNumber)                       /* ???? Как это сделать */

// let newNumber2 = (newNumber / 2) ? "Четное число" : "Нечетное число";
// console.log(newNumber2)


let newNumber = parseInt(prompt("enter new number"))
let newNumber2 = (newNumber % 2 == 0) ? "Четное число" : "Нечетное число";    /* right */
console.log(newNumber2)





/* Task 5 */


let weekDay = prompt("enter day of the week")
// console.log(weekDay)   /* Это тут лишнее потому-что будет выводится цифра над днем недели */

let WeekDay = "1"
let message;

switch (weekDay) {
    case "1":
        message = "Это понедельник";
        break;
    case "2":
        message = "Это вторник";
        break;
    case "3":
        message = "Это среда";
        break;
    case "4":
        message = "Это четверг";
        break;
    case "5":
        message = "Это пятница";
        break;
    case "6":
        message = "Это суббота";
        break;
    case "7":
        message = "Это воскресенье";
        break;
    default:
        // message2 = (message < 1 || message > 7);         /* Как сделать правильно */  /* 102 и 103 лишние */
        // console.log("Некорректное значение")
        message = "Некорректное значение"
}

console.log(message)




/* Task 6 */


let firstNumber = parseInt(prompt("enter first number"))  
let secondNumber = parseInt(prompt("enter second number"))

if (firstNumber == secondNumber) {
    console.log("числа равны")
} else {
    console.log((firstNumber > secondNumber)?"Первое число больше": "Второе число больше") 
}






/* Task 7 */


let timeOfTheYear = "1"
let newMessage;


switch (timeOfTheYear) {
    case "1":
        newMessage = "Это зима"
        break;
    case "2":
        newMessage = "Это зима"
        break;
    case "3":
        newMessage = "Это весна"
        break;
    case "4": 
        newMessage = "Это весна"
        break
    case "5":
        newMessage = "Это весна"
        break
    case "6":
        newMessage = "Это лето"
        break
    case "7":
        newMessage = "Это лето"
        break
    case "8":
        newMessage = "Это лето"
        break
    case "9":
        newMessage = "Это осень"
        break
    case "10":
        newMessage = "Это осень"
        break
    case "10":
        newMessage = "Это осень"
        break
    case "11":
        newMessage = "Это осень"
        break
    case "12":
        newMessage = "Это зима"
        break
    default:
        newMessage = "Out of range"


    
}

console.log(newMessage)