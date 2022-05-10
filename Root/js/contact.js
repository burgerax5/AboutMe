const onClick = function(){
    let order = ['steamLink', 'malLink', 'githubLink', 'leetcodeLink', 'discordLink']
    let links = ['https://steamcommunity.com/id/burgerax3', 'https://myanimelist.net/profile/burgerax3', 'https://github.com/burgerax5', 'https://leetcode.com/burgerax3/', 'https://discord.gg/D9JYv5e']
    
    for(let i = 0; i < order.length; i++){
        if (order[i] == this.id){
            if (confirm('Do you wish to go to another website?') == true){
                location.href = links[i];
            }
        }
    }
}

document.getElementById('steamLink').onclick = onClick;
document.getElementById('malLink').onclick = onClick;
document.getElementById('githubLink').onclick = onClick;
document.getElementById('leetcodeLink').onclick = onClick;
document.getElementById('discordLink').onclick = onClick;