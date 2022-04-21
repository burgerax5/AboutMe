const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar')

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        sidebar.style.display = 'block';
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        sidebar.style.display = 'none';
    }
});
