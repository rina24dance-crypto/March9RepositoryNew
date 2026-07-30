
// Task 1


fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())                      // Метод get прописывать не обязательно, fetch автоматически подставляет get
    .then(data => {
        console.log("Заголовок:", data.title)
        console.log("Текст поста:", data.body)
    })
    .catch(error => {
        console.log("Ошибка", error);
    })



// Task 1.2


async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");   // https - это протокол
        // jsonplaceholder.typicode.com - Это специальный учебный сервер, созданный для разработчиков. 
        const data = await response.json();                                             // posts/1 - это путь к конкретному ресурсу на сервере.

        console.log("Заголовок:", data.title);
        console.log("Текст поста:", data.body);
    } catch (error) {
        console.log("Ошибка:", error);
    }
}

getPost();




// // Task 1.3

// fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then(response => response.json())
//     .then(data => {
//         console.log("Новый заголовок", data.title)
//         console.log("Текст поста", data.body)
//     })
//     .catch(error => {
//         console.log("Новая ошибка", error)
//     })




// Task 1.4


// async function getPost2() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");

//         const data = await response.json();

//         console.log("Новый заголовок:", data.title)

//         console.log("Новый текст поста:", data.body)
//     } catch (error) {
//         console.log("Ошибка:", error)
//     }
// }


// getPost2()




// Task 2



fetch("https://jsonplaceholder.typicode.com/posts", {         // Отправляется http запрос, когда сервер отвечает fetch() возвращает объект Response, в котором уже лежит тело ответа(body), но оно еще не прочитано
    method: 'POST',      // Если не было прописано post, то браузер автоматически использовал бы get
    headers: {
        'Content-type': 'application/json'          // Означает что в теле запроса содержатся данные в формате json
    },
    body: JSON.stringify({        // body это тело http запроса
        title: "Название поста",
        body: "Содержимое поста",   // Данные, которые отправляются серверу
        userId: 1,

    })

})
    // В первом then (именно в response.json()) происходит чтение тела ответа; response.json() говорит браузеру "Открой body, прочитай его содержимое и преобразуй JSON в объект."
    .then(response => response.json())       // Эта строка не выполнится сразу. Она ждет, пока Promise от fetch() выполнится. Когда сервер ответит, Promise станет выполненным.
    .then(data => {                     // Второй then ждет promise, который вернул response.json()
        console.log(data)              // Когда чтение закончится data станет обычным объектом javaScript
    })

    .catch(error => {
        console.log("Ошибка", error)      // Если на любом этапе возникнет ошибка управление перейдет сюда
    })



// Task 2.2

async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {    // = значит что когда await дождется выполнения promise ты сохрани в переменную response результат этого promise - Правильно?

            // Response {
            //     status: 201,
            //     ok: true,                   Именно этот объект Response записывается в переменную response.
            //     headers: ...,
            //     body: ReadableStream
            // }



            method: "POST",
            headers: {
                "Content-Type": "application/json"     // Тут говорится серверу что отправляются данные в формате json
            },
            body: JSON.stringify({
                title: "Новый пост",            // body это тело http запроса, именно здесь находятся данные которые отправляются на сервер
                body: "Содержимое поста",
                userId: 1                    // JSON.stringify нужен чтобы отправить строку серверу
            })
        });
        // response.json внутри вызывает json.parse()
        const data = await response.json();         // эта строка означает "Возьми тело ответа, прочитай его и преобразуй JSON-текст в объект JavaScript."

        // const text = await response.text(); // Получает строку
        // const data = JSON.parse(text);      // Превращает строку в объект 
        // return data;

        console.log(data);
    } catch (error) {
        console.log("Ошибка:", error);
    }
}

createPost();



// Task 3





fetch('https://api.example.com/nonexistent')     // Отправляется get запрос по умолчанию. Ответ 404 из-за пути nonexistent
    .then(response => {        // Когда сервер ответил (404 not found) значит promise считается успешно выполненным, именно поэтому выполняется первый .then()
        if (!response.ok) {    // Если response.ok не false (false потому-что 404) тогда он равен true
            throw new Error('Ошибка сервера' + response.status);       // throw означает немедленно остановить выполнение текущего кода и выбросить ошибку. После этого нижний return уже не будет выполнен
        }                                                              // promise из fulfilled становится rejected, именно это и является причиной перехода в catch()
        return response.json();
    })
    .then(data => console.log(data))          // Этот then пропускается из-за throw
    .catch(error => console.error('Обработанная ошибка:', error));



// Task 3.2


fetch('https://api.example.com/nonexistent2')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сервера' + response.status);     // А здесь delete нету разве? Throw new Error не относится к DELETE. Он относится к проверке ответа сервера
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Обработанная ошибка:', error));




// Task 4 part 1


fetch("https://jsonplaceholder.typicode.com/posts/13", {   // url важнее чем поле id в body поэтому тут будет выходить id: 13, а не 4
    method: 'PUT',                                         // Вывелось рандомное 13 потому-что jsonplaceholder это учебный сервер. Он не проверяет, существует ли на самом деле пост с таким ID. Его задача — показать, как выглядит успешный ответ на PUT-запрос.
    headers: {                                             // Если после posts убрать цифру то сервер не будет понимать какой пост обновлять поэтому и вернет ошибку 404. В POST я ничего не прописывал но сервер сам присвоил ему id 101 и user Id: 1
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        id: 4,                           // 4 игнорируется потому-что url в приоритете
        title: "Новый заголовок",
        body: "Содержимое поста",
        userId: 1,                    // А зачем здесь userId если выше уже есть id? Потому-что userId это номер пользователя, который создал пост, а просто id это номер самого поста
    })


})

    .then(response => response.json())
    .then(data => {
        console.log("Обновленный пост:", data)
    })

    .catch(error => {
        console.log("Ошибка:", error)
    })


// Part 2

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"                                    // Почему здесь прописывается method" "Delete" и нету throw new Error как в первом примере с delete?
})
    .then(response => {

        if (!response.ok) {
            throw new Error("Ошибка сервера: " + response.status);
        }
        // console.log("Статус:", response.status);
        console.log("Удаление прошло успешно");
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });




// Task 5 (post)

async function createPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify({
                title: "Название поста",
                body: "Содержимое поста",
                userId: 1,
            })

        });



        if (!response.ok) {
            throw new Error("Ошибка сервера:" + response.status);
        }

        const data = await response.json();

        console.log("Ответ сервера:", data)


    } catch (error) {
        console.log("Ошибка:", error)
    }

}

createPost()



// 5.2 (delete)


async function deletePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"

        });

        if (!response.ok) {
            throw new Error("Ошибка сервера:" + response.status);   // Где тут ошибка?
        }

        console.log("Удаление прошло успешно")

    } catch (error) {
        console.log("Ошибка:", error);
    }
}


deletePost()


// 5.3 (put)


async function updatePost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Название поста",
                body: "Содержание поста",
                userId: 1,
            })
        });

        if (!response.ok) {
            throw new Error("Ошибка сервера:" + response.status)
        }

        const data = await response.json()
        console.log("Обновленный пост:", data)

    } catch (error) {
        console.log("Ошибка:", error)
    }
}

updatePost()



// 5.4 (get)


async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

        if (!response.ok) {
            throw new Error("Ошибка сервера" + response.status);
        }

        const data = await response.json()
        console.log("Полученный ответ", data);


    } catch (error) {
        console.error("Новая ошибка:", error)
    }

}


getPost()



// Task 6


async function getComments() {      
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments", {  // Я попросил сервер дать комментарии, он их нашел и успешно дал ответ статус которого 200
            headers: {
                "Authorization": "Bearer myToken123",   // Bearer это схема передачи токена, а дальше идет сам токен
                "User-Agent": "MyApp"        // User-Agent: MyApp отвечает на вопрос какая программа или клиент отправил этот запрос( сейчас это приложение myApp)
            }
        });

        if (!response.ok) {    // Если response.ok не true в этом случае то выполни throw new Error, но он true потому-что сервер дал статус 200
            throw new Error("Ошибка сервера:" + response.status)
        }


        const data = await response.json();      // throw new Error не выполнился потому-что javaScript перешел сюда
                                                 // Здесь response.json() берет JSON, который прислал сервер, и превращает его в объект JavaScript.
        console.log(data);


    } catch (error) {                  // Это не выполнилось
        console.log("Ошибка:", error)
    }
}

getComments()



// 6.2


async function getComments() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments", {

            headers: {
                "Authorization": "Bearer myToken124",
                "User-Agent": "MyApp2"

            }

        });


        if (!response.ok) {
            throw new Error("Ошибка сервера:" + response.status)
        }

        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log("Новая ошибка", error)
    }
}

getComments()







