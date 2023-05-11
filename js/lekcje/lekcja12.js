const form = document.querySelector("#form");
const person = {
	name: "",
	surname: "",
	plec: "",
	interests: [],
	school: "",
	aboutMe: "",
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	//inputs values
	const imie = document.querySelector("#name").value;
	const naz = document.querySelector("#surname").value;
	const plec = document.querySelector('input[name="plec"]:checked').value;

	//checkboxes
	const checkBox1 = document.querySelector("#cb1").checked;
	const checkBox2 = document.querySelector("#cb2").checked;
	const checkBox3 = document.querySelector("#cb3").checked;

	checkBox1 && person.interests.push("sport");

	checkBox2 && person.interests.push("informatyka");

	checkBox3 && person.interests.push("elektronika");

	let selectedSql = document.querySelector("#sel").value;

	+selectedSql === 1
		? (selectedSql = "podstawowa")
		: +selectedSql === 2
		? (selectedSql = "srednia")
		: +selectedSql === 3
		? (selectedSql = "wyzsza")
		: console.log();

	const textarea = document.querySelector("#des").value;
	//asigning to object
	person.name = imie;
	person.surname = naz;
	person.plec = plec;
	person.school = selectedSql;
	person.aboutMe = textarea;
	console.log(person);

	const div = document.querySelector("#c");
	div.innerHTML = `Imie: ${person.name} <br> Nazwisko: ${person.surname}<br> Plec: ${person.plec}<br> Szkola: ${person.school} <br> O mnie: ${person.aboutMe}`;
});
