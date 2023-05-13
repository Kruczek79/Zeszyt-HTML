let dowod = "";
let tab = [];
let A = 0;
let B = 0;
let C = 0;
let control = 0;
document.querySelector("#gen").addEventListener("click", () => {
	generate();
});
document.querySelector("#reset").addEventListener("click", () => {
	window.location.reload();
});

//generating function
function generate() {
	genLetters();
	genNums();
	genControl();

	//turn off generating button
	document.querySelector("#gen").setAttribute("disabled", "");
	document.querySelector("#dowod").value = dowod;
}

//function for generating random letter
function genLetters() {
	tab = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	//generating random letter from tab array
	for (i = 0; i < 3; i++) {
		dowod = dowod + tab[Math.floor(Math.random() * tab.length)];
	}
}

//function for generating random 5 numbers
function genNums() {
	//adding " " in possition of controlNumber
	dowod = dowod + " ";

	//generating 5 random numbers
	let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	for (i = 0; i < 5; i++) {
		dowod = dowod + tab[Math.floor(Math.random() * tab.length)];
	}

	//split dowod into array
	dowod = dowod.split("");

	//convert letters 0,1,2 to nums
	convertToNum(dowod[0], dowod[1], dowod[2]);
}

//gen Control Number
function genControl() {
	let wagi = [7, 3, 1, 7, 3, 1, 7, 3];

	//multiply converted letters by wagi
	control = A * wagi[0] + B * wagi[1] + C * wagi[2];

	//multiply dowod numbers by wagi
	control = control + dowod[4] * wagi[3];

	control = control + dowod[5] * wagi[4];

	control = control + dowod[6] * wagi[5];

	control = control + dowod[7] * wagi[6];

	control = control + dowod[8] * wagi[7];

	//modulo to get last number
	control = parseInt(control) % 10;

	//getting position where to put control Number
	let index = dowod.indexOf(" ");

	//put control number into position
	dowod[index] = control;

	//changing dowod to string
	dowod =
		dowod[0] +
		dowod[1] +
		dowod[2] +
		dowod[3] +
		dowod[4] +
		dowod[5] +
		dowod[6] +
		dowod[7] +
		dowod[8];

	//log for debug
	console.log(dowod);
}

function convertToNum(letterA, letterB, letterC) {
	//get index of letter and add 10
	//if dowod[0] == A than A = 10
	A = tab.indexOf(letterA) + 10;
	B = tab.indexOf(letterB) + 10;
	C = tab.indexOf(letterC) + 10;
}

//copying to clipboard
let copy = document.querySelector("#copy");
let dowodInpt = document.querySelector("#dowod");
copy.addEventListener("click", () => {
	dowodInpt.select();
	navigator.clipboard.writeText(dowodInpt.value);
	copy.value = "Copied";

	setTimeout(() => {
		copy.value = "Copy to clipboard";
	}, 2000);
});
