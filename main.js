theme = localStorage.getItem("themePreference");
if(theme == null) {
    theme = "dark";
}

function nav() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
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

function toggleTheme() {
    body = document.body;

    if(theme == "light") {
        theme = "dark";
    } else {
        theme = "light";
    }

    setCorrectTheme();
}

setCorrectTheme();