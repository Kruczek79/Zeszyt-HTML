//first calculator
const btn = document.querySelector("#button");

btn.addEventListener("click", (e) => {
	let selValue = document.querySelector("#sel").value;

	let numA = document.querySelector("#numberA").value;
	let numB = document.querySelector("#numberB").value;
	let result = 0;
	selValue === "plus"
		? (result = +numA + +numB)
		: selValue === "minus"
		? (result = +numA - +numB)
		: selValue === "div"
		? (result = +numA / +numB)
		: selValue === "multi"
		? (result = +numA * +numB)
		: console.log();

	const resElem = document.querySelector("#result");
	resElem.innerHTML = "&nbsp;" + result;
});

//second calculator
const oblicz = document.querySelector("#equals");
let char = "+";
const charElem = document.querySelector("#char");

document.querySelector("#pl").addEventListener("click", () => {
	char = "+";
	charElem.textContent = char;
});
document.querySelector("#min").addEventListener("click", () => {
	char = "-";
	charElem.textContent = char;
});
document.querySelector("#di").addEventListener("click", () => {
	char = "/";
	charElem.textContent = char;
});
document.querySelector("#mul").addEventListener("click", () => {
	char = "*";
	charElem.textContent = char;
});
oblicz.addEventListener("click", () => {
	let numberA = document.querySelector("#numA").value;
	let numberB = document.querySelector("#numB").value;
	let res = 0;
	char === "+"
		? (res = +numberA + +numberB)
		: char === "-"
		? (res = +numberA - +numberB)
		: char === "/"
		? (res = +numberA / +numberB)
		: char === "*"
		? (res = +numberA * +numberB)
		: console.log();
	const resultElem = document.querySelector("#res");
	resultElem.innerHTML = "&nbsp;" + res;
});
