const navBtn = document.querySelector('.nav-m-btn');
const navMenu = document.querySelector('.nav-m-overlay');

const hoverHome = document.getElementById('home-link')
const homeText = document.getElementById('expand-home');

const hoverProfile = document.getElementById('profile-link')
const profileText = document.getElementById('expand-profile');

const hoverProjects = document.getElementById('projects-link')
const projectsText = document.getElementById('expand-projects');

const hoverContact = document.getElementById('contact-link')
const contactText = document.getElementById('expand-contact');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
/*Hover Home*/
hoverHome.addEventListener('mouseenter', () => {
    homeText.classList.add('open');
});
hoverHome.addEventListener('mouseleave', () => {
    homeText.classList.remove('open');
});
/*Hover Profile*/
hoverProfile.addEventListener('mouseenter', () => {
    profileText.classList.add('open');
});
hoverProfile.addEventListener('mouseleave', () => {
    profileText.classList.remove('open');
});
/*Hover Projects*/
hoverProjects.addEventListener('mouseenter', () => {
    projectsText.classList.add('open');
}); 
hoverProjects.addEventListener('mouseleave', () => {
    projectsText.classList.remove('open');
});
/*Hover Contact*/
hoverContact.addEventListener('mouseenter', () => {
    contactText.classList.add('open');
});
hoverContact.addEventListener('mouseleave', () => {
    contactText.classList.remove('open');
});


