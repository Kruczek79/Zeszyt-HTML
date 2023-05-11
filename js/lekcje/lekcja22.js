const peselInpt = document.getElementById("pesel");
const dane = document.querySelector(".dane");
const button = document.querySelector(".btn");
let peselValue = document.getElementById("pesel").value;

button.addEventListener("click", (event) => {
	//not refresh on submit
	event.preventDefault();

	//value of pesel
	peselValue = document.getElementById("pesel").value;

	//splited pesel array
	const peselArray = peselValue.split("");

	//console clearing for debug
	console.clear();

	//if pesel control = pesel array last num
	if (controlFunct(peselArray)) {
		console.log("pesel: gut");

		//RR MM DD PPPP K
		let yearNum = peselArray[0] + peselArray[1];
		let monthNum = peselArray[2] + peselArray[3];
		let dayNum = peselArray[4] + peselArray[5];

		let stulecie = 0;
		//month check
		if (monthcheck(monthNum)) {
			console.log("miesiac: gut");
			//set stulecie
			stulecie = setStulecie(monthNum);

			//check day
			if (checkDay(dayNum)) {
				console.log("day: gut");
				//set year value
				const fullYear = setYear(stulecie, yearNum);
				//set Month
				const month = setMonth(monthNum);

				//set plec
				const plec = setPlec(peselArray);
				//write to div
				write(month, dayNum, fullYear, plec);
			} else {
				console.log("day: niegut");
			}
		} else {
			console.log("miesiac: niegut");
		}
	} else {
		console.log("pesel: niegut");
		dane.innerHTML = "";
	}
});

//checking if control num == last pesel num
function controlFunct(peselArray) {
	let suma = 0;
	let wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
	let controlNum = 0;

	for (let i = 0; i < wagi.length; i++) {
		suma = suma + peselArray[i] * wagi[i];
	}
	if (suma > 9) {
		suma = suma % 10;
		controlNum = 10 - suma;
		controlRet(controlNum);
	} else {
		controlNum = 10 - suma;
		controlRet(controlNum);
	}
	if (controlNum == peselArray[10]) {
		return true;
	} else {
		return false;
	}
}

//month checking
function monthcheck(monthNum) {
	//if month Num 81 - 92
	if (
		monthNum == 81 ||
		monthNum == 82 ||
		monthNum == 83 ||
		monthNum == 84 ||
		monthNum == 85 ||
		monthNum == 86 ||
		monthNum == 87 ||
		monthNum == 88 ||
		monthNum == 89 ||
		monthNum == 90 ||
		monthNum == 91 ||
		monthNum == 92
	) {
		return true;
	}
	//if month Num 01 - 12
	else if (
		monthNum == 01 ||
		monthNum == 02 ||
		monthNum == 03 ||
		monthNum == 04 ||
		monthNum == 05 ||
		monthNum == 06 ||
		monthNum == 07 ||
		monthNum == 08 ||
		monthNum == 09 ||
		monthNum == 10 ||
		monthNum == 11 ||
		monthNum == 12
	) {
		return true;
	}
	//if month Num 21-32
	else if (
		monthNum == 21 ||
		monthNum == 22 ||
		monthNum == 23 ||
		monthNum == 24 ||
		monthNum == 25 ||
		monthNum == 26 ||
		monthNum == 87 ||
		monthNum == 28 ||
		monthNum == 29 ||
		monthNum == 30 ||
		monthNum == 31 ||
		monthNum == 32
	) {
		return true;
	}
	//if month Num 41-52
	else if (
		monthNum == 41 ||
		monthNum == 42 ||
		monthNum == 43 ||
		monthNum == 44 ||
		monthNum == 45 ||
		monthNum == 46 ||
		monthNum == 87 ||
		monthNum == 48 ||
		monthNum == 49 ||
		monthNum == 50 ||
		monthNum == 51 ||
		monthNum == 52
	) {
		return true;
	} else {
		return false;
	}
}

//year seting
function setYear(stulecie, yearNum) {
	if (stulecie == 9) {
		//19xx
		return "1" + stulecie + yearNum;
	} else if (stulecie == 0) {
		//20xx
		return "2" + stulecie + yearNum;
	} else if (stulecie == 8) {
		//18xx
		return "1" + stulecie + yearNum;
	} else if (stulecie == 1) {
		//21xx
		return "2" + stulecie + yearNum;
	}
}

//month setting
function setMonth(monthNum) {
	if (monthNum == 81 || monthNum == 01 || monthNum == 21 || monthNum == 41) {
		return "Styczen";
	} else if (
		monthNum == 82 ||
		monthNum == 02 ||
		monthNum == 22 ||
		monthNum == 42
	) {
		return "Luty";
	} else if (
		monthNum == 83 ||
		monthNum == 03 ||
		monthNum == 23 ||
		monthNum == 43
	) {
		return "Marzec";
	} else if (
		monthNum == 84 ||
		monthNum == 04 ||
		monthNum == 24 ||
		monthNum == 44
	) {
		return "Kwiecien";
	} else if (
		monthNum == 85 ||
		monthNum == 05 ||
		monthNum == 25 ||
		monthNum == 45
	) {
		return "Maj";
	} else if (
		monthNum == 86 ||
		monthNum == 06 ||
		monthNum == 26 ||
		monthNum == 46
	) {
		return "Czerwiec";
	} else if (
		monthNum == 87 ||
		monthNum == 07 ||
		monthNum == 27 ||
		monthNum == 47
	) {
		return "Lipiec";
	} else if (
		monthNum == 88 ||
		monthNum == 08 ||
		monthNum == 28 ||
		monthNum == 48
	) {
		return "Sierpien";
	} else if (
		monthNum == 89 ||
		monthNum == 09 ||
		monthNum == 29 ||
		monthNum == 49
	) {
		return "Wrzesien";
	} else if (
		monthNum == 90 ||
		monthNum == 10 ||
		monthNum == 30 ||
		monthNum == 50
	) {
		return "Pazdziernik";
	} else if (
		monthNum == 91 ||
		monthNum == 11 ||
		monthNum == 31 ||
		monthNum == 51
	) {
		return "Listopad";
	} else if (
		monthNum == 92 ||
		monthNum == 12 ||
		monthNum == 32 ||
		monthNum == 52
	) {
		return "Grudzien";
	}
}

//checking day
function checkDay(dayNum) {
	if (
		dayNum == 01 ||
		dayNum == 02 ||
		dayNum == 03 ||
		dayNum == 04 ||
		dayNum == 05 ||
		dayNum == 06 ||
		dayNum == 07 ||
		dayNum == 08 ||
		dayNum == 09 ||
		dayNum == 10 ||
		dayNum == 11 ||
		dayNum == 12 ||
		dayNum == 13 ||
		dayNum == 14 ||
		dayNum == 15 ||
		dayNum == 16 ||
		dayNum == 17 ||
		dayNum == 18 ||
		dayNum == 19 ||
		dayNum == 20 ||
		dayNum == 21 ||
		dayNum == 22 ||
		dayNum == 23 ||
		dayNum == 24 ||
		dayNum == 25 ||
		dayNum == 26 ||
		dayNum == 27 ||
		dayNum == 28 ||
		dayNum == 29 ||
		dayNum == 30 ||
		dayNum == 31
	) {
		return true;
	} else {
		return false;
	}
}

//setting plec
function setPlec(array) {
	if (array[9] % 2 == 0) {
		return "Kobita";
	} else {
		return "Meszczyzna";
	}
}

//loging control num for debug
function controlRet(controlNum) {
	console.log("control num: " + controlNum);
}

//setting stulecie
function setStulecie(monthNum) {
	if (
		monthNum == 81 ||
		monthNum == 82 ||
		monthNum == 83 ||
		monthNum == 84 ||
		monthNum == 85 ||
		monthNum == 86 ||
		monthNum == 87 ||
		monthNum == 88 ||
		monthNum == 89 ||
		monthNum == 90 ||
		monthNum == 91 ||
		monthNum == 92
	) {
		return 8;
	}
	//if month Num 01 - 12
	else if (
		monthNum == 01 ||
		monthNum == 02 ||
		monthNum == 03 ||
		monthNum == 04 ||
		monthNum == 05 ||
		monthNum == 06 ||
		monthNum == 07 ||
		monthNum == 08 ||
		monthNum == 09 ||
		monthNum == 10 ||
		monthNum == 11 ||
		monthNum == 12
	) {
		return 9;
	}
	//if month Num 21-32
	else if (
		monthNum == 21 ||
		monthNum == 22 ||
		monthNum == 23 ||
		monthNum == 24 ||
		monthNum == 25 ||
		monthNum == 26 ||
		monthNum == 87 ||
		monthNum == 28 ||
		monthNum == 29 ||
		monthNum == 30 ||
		monthNum == 31 ||
		monthNum == 32
	) {
		return 0;
	}
	//if month Num 41-52
	else if (
		monthNum == 41 ||
		monthNum == 42 ||
		monthNum == 43 ||
		monthNum == 44 ||
		monthNum == 45 ||
		monthNum == 46 ||
		monthNum == 87 ||
		monthNum == 48 ||
		monthNum == 49 ||
		monthNum == 50 ||
		monthNum == 51 ||
		monthNum == 52
	) {
		return 1;
	} else {
		return false;
	}
}

//writing to dane div
function write(month, dayNum, fullYear, plec) {
	dane.innerHTML = `Plec: ${plec} <br> Day: ${dayNum} <br> Mies: ${month} <br> Rok: ${fullYear}`;
}
