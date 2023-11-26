const hamburger = document.querySelector('.hamburger')
const navItem = document.querySelector('.nav-items')

hamburger.addEventListener('click', () => {
    navItem.classList.toggle('nav-item-open')
})

const accordion = document.getElementsByClassName ('AccordionItem__trigger')

for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}