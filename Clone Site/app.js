const hamburger = document.querySelector('.hamburger')
const navItem = document.querySelector('.nav-items')

hamburger.addEventListener('click', () => {
    navItem.classList.toggle('nav-item-open')
})

const accordion = document.getElementsByClassName ('AccordionItem__trigger')


accordion.addEventListener('click', () => {
    this.classList.toggle('active')
})
