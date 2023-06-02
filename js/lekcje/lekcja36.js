const form = document.querySelector(".formularz");
form.addEventListener("submit", (event) => {
	event.preventDefault();

	console.clear();
	let f1Value = document.querySelector("#f1").value;
	console.log(`Function1: ${f1Value}`);

	let f1Sp = f1Value.trim().split("");
	console.log(`Function1 Arr: ${f1Sp}`);

	let indexX1 = f1Sp.indexOf("x");

	let a1 = eval(f1Sp.slice(0, indexX1).join(""));
	console.log(`Function1 a: ${a1}`);

	let f2Value = document.querySelector("#f2").value;
	console.log(`Function2: ${f2Value}`);

	let f2Sp = f2Value.trim().split("");
	console.log(`Function2 Arr: ${f2Sp}`);

	let indexX2 = f2Sp.indexOf("x");

	let a2 = eval(f2Sp.slice(0, indexX2).join(""));
	console.log(`Function2 a: ${a2}`);

	a1 === a2
		? console.log("Rownolegle")
		: a1 * a2 === -1
		? console.log("Prostopadle")
		: console.log();
});
