// MOSTRAR MENÚ
const navMenu = document.getElementById('nav-menu') 
const navToggleMenu = document.getElementById('nav-toggle')
const navCloseMenu = document.getElementById('nav-close')

if (navToggleMenu) {
    navToggleMenu.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navCloseMenu) {
    navCloseMenu.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__links')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//SCROLLTOP
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//ACTIVE LINK
const currentLink = location.href
const menuLink = document.querySelectorAll('.nav__links')
const menuLength = menuLink.length

for (let i = 0; i < menuLength; i++) {
    if (menuLink[i].href == currentLink) {
        menuLink[i].classList.add('active')
    }
}

//SCROLLREVEAL
const scrollReveal = ScrollReveal({
    distance: '60px', 
    duration: 2800,
    //reset: true,
}) 

scrollReveal.reveal('.home__data',{
    origin: 'top',
    interval: 200,
})

scrollReveal.reveal('.section__title',{
    origin: 'left',
    interval: 200,
})

scrollReveal.reveal('.practice__data',{
    origin: 'left',
    interval: 200,
})

scrollReveal.reveal('.team__data',{
    origin: 'left',
    interval: 200,
})

scrollReveal.reveal('.contact__data',{
    origin: 'left',
    interval: 200,
})

scrollReveal.reveal('.contact__form',{
    origin: 'left',
    interval: 200,
})

scrollReveal.reveal('.welcome__data',{
    origin: 'left',
    interval: 200,
})