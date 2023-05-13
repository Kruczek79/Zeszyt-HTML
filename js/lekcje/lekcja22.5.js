let btn = document.querySelector("#gen");
let peselInput = document.querySelector("#peselGen");
btn.addEventListener("click", (e) => {
	e.preventDefault();
	console.clear();
	generate();
});
function generate() {
	let dataV = document.querySelector("#data").value;
	let plecV = document.querySelector("#plec").value;

	let plec = "";

	if (dataV != "") {
		console.log("data: gut");
		console.log(dataV);

		if (plecV == 1) {
			plec = "Kobieta";
		} else if (plecV == 2) {
			plec = "Meszczyzna";
		}

		//setting year
		dataV = dataV.split("");
		let year = setYear(dataV);

		//setting day
		let day = setDay(dataV);

		//setting Month
		let month = setMonth(dataV);

		//setting plec
		let num = setPlec(plec);

		//set pesel
		let pesel = year + month + day + num;

		//set control num
		let controlNum = control(pesel);
		controlNum = String(controlNum);

		//combine pesel
		pesel = pesel + controlNum;
		let peselSplit = pesel.split("");
		if (peselSplit.lenght > 11 || peselSplit.lenght == 12) {
			generate();
		}

		peselInput.value = `${pesel}`;
	} else if (dataV == "") {
		console.log("data: niegut");
	}
}
function setYear(dataV) {
	return dataV[2] + dataV[3];
}
function setDay(dataV) {
	return dataV[8] + dataV[9];
}
function setMonth(dataV) {
	let monthBase = 0;
	if (dataV[5] == 0) {
		monthBase = dataV[6];
	} else {
		monthBase = dataV[5] + dataV[6];
	}

	if (dataV[0] == 2 && dataV[1] == 0) {
		monthBase = parseInt(monthBase);
		monthBase = monthBase + 20;
		return monthBase;
	} else if (dataV[0] == 1 && dataV[1] == 8) {
		monthBase = parseInt(monthBase);
		monthBase = monthBase + 80;
		return monthBase;
	} else if (dataV[0] == 1 && dataV[1] == 9) {
		monthBase = monthBase;
		return monthBase;
	} else if (dataV[0] == 2 && dataV[1] == 1) {
		monthBase = parseInt(monthBase);
		monthBase = monthBase + 40;
		return monthBase;
	}
}
function setPlec(plec) {
	let plecarray = [];
	if (plec == "Meszczyzna") {
		plecarray[0] = Math.floor(Math.random() * 10);
		plecarray[1] = Math.floor(Math.random() * 10);
		plecarray[2] = Math.floor(Math.random() * 10);
		plecarray[3] = Math.floor(Math.random() * 10);
		while (plecarray[3] % 2 == 0) {
			plecarray[3] = Math.floor(Math.random() * 10);
		}
		plecarray[0] = String(plecarray[0]);
		plecarray[1] = String(plecarray[1]);
		plecarray[2] = String(plecarray[2]);
		plecarray[3] = String(plecarray[3]);

		return plecarray[0] + plecarray[1] + plecarray[2] + plecarray[3];
	} else if (plec == "Kobieta") {
		plecarray[0] = Math.floor(Math.random() * 10);
		plecarray[1] = Math.floor(Math.random() * 10);
		plecarray[2] = Math.floor(Math.random() * 10);
		plecarray[3] = Math.floor(Math.random() * 10);
		while (plecarray[3] % 2 != 0) {
			plecarray[3] = Math.floor(Math.random() * 10);
		}
		plecarray[0] = String(plecarray[0]);
		plecarray[1] = String(plecarray[1]);
		plecarray[2] = String(plecarray[2]);
		plecarray[3] = String(plecarray[3]);

		return plecarray[0] + plecarray[1] + plecarray[2] + plecarray[3];
	}
}
function control(pesel) {
	let peselArray = pesel.split("");
	let suma = 0;
	let wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
	let controlNum = 0;

	for (let i = 0; i < wagi.length; i++) {
		suma = suma + peselArray[i] * wagi[i];
	}
	if (suma > 9) {
		suma = suma % 10;
		controlNum = 10 - suma;
		return controlNum;
	} else {
		controlNum = 10 - suma;
		return controlNum;
	}
}
document.querySelector("#copy").addEventListener("click", () => {
	peselInput.select();
	navigator.clipboard.writeText(peselInput.value);
	document.querySelector("#copy").textContent = "Copied";

	setTimeout(() => {
		document.querySelector("#copy").textContent = "Copy to clipboard";
	}, 2000);
});
