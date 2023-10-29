
/* 2) Создать отдельную страницу в проекте внутри которого должен отображаться header и footer, 
а между ними карточки. Каждая карточка должна иметь текст и описание, их описание вы получите отправив запрос.
- у каждой карточки должны быть: изображение (любое), тайтл и описание (У всех карточек может быть одинаковая картинка)
- основной момент: GET запросом получаете эти данные: https://jsonplaceholder.typicode.com/posts
Это массив, на основе этих данных рендерите карточки (как тайтл берете - “title”, как описание - “body”) 
вы должны использовать async await */

const URLS = 'https://jsonplaceholder.typicode.com/posts'

const fetchData = async function() {
    try {
        const response = await fetch(URLS)
        const data = await response.json()
        data.forEach(element => {
            const contentCards = document.querySelector('.content__cards')
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
            <h1>${element.id}</h1>
            <img class="card__user" src="../img/ghost.jpg" alt="user">
            <h2>${element.title}</h2>
            <p>${element.body}</p>
            `
            contentCards.append(div)
        })
    } catch {
        alert(Error)
    }
}
fetchData()