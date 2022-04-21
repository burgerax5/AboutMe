const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar')

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        sidebar.style.width = '25%';
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        sidebar.style.width = '0px';
    }
});
