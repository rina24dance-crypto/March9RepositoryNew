// Task 1


// AJAX (Asynchronous JavaScript and XML) — это технология, которая позволяет JavaScript отправлять HTTP-запросы на сервер и получать данные без полной перезагрузки страницы.
// Когда пользователь выполняет какое-либо действие (например, нажимает кнопку или вводит текст), JavaScript отправляет запрос на сервер в фоновом режиме. Сервер возвращает данные, после чего JavaScript обновляет только нужную часть страницы, не перезагружая всю страницу целиком. Благодаря этому сайты работают быстрее и удобнее для пользователя.
// Пример использования Ajax это ютуб где комментарии и ответы могут загружаться динамически без обновления всей страницы



// Task 2

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

xhr.onload = function () {

    if (xhr.status === 200) {
        const posts = JSON.parse(xhr.responseText)

        posts.forEach(post => {
            console.log(post.title)
        })

        xhr.onerror = function () {
            console.error("Ошибка соединения")
        }




    }
}

xhr.send()



// Task 2.2


// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

// xhr.onload = function () {
//     if (xhr.status === 200) {
//         const posts = JSON.parse(xhr.responseText)

//         posts.forEach(post => {
//             console.log(post.title)

//             xhr.onerror = function () {
//                 console.error("Ошибка соединения")
//             }
//         })
//     }
// }

// xhr.send()



// Task 3


const Xhr = new XMLHttpRequest()

Xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)

Xhr.onload = function () {

    if (Xhr.status === 200) {

        const posts = JSON.parse(Xhr.responseText)

        const postList = document.getElementById("postList")

        posts.forEach(post => {


            const listItem = document.createElement("li")

            listItem.textContent = post.title

            postList.appendChild(listItem)
        })
    } else {
        console.error("Ошибка:", Xhr.status)

    }

}

Xhr.onerror = function () {

    console.error("Ошибка соединения")
}




Xhr.send()




// Task 4


const xHr = new XMLHttpRequest();

xHr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xHr.onload = function () {

    if (xHr.status === 200) {

        const posts = JSON.parse(xHr.responseText);

        const postsContainer = document.getElementById("posts");

        posts.forEach(post => {

            // Создаем список для одного поста
            const postList = document.createElement("ul");

            // Заголовок
            const title = document.createElement("li");
            title.textContent = `Заголовок: ${post.title}`;

            // Текст
            const body = document.createElement("li");
            body.textContent = `Текст: ${post.body}`;

            // ID пользователя
            const userId = document.createElement("li");
            userId.textContent = `ID пользователя: ${post.userId}`;

            // Добавляем элементы в список
            postList.appendChild(title);
            postList.appendChild(body);
            postList.appendChild(userId);

            // Добавляем список на страницу
            postsContainer.appendChild(postList);

        });

    } else {
        console.error("Ошибка:", xHr.status);
    }

};

xHr.onerror = function () {
    console.error("Ошибка соединения");
};

xHr.send();



// Task 5


const xhR = new XMLHttpRequest();

xhR.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhR.onload = function () {

    if (xhR.status === 200) {

        const posts = JSON.parse(xhR.responseText);

        console.log(posts);

    } else {

        document.getElementById("message").textContent =
            "Ошибка загрузки данных. Код ошибки: " + xhR.status;

    }

};

xhR.onerror = function () {

    document.getElementById("message").textContent =
        "Ошибка соединения с сервером.";

};

xhR.send();




// Task 6


const xhr2 = new XMLHttpRequest();

// Находим элементы
const loading = document.getElementById("loading");
const postsContainer = document.getElementById("posts");

// Показываем индикатор загрузки
loading.textContent = "Загрузка данных...";

// Настраиваем запрос
xhr2.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr2.onload = function () {

    // Убираем индикатор загрузки
    loading.textContent = "";

    if (xhr2.status === 200) {

        const posts = JSON.parse(xhr2.responseText);

        posts.forEach(post => {

            const title = document.createElement("p");
            title.textContent = post.title;

            postsContainer.appendChild(title);

        });

    } else {

        postsContainer.textContent =
            "Ошибка загрузки данных: " + xhr2.status;

    }

};

xhr2.onerror = function () {

    // Убираем индикатор
    loading.textContent = "";

    postsContainer.textContent =
        "Ошибка соединения с сервером.";

};

// Отправляем запрос
xhr2.send();