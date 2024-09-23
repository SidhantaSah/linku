
const threeDotsIcon = document.querySelector('.three-dots i');
const dropdownMenu = document.querySelector('.dropdown');
const proj=document.querySelector('.pro');


threeDotsIcon.addEventListener('click', function() {
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});


window.addEventListener('click', function(e) {
    if (!dropdownMenu.contains(e.target) && !threeDotsIcon.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});

proj.addEventListener('click',function(e){
    window.location.href="project.html";
});

