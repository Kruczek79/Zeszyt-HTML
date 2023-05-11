let points = 0;
let regexs = [/^a/g, /sab$/m, /[1-3]/g, /3\+4\=7/g, /[a,z]/g];
let value = document.getElementById("input").value;
let next1 = false;

//randomizing
let current = regexs[Math.floor(Math.random() * regexs.length)];
//checking function
function check() {
	//setting input value
	value = document.getElementById("input").value;

	//if input matches regex
	if (current.test(value) === true) {
		//changing style
		document.getElementById("input").style.backgroundColor = "green";
		document.getElementById("next").style.display = "inline";
		points++;
	}
	//if input not matches regex
	else {
		//changing style
		document.getElementById("input").style.backgroundColor = "red";
	}
}
//function for changing to next regex
function next() {
	//randomizing
	current = regexs[Math.floor(Math.random() * regexs.length)];

	//displaying current regex
	document.getElementById("regex").textContent = "Regex: " + current;

	//clearing input
	document.getElementById("input").style.backgroundColor = "white";
	document.getElementById("input").value = "";
	next1 = true;
}

//input class
class Game {
	Start() {
		document.querySelector("#check").addEventListener("click", check);
		document.querySelector("#next").addEventListener("click", next);
		TimerObj.Start();
	}
}
//timer class
class Timer {
	time;
	constructor(time) {
		this.time = time;
	}
	Start() {
		const interval = setInterval(() => {
			//displays time left and current regex every second
			document.querySelector(
				"#timer"
			).textContent = `Pozostały Czas: ${this.time}s `;
			document.getElementById("regex").textContent = "Regex: " + current;

			//subtract time left every second
			this.time = this.time - 1;
			if (this.time === -1) {
				clearInterval(interval);
				document.querySelector("#result").innerHTML =
					"<b>Koniec czasu!!!</b>" +
					"<br>" +
					"<b>Punkty:</b> " +
					points +
					"<br>";
				document.querySelector("#check").removeEventListener("click", check);
				document.getElementById("check").setAttribute("disabled", "");
				document.getElementById("input").setAttribute("disabled", "");
			}
			//showing next button if regex matches input
			if (next1 === true) {
				document.getElementById("next").style.display = "none";
				next1 = false;
			}
		}, 1000);
	}
}

//making objects
const GameObj = new Game();
const TimerObj = new Timer(60);

//start function
document.querySelector("#start").addEventListener("click", function start() {
	//button disapear
	document.querySelector("#start").style.display = "none";
	document.getElementById("next").style.display = "none";

	//start game
	GameObj.Start();
});
