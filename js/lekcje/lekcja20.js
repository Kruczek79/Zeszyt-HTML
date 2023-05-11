const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.height = 800;
canvas.width = 800;
canvas.style.border = "1px solid black";

const rook = new Image();
const queen = new Image();
const king = new Image();

rook.src = "../../../img/lekcje/js/wR.png";
queen.src = "../../../img/lekcje/js/wQ.png";
king.src = "../../../img/lekcje/js/bK.png";

function draw() {
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			ctx.fillStyle = "black";
			ctx.fillRect(i * 100, j * 100, 100, 100);
			if ((i + j) % 2 == 0) {
				ctx.fillStyle = "white";
				ctx.fillRect(i * 100, j * 100, 100, 100);
			}
		}
	}
}
function dImage(which) {
	if (which == 3) {
		ctx.drawImage(rook, 0, 110);
		ctx.drawImage(queen, 110, 110);
		ctx.drawImage(king, 410, 10);
	} else if (which == 2) {
		ctx.drawImage(king, 410, 10);
		ctx.drawImage(rook, 0, 110);
	}
}
rook.addEventListener("load", () => {
	draw();
	dImage(3);
});
king.addEventListener("load", () => {
	draw();
	dImage(3);
});
queen.addEventListener("load", () => {
	draw();
	dImage(3);
});
document.querySelector(".btn").addEventListener("click", function animate() {
	let y = 100;
	const write = function () {
		alert("checkmate");
	};
	const fly = function (callback) {
		let id = setInterval(() => {
			y = y - 20;
			console.log(y);

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw();
			ctx.drawImage(queen, 110, y);

			dImage(2);

			if (y <= 5) {
				clearInterval(id);
				callback();
			}
		}, 100);
	};
	fly(write);
});
