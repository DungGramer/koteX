let filter = document.querySelector('.btn-filter');
let aside = document.querySelector('.filter');

filter.addEventListener('click', function() {
	aside.classList.toggle('open');
})

let sort = document.querySelector('.btn-sort');
let sortItem = document.querySelector('.sort-item');

sort.addEventListener('click', function() {
	sortItem.classList.toggle('open');
})