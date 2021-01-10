"use strict";

import { icons, theme, themeLabel, THEME_COLOR, setTheme } from "./theme.js";

(function () {
    var box = document.getElementById("bigtextboks");
    var copyrightYear = document.getElementById("copyright-year");
    var decreateText = document.getElementById("decrease");
    var increateText = document.getElementById("increase");

    var FONT_SIZE = window.getComputedStyle(box).fontSize;
    var STEP = 8;

    // console info
    var consoleCss = "font-weight: 700; color: orangered; font-size: 20px;";

    copyrightYear.textContent = new Date().getFullYear();
    console.log('Icons made by "https://www.flaticon.com/authors/freepik');
    console.log(
        "%cAuthors of bigtextbloks is looking for a" + "%c full-time job!",
        "color: whitesmoke;",
        consoleCss
    );
    console.log(
        "%cTwitter: https://twitter.com/anakagungcorp",
        "color: skyblue; font-size: 18px"
    );

    // FEAT: FONT SIZE
    decreateText.addEventListener("click", function (event) {
        FONT_SIZE = parseInt(FONT_SIZE, 10) - STEP;
        box.style.fontSize = FONT_SIZE + "px";
    });

    increateText.addEventListener("click", function (event) {
        FONT_SIZE = parseInt(FONT_SIZE, 10) + STEP;
        box.style.fontSize = FONT_SIZE + "px";
    });

    // FEAT: THEME
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

    document.body.style.setProperty("opacity", "1");
    document.body.style.setProperty("visibility", "visible");

    // window.addEventListener("resize", function (event) {
    //     box.removeAttribute("style");
    // });
})();
