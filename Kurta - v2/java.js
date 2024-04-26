/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
       
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
      
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
    
}
window.addEventListener('scroll', scrollHeader)

// swiper
var mySwiper = new Swiper('.mySwiper', {
    // Opcije
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  
  
    // Automatsko prebacivanje
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
});
//responisve hemo color

//   scrollreval
var up={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    origin:'top',
    scale:1.15
}
var left={
    easing:'ease-in-out',
    distance:'200px',
    duration:1000,
    delay:250,
    origin:'left',
    scale:1.15
}
var right={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    origin:'right',
    scale:1.15
}
var bot={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    scale:1.15
}
var rightm={
    easing:'ease-in-out',
    distance:'100px',
    duration:1000,
    delay:250,
    origin:'right',
    scale:1.15,
    mobile:false
}
ScrollReveal().reveal('.title_top',up)
ScrollReveal().reveal('.title_bot',left)
ScrollReveal().reveal('.slogan' ,right )
ScrollReveal().reveal('.btn_div',bot)
ScrollReveal().reveal('.right',rightm)
ScrollReveal().reveal('.separator',up)
ScrollReveal().reveal('.separator_bot',up)
ScrollReveal().reveal('.about_title',up)
ScrollReveal().reveal('.p1',left)
ScrollReveal().reveal('.p2',left)
ScrollReveal().reveal('.p3',bot)
ScrollReveal().reveal('.mid_card',left)