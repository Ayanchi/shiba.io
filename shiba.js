let menu = document.getElementById('menu')
let list = document.getElementsByName('studyText')

menu.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementsByClassName('studyText')[0].style= "display: block";
})