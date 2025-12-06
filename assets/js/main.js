/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 




/*==================== CONTACT FORM ====================*/
// const contactForm = document.getElementById('contact-form');
// const formStatus = document.getElementById('form-status');

// if (contactForm) {
//     contactForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         const name = document.getElementById('name').value.trim();
//         const email = document.getElementById('email').value.trim();
//         const message = document.getElementById('message').value.trim();

//         if (!name || !email || !message) {
//             formStatus.textContent = 'Please fill out all fields!';
//             formStatus.style.color = 'red';
//             return;
//         }

//         try {
//             formStatus.textContent = 'Sending...';
//             formStatus.style.color = 'black';

//             // Example: Replace with your EmailJS or backend API call here
//             // Simulating success with a delay

            
//         emailjs.send("service_3h5p52d", "template_ytn0rnh", "pVfMJ2SgpnD95C00x", {
//             from_name: name,
//             from_email: email,
//             message: message,
//         })
//         .then(() => {
//             formStatus.textContent = '✅ Message sent successfully!';
//             formStatus.style.color = 'green';
//             contactForm.reset();
//         })
//         .catch((error) => {
//             formStatus.textContent = '❌ Failed to send message. Try again later.';
//             formStatus.style.color = 'red';
//             console.error('EmailJS Error:', error);
//         });
    
//             setTimeout(() => {
//                 formStatus.textContent = 'Message sent successfully!';
//                 formStatus.style.color = 'green';
//                 contactForm.reset();
//             }, 1000);
//         } catch (error) {
//             formStatus.textContent = 'Failed to send message. Try again later.';
//             formStatus.style.color = 'red';
//             console.error('Error sending message:', error);
//         }
//     });
// }

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm('service_3h5p52d', 'template_ytn0rnh', '#contact-form', 'uRSaJ5QuloKqkCPRj')
    .then(() => {
        contactMessage.textContent = '✅ Message sent successfully!';

    }, () => {
        contactMessage.textContent = '❌ Failed to send message. Try again later.';
    });

}
contactForm.addEventListener('submit', sendEmail);