const btn = document.querySelector("#button");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const login = document.querySelector("#login").value;
	const pass = document.querySelector("#pass").value;

	login === "admin" && pass === "admin"
		? alert("poprawny login")
		: alert("niepoprawny login");
});
