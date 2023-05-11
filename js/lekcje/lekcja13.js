//variables declaration
let points = 0;
const btn = document.querySelector("#submit");
const odp = document.querySelector("#odp");
//function clicked
btn.addEventListener("click", (e) => {
	e.preventDefault();

	//read anwsers
	const sernik = document.forms["quiz"]["sernik"].value;

	const woman = document.forms["quiz"]["woman"].value;

	const fury = document.forms["quiz"]["fury"].value;

	//check anwsers
	sernik === "ok" ? points++ : (points = points);
	woman === "ok" ? points++ : (points = points);
	fury === "ok" ? points++ : (points = points);

	odp.innerHTML = `punkty: ${points}, Gratulacje uzytkowniku`;
});
