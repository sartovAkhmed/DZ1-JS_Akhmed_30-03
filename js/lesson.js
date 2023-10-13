// phone_block
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [9725]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = 'red'
    }
})
// -------------------

// EVENT LOOP
