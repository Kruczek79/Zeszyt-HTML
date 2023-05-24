const button1 = document.querySelector("#anim1");
const canvas1 = document.querySelector(".c1");

const button2 = document.querySelector("#anim2");
const canvas2 = document.querySelector(".c2");

const button3 = document.querySelector("#anim3");
const canvas3 = document.querySelector(".c3");

button1.addEventListener("click", () => {
	canvas1.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "block";
	canvas2.style.display = "block";
});
button2.addEventListener("click", () => {
	canvas2.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "block";
	canvas3.style.display = "flex";
});
button3.addEventListener("click", () => {
	canvas3.style.display = "none";
	button3.style.display = "none";
	button1.style.display = "block";
	canvas1.style.display = "block";
});
