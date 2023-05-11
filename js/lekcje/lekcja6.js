//buttons
const clickBtn = document.querySelector("#click");
const dbclickBtn = document.querySelector("#dbclick");
const mouseenterBtn = document.querySelector("#mouseenter");
const mouseleaveBtn = document.querySelector("#mouseleave");
const mouseupBtn = document.querySelector("#mouseup");
const mousemoveBtn = document.querySelector("#onmousemove");
const wheelBtn = document.querySelector("#onwheel");

//functions
clickBtn.addEventListener("click", () => {
	clickBtn.style.backgroundColor = "green";
});

dbclickBtn.addEventListener("dblclick", () => {
	dbclickBtn.style.backgroundColor = "red";
});

mouseenterBtn.addEventListener("mouseenter", () => {
	mouseenterBtn.style.backgroundColor = "blue";
});

mouseleaveBtn.addEventListener("mouseleave", () => {
	mouseleaveBtn.style.backgroundColor = "yellow";
});

mouseupBtn.addEventListener("mouseup", () => {
	mouseupBtn.style.backgroundColor = "lime";
});

mousemoveBtn.addEventListener("mousemove", () => {
	mousemoveBtn.style.backgroundColor = "red";
	setTimeout(() => {
		mousemoveBtn.style.backgroundColor = "purple";
	}, 1);
});

wheelBtn.addEventListener("wheel", () => {
	wheelBtn.style.backgroundColor = "red";
	setTimeout(() => {
		wheelBtn.style.backgroundColor = "purple";
	}, 1);
});
