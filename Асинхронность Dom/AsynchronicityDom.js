// Task 1


setTimeout(() => {
  console.log('Привет мир!');

}, 2000)


setTimeout(() => {
    console.log('Прошло 3 секунды');
}, 3000)


setTimeout(() => {
    console.log('Прошло 4 секунды');
}, 4000)



// Task 2 and 3




// const timer = setInterval(() => {
//     const now = new Date();

//     const hours = String(now.getHours()).padStart(2, "0");      // Что тут значит now? Это просто переменная, которую можно менять
//     const minutes = String(now.getMinutes()).padStart(2, "0");
//     const seconds = String(now.getSeconds()).padStart(2, "0");

//     console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);


// setTimeout(() => {
//     clearInterval(timer)
// }, 5000)



// 2

// const timer2 = setInterval(() => {
//     const rightNow = new Date();

//     const hours = String(rightNow.getHours()).padStart(2, "0");        
//     const minutes = String(rightNow.getMinutes()).padStart(2, "0");
//     const seconds = String(rightNow.getSeconds()).padStart(2, "0");

//     console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);

// // 3

// setTimeout(() => {
//     clearInterval(timer2)
// }, 6000)




//

// //Начальное время: 10:15:30
// let time = new Date(2026, 7, 19, 10, 15, 30);           // Почему тут с нулей пошло?  Потому-что нужно начинать с год-месяц-день

// const Timer2 = setInterval(() => {
//     const hours = String(time.getHours()).padStart(2, "0");
//     const minutes = String(time.getMinutes()).padStart(2, "0");
//     const seconds = String(time.getSeconds()).padStart(2, "0");

//     console.log(`${hours}:${minutes}:${seconds}`);

//     // Увеличиваем время на 1 секунду
//     time.setSeconds(time.getSeconds() + 1);
// }, 1000);




// Task 4


// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Данные получены!");     // - right
//         }, 3000);
//     });
// }


// fetchData()
//     .then(result => {
//         console.log(result);
//     });



// function fetchData() {
//     setTimeout(() => {
//         return "Данные получены!";       - wrong
//     }, 3000);
// }



// 4.2


// function fetchData2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Информация получена");
//         }, 4000);
//     })
// }

// fetchData2()
//     .await(result => {
//         console.log(result)
//     });



// 5



// function fetchDataWithError() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Ошибка загрузки!");
//         }, 4000);
//     });
// }

// fetchDataWithError()
//     .catch(error => {
//         console.log(error);
//     });


// 5.2


// function fetchDataWithError2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Новая ошибка");
//         }, 2500);
//     });
// }

// fetchDataWithError2()
//     .catch(error => {
//         console.log(error);
//     });




// 6



// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Данные получены!");
//         }, 3000);
//     });
// }


// async function fetchDataAsync() {
//     const result = await fetchData();
//     console.log(result);

// };


// fetchDataAsync();                     // Почему не выводится если я убираю эту строку? Я же добавил console.log(result) выше
//Потому-что console.log(result) находится внутри функции
//console.log(result) будет выполняться только когда функция будет вызвана

// 6.2


function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Новые данные получены!");
        }, 3500);
    })
}


async function fetchData2Async() {
    const result2 = await fetchData2();
    console.log(result2)
};


fetchData2Async()


// 7


function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Новая ошибка загрузки!");
        }, 5000);
    });
}

async function fetchDataWithErrorAsync() {
    try {
        const data = await fetchDataWithError();       // А почему ошибка uncaught (in promise) осталась?
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchDataWithErrorAsync();


//

// catch (error) {               // Ошибка После try обязательно должно быть: либо catch, либо finally, либо и catch и finally


//     console.log(error);
// }



// 8


function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача 1 выполнена");
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Задача 2 выполнена");
        }, 2000);
    });
}

async function runTasks() {
    const result1 = await task1();
    console.log(result1);

    const result2 = await task2();
    console.log(result2);
}

runTasks();                       // Отдельный вызов функции



// 8.2

function task3() {
    return new Promise ((resolve) => {          
        setTimeout(() => {
            resolve("Задача 3 выполнена")
        }, 3000);
    })
}


function task4() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Задача 4 выполнена")
        }, 4000);
    })
}


async function runTasks2() {
    const result3 = await task3();
    console.log(result3);

    const result4 = await task4();
    console.log(result4);


}

 runTasks2()             // Отдельный вызов функции


async function main() {
    await runTasks();   // дождаться выполнения task1 и task2           Последовательный запуск(будет 1, 2, 3, 4)
    await runTasks2();  // только потом начать task3 и task4
}

main();



// 9

// function taskA() {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             console.log("TaskA завершилась")
//             resolve("Задача А выполнена")
//         }, 2000);
//     })
// };


// function taskB() {
//     return new Promise ((resolve) => {     // Почему обе задачи выводятся одновременно? Потому-что первая задерживается из-за promise.all
//         setTimeout(() => {
//             console.log("TaskB завершилась")
//             resolve("Задача Б выполнена")
//         }, 3000)
//     })
// };


// async function runTasks3() {
//     const results5 = await Promise.all([taskA(), taskB()])

// console.log(results5[0])      
// console.log(results5[1])

// }

// runTasks3();



//


// async function test() {
//     console.log("Старт");

//     const result = await Promise.all([
//         taskA(), // 2 сек
//         taskB()  // 3 сек
//     ]);

//     console.log(result);
//     console.log("Конец");
// }

// test();



// 10


function delayedMessage(message, delay) {           // А что тут значат message и delay? Это параметры функции, параметры которых примут другие значения если вызвать функцию по-другому(например message: как дела и delay 1000 вместо привет и 2000)
    return new Promise((resolve) => {           
        setTimeout(() => {
            console.log(message);
            resolve();               // Почему привет вывелось, а как дела нет когда я закомментировал эту строку(resolve())?
        }, delay);
    });                                 // Потому-что promise не завершится и останется в состоянии pending

                                        // Также await ждет пока promise завершится но он не завершается поэтому функция run() останавливается на первой строке

}


async function run() {      // async автоматически заворачивает любое возвращаемое значение в promise
    await delayedMessage("Привет", 2000);       // await тут нужен как последовательность чтобы второй promise не выводился раньше первого
    await delayedMessage("Как дела", 1000)
}

//run();



// 10.2

function anotherMessage(message2, delay2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message2);
            resolve();
        }, delay2);
    })

}

async function newRun() {
    await anotherMessage("Где был?", 1500);     
    await anotherMessage("Тренил?", 1500)
}



//newRun();

//

async function main() {       // вставил run и newRun чтобы обе функции запускались последовательно
    await run();
    await newRun();
}

main();
