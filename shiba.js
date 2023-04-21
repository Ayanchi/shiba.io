let menu = document.getElementById('menu')
let list = document.getElementsByClassName('studySpace')

menu.addEventListener('click', function(e) {
    e.preventDefault();
    if (list) {
        list.classList.toggle('list_active')
    }
    
})