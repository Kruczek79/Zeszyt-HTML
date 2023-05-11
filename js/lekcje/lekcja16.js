let y1 = "100";
let x1 = "50";
document.addEventListener("keypress", (e) => {
	let sprite1 = document.querySelector("#sprite1");
	const sprite2 = document.querySelector("#sprite2");

	switch (e.key) {
		case "w":
			y1 = parseInt(y1);
			y1 = y1 - 10;

			//set position y
			sprite1.style.top = y1 + "px";
			console.log(`y1: ${y1}`);

			//if on top go down
			y1 === 10 ? ((sprite1.style.top = "325px"), (y1 = "325")) : console.log();
			break;
		case "s":
			y1 = parseInt(y1);
			y1 = y1 + 10;

			//set position y
			sprite1.style.top = y1 + "px";
			console.log(`y1: ${y1}`);

			//if on top go down
			y1 === 325 ? ((sprite1.style.top = "10px"), (y1 = "10")) : console.log();
			break;
		case "a":
			x1 = parseInt(x1);
			x1 = x1 + 10;

			//set position y
			sprite1.style.right = x1 + "px";
			console.log(`x1: ${x1}`);

			//if on top go down
			x1 === 680
				? ((sprite1.style.right = "10px"), (x1 = "10"))
				: console.log();
			break;
		case "d":
			x1 = parseInt(x1);
			x1 = x1 - 10;

			//set position y
			sprite1.style.right = x1 + "px";
			console.log(`x1: ${x1}`);

			//if on top go down
			x1 === 10
				? ((sprite1.style.right = "680px"), (x1 = "680"))
				: console.log();
			break;
	}
});
