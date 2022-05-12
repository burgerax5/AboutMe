const onClick = function(){
    let order = ['steamLink', 'malLink', 'githubLink', 'leetcodeLink', 'discordLink']
    let links = ['https://steamcommunity.com/id/burgerax3', 'https://myanimelist.net/profile/burgerax3', 'https://github.com/burgerax5', 'https://leetcode.com/burgerax3/', 'https://discord.gg/D9JYv5e']
    modal.style.height = '100vh';
    modal.style.visibility = 'visible';
    for(let i = 0; i < order.length; i++){
        if (order[i] == this.id){
            modalLink.innerHTML = links[i]
            break;
        }
    }
}

const confirmClick = function(){
    if(this.id == 'yesBtn'){
        location.href = modalLink.innerHTML;
    }
    else{
        modal.style.height = '0vh';
        modal.style.visibility = 'hidden';
    }
}

document.getElementById('steamLink').onclick = onClick;
document.getElementById('malLink').onclick = onClick;
document.getElementById('githubLink').onclick = onClick;
document.getElementById('leetcodeLink').onclick = onClick;
document.getElementById('discordLink').onclick = onClick;
const modal = document.getElementById('contactModal');
let modalLink = document.getElementById('modalLink');
document.getElementById('yesBtn').onclick = confirmClick;
document.getElementById('noBtn').onclick = confirmClick;