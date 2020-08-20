let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar-collapse');

menu.addEventListener('click', function() {
	navbar.classList.toggle('open');
})