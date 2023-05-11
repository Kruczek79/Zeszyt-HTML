//window
const windowElem = document.querySelector("#window");
windowElem.textContent =
	"wysokosc okna: " +
	window.innerHeight +
	" " +
	"szerokosc okna: " +
	window.innerWidth;

//navigator
navigator.geolocation.getCurrentPosition(showPos);

function showPos(pos) {
	const posElem = document.querySelector("#pos");
	posElem.textContent =
		"longitude: " +
		pos.coords.longitude +
		" " +
		"latitude: " +
		pos.coords.latitude;
	const link = `https://www.google.pl/maps/@${pos.coords.longitude},${pos.coords.latitude},12.17z`;
	const elem = document.createElement("a");
	elem.href = link;
	elem.textContent = "mapa";
	document.querySelector("#map").appendChild(elem);
}

const historyElem = document.querySelector("#history");
historyElem.textContent = "history lenght: " + history.length;
const back = document.querySelector("#back");
const forward = document.querySelector("#forward");

back.addEventListener("click", () => {
	window.history.back();
});
forward.addEventListener("click", () => {
	window.history.forward();
});

//date

//timer
let data = new Date();
function odliczanie() {
	data = new Date();
	let minutes = data.getMinutes();
	let seconds = data.getSeconds();
	let mseconds = data.getMilliseconds();
	let hours = data.getHours();
	seconds < 10 ? (seconds = "0" + seconds) : (seconds = seconds);
	document.querySelector(
		"#zegar"
	).textContent = `${hours}:${minutes}:${seconds}:${mseconds}`;
}
setInterval(odliczanie, 1);

//day of the week
let day = data.getDay();
let dayOTW = "";
switch (day) {
	case 1:
		dayOTW = "poniedzialek";
		break;
	case 2:
		dayOTW = "wtorek";
		break;
	case 3:
		dayOTW = "sroda";
		break;
	case 4:
		dayOTW = "czwartek";
		break;
	case 5:
		dayOTW = "piatek";
		break;
	case 6:
		dayOTW = "sobota";
		break;
	case 0:
		dayOTW = "niedziela";
		break;
}
console.log(dayOTW);
document.querySelector("#dayotw").textContent = `Dzien tygodnia: ${dayOTW}`;
