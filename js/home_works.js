/*1) Используя регулярные выражения сделать проверку на валидность gmail почты внутри проекта. 
Вёрстка уже есть в проекте, надо только добавить фукнционал*/
document.querySelector('#validation__form').addEventListener('submit', function(event) {
    event.preventDefault()
    function validation(form) {
        function remuveError(input) {
            const parent = input.parentNode
            if (parent.classList.contains('error')) {
                parent.querySelector('.error__label').remove()
                parent.classList.remove('error')
            }
        }
        // -----------------
        function createError(input, text) {
            const parent = input.parentNode

            const errorLabel = document.createElement('label')
            errorLabel.classList.add('error__label')
            errorLabel.textContent = text

            parent.classList.add('error')
            parent.append(errorLabel)
        }
        // -----------------
        let result = true
        form.querySelectorAll('input').forEach(input => {
            remuveError(input)
            if (input.value === '') {
                console.log('Field Error');
                createError(input, 'Поле не заполнено!')
                result = false
            }
        });
        return result
    }
    if (validation(this) === true) {
        console.log('Форма проверена успешно!');
    }
})
// -----------------
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{6,20}@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.textContent = 'ok'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.textContent = 'not ok'
        gmailResult.style.color = 'red'
    }
}

/*2) Используя рекурсию необходимо заставить маленький блок двигаться по родительскому блоку вправо. 
И изменяйте параметр позиции малого блока (.style.left=${переменная}px).  
Нужно чтобы маленький блок подвинулся слева на право внутри большого блока и остановился. 
Вёрстка уже есть в самом проекте.*/
const childBlock = document.querySelector('.child_block')
let positionX = 0
let positionY = 0
const recursion = () => {
    if (positionX < 450 && positionY === 0) {
        positionX += 2
        childBlock.style.left = `${positionX}px`
        setTimeout(recursion, 10)
    }else if (positionX >= 450 && positionY < 450) {
        positionY+=2
        childBlock.style.top = `${positionY}px`
        setTimeout(() => {
            recursion()
        }, 10);
    }else if (positionX > 0 && positionY > 0) {
        positionX-=2
        childBlock.style.left = `${positionX}px`
        setTimeout(() => {
            recursion()
        }, 10);
    }else if (positionX === 0 && positionY > 0) {
        positionY-=2
        childBlock.style.top = `${positionY}px`
        setTimeout(recursion, 10)
    }
}
recursion()

/* Отобразить на странице цифру 0 , создать 2 кнопки: stop и start
Если нажать на start то цифра начнет увеличиваться на единицу до 
того момента пока вы не нажмете на кнопку stop Используйте методы которые мы прошли на уроке. 
При нажатии на start повторно она должна продолжить тот счет на котором остановился. 
Добавить на кнопку reset обнуление счетчика. Обработать все возможные баги при работе счетчика 
(вёрстка в проекте уже есть) Код писать внутри проекта (home_works.js) */
const minutesS = document.querySelector('#minutesS')
const secondsS = document.querySelector('#secondsS')
const mlSecondsS = document.querySelector('#ml-secondsS')
// -------------------------
const start = document.querySelector('#start')
const stops = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let stopTime
let mlSeconds = 0
let seconds = 0
let minutes = 0

const time = () => {
    stopTime = setInterval(() => {
        mlSeconds++
        mlSecondsS.textContent = mlSeconds
        if (mlSeconds === 100) {
            mlSeconds = 0
            seconds++
            secondsS.textContent = seconds
            if (seconds === 60) {
                seconds = 0
                minutes++
                minutesS.textContent = minutes
                if (minutes === 60) {
                    minutes = 0
                }
            }
        }
    }, 10);
}
start.onclick = () => {
    time()
}
stops.onclick = () => {
    clearInterval(stopTime)
}
reset.onclick = () => {
    clearInterval(stopTime)
    mlSeconds = 0
    seconds = 0
    minutes = 0
    minutesS.textContent = '00'
    secondsS.textContent = '00'
    mlSecondsS.textContent = '00'
}