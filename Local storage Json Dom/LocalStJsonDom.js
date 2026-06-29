// Task 1

// 1. Сохраняем строку в localStorage
localStorage.setItem('greeting', 'Привет, мир!');

// 2. Извлекаем данные из localStorage
const greeting = localStorage.getItem('greeting');

// 3. Проверяем и выводим в консоль
console.log(greeting);


// 1.2

localStorage.setItem('greeting2', 'Привет, Рина!')
const greeting2 = localStorage.getItem('greeting2')
console.log(greeting2)



// 1.3


localStorage.setItem('greeting3', 'Что делаешь Рина?')
const greeting3 = localStorage.getItem('greeting3')
console.log(greeting3)


// 1.4

localStorage.setItem('greeting4', 'Где был?')
const greeting4 = localStorage.getItem('greeting4')
console.log(greeting4)


// 1.5

localStorage.setItem('greeting5', 'давай сыграем!')
const greeting5 = localStorage.getItem('greeting5')
console.log(greeting5)


// Task 2


// 1. Сохраняем значение
localStorage.setItem('newGreeting', 'Привет, мир!');

// 2. Удаляем ключ из localStorage
localStorage.removeItem('newGreeting');

// 3. Пытаемся получить данные после удаления
const newGreeting = localStorage.getItem('newGreeting');

// 4. Проверяем результат
console.log(newGreeting);




// Task 2.2


localStorage.setItem('anotherGreeting', 'Hi everybody')
localStorage.removeItem('anotherGreeting')
const anotherGreeting = localStorage.getItem('anotherGreeting')
console.log(anotherGreeting)


// 2.3


localStorage.setItem('lastGreeting', 'Bye Rina!')
localStorage.removeItem('lastGreeting')
const lastGreeting = localStorage.getItem('lastGreeting')
console.log(lastGreeting)






//


// const user2 = { name: "Rina" };

// localStorage.setItem("user2", user2);          // Вывод: [object Object]

// console.log(localStorage.getItem("user2"));



// 3.2


// const newUser = {
//     name: "John",
//     age: 32,
//     isEmployed: true
// }

// const user2JSON = JSON.stringify(newUser) 
// localStorage.setItem('newUser', user2JSON)    // Здесь все верно? Да

// const storedUser2JSON = localStorage.getItem('newUser')   
// const parsedUser2 = JSON.parse(storedUser2JSON)

// console.log(parsedUser2)

// JSON это встроенный объект javaScript; его нельзя менять типа json или jsun но можно поменять переменную перед ним типа вместо userJSON написать user2JSON



// 3.3


// const anotherUser = {
//     name: "Mary",
//     age: 27,
//     city: "Madrid"
// }


// const personJSON = JSON.stringify(anotherUser)
// localStorage.setItem('anotherUser', personJSON)
// console.log(personJSON)  // undefined             // Почему это больше не undefined?

// const stored = localStorage.getItem('anotherUser')   // Почему тут выходит null когда anotherUser без кавычек?
// const parsed = JSON.parse(stored)

// console.log(stored)



//   3.4


// const finalUser = {
//     name: "Max",
//     age: 16,
//     isStudent: false
// }


// const MaxJSO = JSON.stringify(finalUser)
// localStorage.setItem('finalUser', MaxJSO)
// console.log(MaxJSO)

// const stored2 = localStorage.getItem('finalUser')
// const parsed2 = JSON.parse(stored2)

// console.log(parsed2)



  // 3.5


//   const finalUser2 = {
//     name: "Rina",
//     age: 26,
//     playsBasketball: true
//   }


//   const Jrina = JSON.stringify(finalUser2)
//   localStorage.setItem('finalUser2', Jrina)

//   console.log(Jrina)

//   const stored3 = localStorage.getItem('finalUser2')  // Если вместо finalUser2 поставить Jrina то выйдет null
//   const parsed3 = JSON.parse(stored3)
  

//   console.log(parsed3)



  // Task 3

let user = {
    name: "Rina",
    age: 26,
    isStudent: true
}

console.log(user)

let userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)    // В чем тут разница между user и userJSON?  user это объект(можно обращаться по свойствам типа name, age), а userJSON уже строка(можно обращаться по символам например userJSON[0])

// user это ➡️ объект, с которым работает JavaScript
//userJSON это ➡️ строковая версия этого объекта, подготовленная для хранения в localStorage или отправки по сети.

console.log(userJSON.name)    // userJSON.name - это строка и поэтому undefined, а user.name - это объект(user это объект) поэтому выводится "Rina"


//  setItem() — сохраняет данные в localStorage.
//getItem() — читает данные из localStorage.


// setItem()
// ↓
// Записать в localStorage

// getItem()
// ↓
// Получить из localStorage


let storedUserJSON = localStorage.getItem('user')
console.log(storedUserJSON)

let parsedUser = JSON.parse(storedUserJSON)

console.log(parsedUser)
console.log(typeof user)


  // Task 4


// 1. Извлекаем объект из LocalStorage

 user = JSON.parse(localStorage.getItem("user"))

// Добавляем новый ключ

user.country = "Kazakhstan"
        
 // Снова сохраняем обновленный объект
 localStorage.setItem("user", JSON.stringify(user))

 
  console.log(user.country)
  console.log(user.isStudent)
  console.log(user)

 // 2. Проверяем изменения
let updatedUser = JSON.parse(localStorage.getItem("user"))     // Зачем здесь эти две строки?  Для проверки
console.log(updatedUser)



// 4.2

user = JSON.parse(localStorage.getItem("user"))    //Эта строка нужна, если после перезагрузки страницы переменной user больше нет

 // Зачем тут нужны закоментированные строки если можно добавить user.city = "Almaty" без них?

user.city = "Almaty"

localStorage.setItem("user", JSON.stringify(user))

// А зачем нужен setItem() после изменения?

// Если я только написал:

// user.city = "Almaty";

// то изменился только объект в памяти.

// Чтобы сохранить это изменение навсегда, нужно снова записать объект в localStorage:

console.log(user)



// 4.3

user = JSON.parse(localStorage.getItem("user"))
user.love = "basketball"
localStorage.setItem("user", JSON.stringify(user))
console.log(user)


// 4.4

const user2 = JSON.parse(localStorage.getItem("user"))
user2.newLove = "running"
localStorage.setItem("user2", JSON.stringify(user2))
console.log(user2)


console.log(user)


// 4.5


let user3 = JSON.parse(localStorage.getItem("user2"))
user3.hobby = "dancing"
localStorage.setItem("user3", JSON.stringify(user3))
console.log(user3)






// Task 5


// Проверяем, есть ли данные в LocalStorage

let user4 = localStorage.getItem("user3");

if (user4) {
  // 1. Если данные есть — парсим и выводим
  const parsedUser = JSON.parse(user4);
  console.log("Пользователь найден:", parsedUser);

} else {
  // 2. Если данных нет — создаём нового пользователя
  const newUser = {
    name: "Jerry",
    age: 45,
    hasAJob: true
  };

  // Сохраняем в LocalStorage
  localStorage.setItem("user4", JSON.stringify(newUser));

  console.log("Новый пользователь создан:", newUser);
}


// 5.2


let user5 = localStorage.getItem("user4")                 // Почему здесь надо указывать user3 а не 4? Я создал let user5 вместо просто "user4" чтобы была переменная let и сохранил все в user4 почему тогда опять нужен еще user3?


if (user5) {
  const parsedUser2 = JSON.parse(user5)
  console.log("Новый пользователь найден", parsedUser2)

} else {
  const newUser2 = {
    name: "Julia",
    age: 23,
    city: "Paris"
  }

  localStorage.setItem("user5", JSON.stringify(newUser2))

  console.log("Еще один пользователь создан", newUser2)
}

 
// Task 6


 //1. Очищаем LocalStorage
localStorage.clear();

// 2. Проверяем
const data = localStorage.getItem("");    // Как минимум нужны пустые кавычки, а что в них не важно чтобы вывелось null после clear()

console.log(data); // null




// Task 7



const tasks = [                                         // в const tasks "tasks" это значение переменной, которое я потом перевожу в строку в JSON.stringify(tasks)
  { title: "Выучить JavaScript", completed: false },
  { title: "Сделать домашку", completed: true },
  { title: "Потренироваться", completed: false }
];

localStorage.setItem("tasks", JSON.stringify(tasks));   // tasks в кавычках это ключ, который должен совпадать с тем, что я пропишу в getItem, а tasks после stringify это значение, которое должно совпадать с tasks в переменной const

const savedTasks = JSON.parse(localStorage.getItem("tasks"));

console.log(savedTasks);


// 7.2

const newTasks = [
  { title: "Потренироваться", completed: true },
  { title: "Купить еды", completed: true},
  { title: "Прыгнуть с парашюта", completed: false}
];

localStorage.setItem("newTasks", JSON.stringify(newTasks))

const newSavedTasks = JSON.parse(localStorage.getItem("newTasks"))

console.log(newSavedTasks)




// Task 8

const tasks2 = JSON.parse(localStorage.getItem("tasks"));

// изменяем первую задачу
tasks2[0].completed = true;

// сохраняем обратно
localStorage.setItem("tasks", JSON.stringify(tasks2));

// проверяем
const updatedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(updatedTasks);


// 8.2

const tasks3 = JSON.parse(localStorage.getItem("tasks"))

tasks3[2].completed = true;

localStorage.setItem("tasks", JSON.stringify(tasks3))

const newUpdatedTasks = JSON.parse(localStorage.getItem("tasks"))
console.log(newUpdatedTasks)

//

const tasks4 = JSON.parse(localStorage.getItem("tasks"))

tasks4.push({title: "Поужинать", completed: true})

localStorage.setItem("tasks", JSON.stringify(tasks4))

const newUpdatedTasks2 = JSON.parse(localStorage.getItem("tasks"))
console.log(newUpdatedTasks2)
