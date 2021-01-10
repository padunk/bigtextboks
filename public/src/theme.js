export var THEME_COLOR = {
    dark: {
        "--theme-bg": "rgb(31, 15, 50)",
        "--theme-color": "rgb(68, 35, 82)",
        "--theme-color-hover": "rgb(110, 57, 131)",
        "--theme-color-textarea": "rgba(255, 255, 255, 0.7)",
    },
    light: {
        "--theme-bg": "rgb(240, 240, 240)",
        "--theme-color": "rgb(200, 180, 255)",
        "--theme-color-hover": "rgb(120, 90, 120)",
        "--theme-color-textarea": "rgba(20,20,20, 0.8)",
    },
};

export var icons = {
    sun: {
        src: "./icons/sun.svg",
        alt: "sun",
    },
    moon: {
        src: "./icons/moon.svg",
        alt: "moon",
    },
};

export function setTheme(theme) {
    for (var key in theme) {
        let color = theme[key];
        document.body.style.setProperty(key, color);
    }
}

if (window.localStorage.getItem("theme")) {
    var themeLabel = document.getElementById("theme-label");
    // get user prefer theme from local storage
    var userPreferredTheme = window.localStorage.getItem("theme");
    // Prevent FOUC on first render.
    document.body.setAttribute("style", "visibility: visible; opacity: 0;");
    if (typeof userPreferredTheme === "string") {
        setTheme(THEME_COLOR[userPreferredTheme]);
    } else {
        // if there is no local storage theme yet, set it to default === 'light'
        setTheme(THEME_COLOR["light"]);
        window.localStorage.setItem("theme", "light");
        userPreferredTheme = "light";
    }

    if (userPreferredTheme === "light") {
        theme.checked = true;
        themeLabel.src = icons.moon.src;
        themeLabel.alt = icons.moon.alt;
    } else {
        theme.checked = false;
        themeLabel.src = icons.sun.src;
        themeLabel.alt = icons.sun.alt;
    }
}
