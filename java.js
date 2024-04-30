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
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    const slika = document.getElementById('slika')
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
    this.scrollY >= 50 ? slika.classList.remove('logo1') 
                       : slika.classList.add('logo1')
}
window.addEventListener('scroll', scrollHeader)

/*===============EMAIL===============*/
function sendMail(event){
    event.preventDefault(); // Prevent the default form submission

    if (!validateForm()) { // Ako forma nije validna, prekidamo funkciju
        return;
    }
    
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_pydgeu7";
    const templateID ="template_4u2020c";
    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value="";
        document.getElementById("email").value=""; // Fixed typo here
        document.getElementById("message").value="";
        console.log(res);
        Swal.fire({
            title: "Thank you",
            text: "Your message has been sent!",
            icon: "success"
          });
    })
    .catch((err) => console.log(err));
}

//validacija 
function validateForm() {
    var isValid = true;
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Osnovni regex za validaciju e-maila

    // Validacija imena
    if (!nameInput.value.trim()) {
        nameError.style.display = 'flex';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validacija e-maila
    if (!regex.test(emailInput.value)) {
        emailError.style.display = 'flex';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validacija poruke
    if (!messageInput.value.trim()) {
        messageError.style.display = 'flex';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    return isValid; // Ako je isValid false, sprečava slanje forme
}


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
var cardup ={
    easing:'ease-in-out',
    origin:'bottom',
    distance:'200px',
    duration:2000,
    delay:250,
    reset:true
}

var carddown={
    easing:'ease-in-out',
    origin:'top',
    distance:'200px',
    duration:2000,
    delay:250,
    reset: true
}
ScrollReveal().reveal('.c',
{
    delay:500 ,
    origin:'right',
    distance:'500px',
    easing:'ease-out',
    duration:1000,
    
});
ScrollReveal().reveal('.a',
{ 
    origin: 'left',
    delay:1000,
    duration:1000,
    distance:'500px',
    easing:'ease-out',
    
});
ScrollReveal().reveal('.slogan',
{
    easing:'ease-out',
    delay:1500 , 
    distance:'100px',
    
});
ScrollReveal().reveal('.animacija',
{
    easing:'ease-out',
    delay:1500,
    origin:'top',
    distance:'100px',
    delay:1750,
    duration:1000,
    
});
ScrollReveal().reveal('.hero_img',
{ 
    easing:'ease-out',
    origin: 'right',
    delay:2000,
    duration:1000,
    distance:'200px',
    
});
ScrollReveal().reveal('.slika',
{
    delay:300 ,
    duration:1000,
    origin:'left',
    distance:'500px',
    easing:'ease-out',
    reset: true
});
ScrollReveal().reveal('.title',
{
    delay:300 ,
    origin:'top',
    distance:'100px',
    easing:'ease-out',
    duration:1000,
    reset: true
});
ScrollReveal().reveal('.opis',
{
    delay:300 ,
    origin:'right',
    distance:'50px',
    easing:'ease-out',
    duration:1000,
    reset: true
});
ScrollReveal().reveal('.animacija1',
{
    easing:'ease-out',
    delay:300 , 
    distance:'100px',
    reset: true
});
ScrollReveal().reveal('.card1',carddown);
ScrollReveal().reveal('.card2',cardup);
ScrollReveal().reveal('.card3 ',carddown);
ScrollReveal().reveal('.card4',cardup);
ScrollReveal().reveal('.card5',carddown);
ScrollReveal().reveal('.card6',cardup);