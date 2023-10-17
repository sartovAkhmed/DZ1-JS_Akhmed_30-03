const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalBtn = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
modalTrigger.onclick = () => openModal()

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modal.onclick = (event) => {
    if (event.target === modal || event.target === closeModalBtn) closeModal()
}

const scrollDown = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', openModal);
    }
}
window.addEventListener('scroll', scrollDown);
setTimeout(openModal, 10000)