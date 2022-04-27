const hoverHome = document.getElementById('home-link')
const homeText = document.getElementById('expand-home');

const hoverProfile = document.getElementById('profile-link')
const profileText = document.getElementById('expand-profile');

const hoverProjects = document.getElementById('projects-link')
const projectsText = document.getElementById('expand-projects');

const hoverContact = document.getElementById('contact-link')
const contactText = document.getElementById('expand-contact');

/*Hover Home*/
hoverHome.addEventListener('mouseenter', () => {
    homeText.classList.remove('close');
    homeText.classList.add('open');
});
hoverHome.addEventListener('mouseleave', () => {
    homeText.classList.add('close');
    homeText.classList.remove('open');
});
/*Hover Profile*/
hoverProfile.addEventListener('mouseenter', () => {
    profileText.classList.remove('close');
    profileText.classList.add('open');
});
hoverProfile.addEventListener('mouseleave', () => {
    profileText.classList.add('close');
    profileText.classList.remove('open');
});
/*Hover Projects*/
hoverProjects.addEventListener('mouseenter', () => {
    projectsText.classList.remove('close');
    projectsText.classList.add('open');
}); 
hoverProjects.addEventListener('mouseleave', () => {
    projectsText.classList.add('close');
    projectsText.classList.remove('open');
});
/*Hover Contact*/
hoverContact.addEventListener('mouseenter', () => {
    contactText.classList.remove('close');
    contactText.classList.add('open');
});
hoverContact.addEventListener('mouseleave', () => {
    contactText.classList.add('close');
    contactText.classList.remove('open');
});


