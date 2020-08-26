let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let currentYear = new Date().getFullYear();

/* function getDayOfMonth(month, year) {
	let dayOfMonth = new Date(year, month, 1, -1).getDate();
	let render = `<option value="0">Ngày</option>`;
	for (let i = 1; i <= dayOfMonth; i++) {
		render += `<option value="${i}">${i}</option>`;
	}
	day.innerHTML = render;
} */

for (let i = currentYear; i >= 1955; i--) {
	year.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 1; i <= 12; i++) {
	month.innerHTML += `<option value="${i}">${i}</option>`;
}

for (let i = 1; i <= 31; i++) {
	day.innerHTML += `<option value="${i}">${i}</option>`;
}

