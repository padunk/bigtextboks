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

export function setTheme(theme) {
    for (var key in theme) {
        let color = theme[key];
        document.documentElement.style.setProperty(key, color);
    }
}

if (window.localStorage.getItem("theme")) {
    // get user prefer theme from local storage
    var userPreferredTheme = window.localStorage.getItem("theme");

    if (typeof userPreferredTheme === "string") {
        setTheme(THEME_COLOR[userPreferredTheme]);
    } else {
        // if there is no local storage theme yet, set it to default === 'light'
        setTheme(THEME_COLOR["light"]);
    }

    // Prevent FOUC on first render.
    // since body implement transition: all and with duration of 500ms
    // we need to set the timeout of 500ms or >
    document.body.setAttribute("style", "opacity: 0; visibility: visible");
    window.setTimeout(function () {
        document.body.setAttribute("style", "opacity: 1");
    }, 501);
}
