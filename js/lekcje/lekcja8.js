//array and html element
let tablica = [1, 2, 3, 4, 5, 6];
const tabElem = document.querySelector("#array");

//variables for buttons
const popBtn = document.querySelector("#popBtn");
const pushBtn = document.querySelector("#pushBtn");
let pushValue = document.querySelector("#pushValue").value;
const sortBtn = document.querySelector("#sortBtn");
const reverseBtn = document.querySelector("#reverseBtn");

const resetBtn = document.querySelector("#reset");

//set Tablica value to tablica
tabElem.textContent = `Tablica: ${tablica}`;

//functions
popBtn.addEventListener("click", () => {
	tablica.pop();
	tabElem.textContent = `Tablica: ${tablica}`;
});

pushBtn.addEventListener("click", () => {
	pushValue = document.querySelector("#pushValue").value;
	tablica.push(pushValue);
	tabElem.textContent = `Tablica: ${tablica}`;
});

sortBtn.addEventListener("click", () => {
	tablica.sort();
	tabElem.textContent = `Tablica: ${tablica}`;
});

reverseBtn.addEventListener("click", () => {
	tablica.reverse();
	tabElem.textContent = `Tablica: ${tablica}`;
});

reset.addEventListener("click", () => {
	let value = confirm("Czy chcesz zresetowac?");

	//function reset
	const resetArr = function () {
		tablica = [1, 2, 3, 4, 5, 6];
		tabElem.textContent = `Tablica: ${tablica}`;
	};
	value && resetArr(); //if value == true do resetArr(), if false dont do anything
});
