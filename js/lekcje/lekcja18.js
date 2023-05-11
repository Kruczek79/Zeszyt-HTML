//cw 1
const auto = {
	marka: "Mamochud osobowy",
	lokalizacjia: "Bydgoszcz",
	Rok_produkcj: "2008",
	Konie: "150",
	Pojemnosc: "1/9",
	Stan: "Uzywany",
};
document.querySelector(".img").addEventListener("click", () => {
	const text = `<span>marka: ${auto.marka} 
    <br>lokalizacjia: ${auto.lokalizacjia} 
    <br> Rok Produkcj: ${auto.Rok_produkcj} 
    <br>Konie: ${auto.Konie} 
    <br>Pojemnosc: ${auto.Pojemnosc} 
    <br>Stan: ${auto.Stan}</span>`;

	document.querySelector(".info").innerHTML = text;
});
//cw 2

//button class
class Button {
	BGcolor;
	text;
	width;
	height;
	textColor;
	fontSize;
	constructor(BGcolor, text, width, height, textColor, fontSize) {
		this.BGcolor = BGcolor;
		this.text = text;
		this.width = width;
		this.height = height;
		this.textColor = textColor;
		this.fontSize = fontSize;
	}
	Draw() {
		const button = document.createElement("button");

		//default values
		button.style.backgroundColor = this.BGcolor;
		button.textContent = this.text;
		button.style.width = this.width;
		button.style.height = this.height;
		button.style.color = this.textColor;
		button.style.fontSize = this.fontSize;

		//drawing button to div left
		button.classList.add("btn");
		document.querySelector(".left").appendChild(button);
	}
	Change() {
		const button = document.querySelector(".btn");
		button.style.backgroundColor = this.BGcolor;
		button.textContent = this.text;
		button.style.width = this.width;
		button.style.height = this.height;
		button.style.color = this.textColor;
		button.style.fontSize = this.fontSize;
	}
}
//button creating
const btn = new Button("white", "obiekt button", "150");
btn.Draw();

//form on submit
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	//getting values
	const bgColor = document.querySelector("#bgColor").value;
	const txt = document.querySelector("#text").value;
	const width = document.querySelector("#width").value;
	const height = document.querySelector("#height").value;
	const txtColor = document.querySelector("#TxtColor").value;
	const fontSize = document.querySelector("#fontSize").value;

	//setting values
	btn.BGcolor = bgColor;
	btn.text = txt;
	btn.width = width + "px";
	btn.height = height + "px";
	btn.textColor = txtColor;
	btn.fontSize = fontSize + "px";
	btn.Change();
	console.log(btn);
});
//on changing height
const height = document.querySelector("#height");
const heightLabel = document.querySelector("#heightValue");
height.addEventListener("input", () => {
	heightLabel.textContent = "Height: " + height.value + "px";
});
//on changing width
const width = document.querySelector("#width");
const widthLabel = document.querySelector("#widthValue");
width.addEventListener("input", () => {
	widthValue.textContent = "Width: " + width.value + "px";
});
widthValue.textContent = "Width: " + width.value + "px";

heightLabel.textContent = "Height: " + height.value + "px";

//zad 3
class Figura {
	name;
	constructor(name) {
		this.name = name;
	}
	Name() {
		return `Maj nejm iz ${this.name}`;
	}
}
class Kwadrat extends Figura {
	bok;
	constructor(bok, name = "Kwadrat") {
		super(name);
		this.bok = bok;
	}
	pole() {
		return this.bok * this.bok;
	}
	obwod() {
		return this.bok * 4;
	}
	opis() {
		return `${this.Name()} ${this.bok} ${this.pole()} ${this.obwod()}`;
	}
}
class Trujkat_Ruwnoboczny extends Figura {
	bok;
	constructor(bok, name = "Trujkat") {
		super(name);
		this.bok = bok;
	}
	pole() {
		return (Math.pow(this.bok, 2) * Math.sqrt(3)) / 4;
	}
	obwod() {
		return this.bok * 3;
	}
	opis() {
		return `${this.Name()} ${this.bok} ${this.pole()} ${this.obwod()}`;
	}
}
class Bryla {
	h;
	w;
	d;
	name;
	constructor(name) {
		this.name = name;
	}
	Name() {
		return `Mein name ist ${this.name}`;
	}
}
class Kula extends Bryla {
	r;
	constructor(r, name = "KulaDajeFula") {
		super(name);
		this.r = r;
	}
	pole() {
		return 4 * (3.14 * Math.pow(this.r, 2));
	}
	objetosc() {
		return (3 / 4) * (3.14 * Math.pow(this.r, 3));
	}
	opis() {
		return `${this.Name()} ${this.pole()} ${this.objetosc()}`;
	}
}
class Szescian extends Bryla {
	bok;
	constructor(bok, name = "Sescian") {
		super(name);
		this.bok = bok;
	}
	objetosc() {
		return Math.pow(this.bok, 3);
	}
	opis() {
		return `${this.Name()} ${this.objetosc()}`;
	}
}
class Prosopadloscian extends Bryla{
	
}
const opisElem = document.querySelector(".opis");
// const kula = new Kula(10);
// opisElem.innerHTML = kula.opis();


// const sescian = new Szescian(5);
// opisElem.innerHTML = sescian.opis();


// const trukat = new Trujkat_Ruwnoboczny(10);
// const kwdrat = new Kwadrat(5);
// opisElem.innerHTML = kwdrat.opis() + "<br>" + trukat.opis();
