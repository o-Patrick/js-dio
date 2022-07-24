const title = document.querySelector("#page-title");
const btt = document.querySelector("#mode-selector");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

function displayMode(){
	changeClasses();
	changeText();
};

function changeClasses(){
	title.classList.toggle(darkModeClass);
	btt.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText(){
	const lightMode = "Light Mode";
	const darkMode = "Dark Mode";

	if(body.classList.contains(darkModeClass)){
		btt.innerHTML = lightMode;
		title.innerHTML = `${darkMode} ON`;
		return;
	}

	btt.innerHTML = darkMode;
	title.innerHTML = `${lightMode} ON`;
}

btt.addEventListener("click", displayMode);