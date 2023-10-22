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
// tabs_slider
const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')
let currentTab = 0;

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent();
    currentTab = (currentTab + 1) % tabs.length;
    showTabContent(currentTab);
};

hideTabContent()
showTabContent()
setInterval(switchTab, 3000);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                currentTab = i
                showTabContent(currentTab)
            }
        })
    }
}

// convertMultiValute
const somInput = document.querySelector('#som'),
    usdInput = document.querySelector('#usd'),
    eurInput = document.querySelector('#eur')

const converterChanges = (elementValue, targetElement, targetElement2, isTrue) => {
    elementValue.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue === 'som') {
                targetElement.value = (elementValue.value / response.usd).toFixed(2)
                targetElement2.value = (elementValue.value / response.eur).toFixed(2)
            }else if (isTrue === 'usd'){
                targetElement.value = (elementValue.value * response.usd).toFixed(2)
                targetElement2.value = (elementValue.value * response.eur).toFixed(2)
            }else{
                targetElement.value = (elementValue.value * response.eur).toFixed(2)
                targetElement2.value = (elementValue.value * 1.06).toFixed(2)
            }
            if (elementValue.value === '') {
                targetElement.value = ''
                targetElement2.value = ''
            }
        }
    }
}
converterChanges(somInput, usdInput, eurInput, 'som')
converterChanges(usdInput, somInput, eurInput, 'usd')
converterChanges(eurInput, somInput, usdInput, 'eur')
