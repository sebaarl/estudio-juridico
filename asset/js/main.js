//JQUERY
$(document).ready(function() {
        $(window).scroll(function() {
            if($(window).width() >= 768) {
                if($(this).scrollTop() > 40) {
                    $('.header_nav').css('height', '3.5rem')
                } else {
                    $('.header_nav').css('height', '5.0rem')
                }
            }
        })
})

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

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    if (this.scrollY >= 200) {
        scrollTop.classList.add('show-scroll')
    } else {
        scrollTop.classList.remove('show-scroll')        
    }
}

window.addEventListener('scroll', scrollTop)

const currentLink = location.href
const menuLink = document.querySelectorAll('.nav__links')
const menuLength = menuLink.length

for (let i = 0; i < menuLength; i++) {
    if (menuLink[i].href == currentLink) {
        menuLink[i].classList.add('active')
    }
}