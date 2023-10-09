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
let position = 0
const recursion = () => {
    if (position < 450) {
        position = position + 2
        childBlock.style.left = `${position}px`
        setTimeout(recursion, 10)
    }
}
recursion()