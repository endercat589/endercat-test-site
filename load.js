theme = localStorage.getItem("themePreference");
if(theme == null) {
    theme = "dark";
}

function setCorrectTheme() {
    body = document.body;

    if(theme == "dark") {
        body.classList.add("dark_theme")
        body.classList.remove("light_theme");
    } else {
        body.classList.add("light_theme");
        body.classList.remove("dark_theme");
    }

    localStorage.setItem("themePreference", theme);
}

function removeNoTransition() {
	body = document.body;
	setCorrectTheme();
	body.classList.remove("no_transition");
}