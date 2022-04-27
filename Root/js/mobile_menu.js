const navBtn = document.querySelector('.nav-m-btn');
const navMenu = document.querySelector('.nav-m-overlay');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});