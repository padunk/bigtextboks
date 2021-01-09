"use strict";

(function () {
    var box = document.getElementById("bigtextboks");
    var copyrightYear = document.getElementById("copyright-year");
    var decreateText = document.getElementById("decrease");
    var increateText = document.getElementById("increase");
    var theme = document.getElementById("theme");
    var themeLabel = document.getElementById("theme-label");

    var FONT_SIZE = window.getComputedStyle(box).fontSize;
    var STEP = 8;
    var THEME_COLOR = {
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
    var icons = {
        sun: {
            src: "./icons/sun.svg",
            alt: "sun",
        },
        moon: {
            src: "./icons/moon.svg",
            alt: "moon",
        },
    };

    if (window.localStorage.getItem("theme")) {
        var userPreferredTheme = window.localStorage.getItem("theme");
        setTheme(THEME_COLOR[userPreferredTheme]);
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

    copyrightYear.textContent = new Date().getFullYear();
    console.log('Icons made by "https://www.flaticon.com/authors/freepik');
    console.log("Authors of bigtextbloks is looking for a full-time job!");

    decreateText.addEventListener("click", function (event) {
        FONT_SIZE = parseInt(FONT_SIZE, 10) - STEP;
        box.style.fontSize = FONT_SIZE + "px";
    });

    increateText.addEventListener("click", function (event) {
        FONT_SIZE = parseInt(FONT_SIZE, 10) + STEP;
        box.style.fontSize = FONT_SIZE + "px";
    });

    theme.addEventListener("click", function (event) {
        if (this.checked) {
            // LIGHT THEME HERE
            setTheme(THEME_COLOR.light);
            themeLabel.src = icons.moon.src;
            themeLabel.alt = icons.moon.alt;
            window.localStorage.setItem("theme", "light");
        } else {
            // DARK THEME HERE
            setTheme(THEME_COLOR.dark);
            themeLabel.src = icons.sun.src;
            themeLabel.alt = icons.sun.alt;
            window.localStorage.setItem("theme", "dark");
        }
    });

    function setTheme(theme) {
        for (var key in theme) {
            let color = theme[key];
            document.documentElement.style.setProperty(key, color);
        }
    }
})();
