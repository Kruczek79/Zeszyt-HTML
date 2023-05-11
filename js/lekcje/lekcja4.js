const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
	e.preventDefault();
	let height = document.querySelector("#height").value;

	height = +height;
	let tree = "";
	for (i = -1; i < height; i++) {
		const colors = ["red", "green", "blue", "violet", "purple", "yellow"];
		let randomColor = Math.floor(Math.random() * colors.length);
		for (k = i; k < height; k++) {
			tree += "<span>&nbsp;</span>";
		}
		for (j = -1; j < i; j++) {
			let number = Math.floor(Math.random() * (255 - 33)) + 33;
			let znak = String.fromCharCode(number);
			tree +=
				'<span style="color:' + colors[randomColor] + ';">' + znak + "</span>";
		}
		tree += "<br>";
	}
	document.querySelector("#tree").innerHTML = tree;
});
