//load animation
$(window).on("load", function () {
	$(".loader").fadeOut("slow");
});

function setCodeTheme(whichtheme) {
	let head = document.getElementsByTagName("HEAD")[0];
	let link = document.createElement("link");
	if (whichtheme == "dark") {
		link.rel = "stylesheet";
		link.href = "../../../css/main/themes/dracula.css";
	} else if (whichtheme == "white") {
		link.rel = "stylesheet";
		link.href = "../../../css/main/themes/atom-one-light.min.css";
	}
	head.appendChild(link);
}

//variables
let content = document.querySelector(".content");
let sidebar = document.querySelector(".sidebar");

//activate sidebar and dynamic width for content
document.getElementById("btn").addEventListener("click", () => {
	sidebar.classList.toggle("active");
	if (sidebar.classList.contains("active") == true) {
		content.style.width = "calc(100vw - 240px - 40px)";
		content.style.marginLeft = 260 + "px";
	} else {
		content.style.width = "calc(100vw - 94px - 40px)";
		content.style.marginLeft = 104 + "px";
	}
});

//switch theme
let toggleswitch = document.querySelector(".toggle-switch");

toggleswitch.addEventListener("click", () => {
	document.body.classList.toggle("dark");
	if (document.body.classList.contains("dark") == true) {
		setCodeTheme("dark");
	} else {
		setCodeTheme("white");
	}
});

//highlight js
hljs.highlightAll();

//set basic theme
setCodeTheme("dark");
