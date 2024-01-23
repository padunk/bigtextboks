"use strict";

import { THEME_COLOR, icons, setTheme, theme, themeLabel } from "./theme.js";

import { generateConsoleText } from "./console.js";

(function () {
  const box = document.getElementById("bigtextboks");
  const decreaseText = document.getElementById("decrease");
  const increaseText = document.getElementById("increase");
  const textSansSerif = document.getElementById("text-sans-serif");
  const textSerif = document.getElementById("text-serif");
  const setCurrentText = (fontFamily) =>
    document.documentElement.style.setProperty("--current-text", fontFamily);

  const fontSize = window.getComputedStyle(box).fontSize;
  const STEP = 8;

  //* FEAT: FONT SIZE
  decreaseText.addEventListener("click", function (event) {
    if (fontSize <= 12) {
      return;
    }
    fontSize = parseInt(fontSize, 10) - STEP;
    box.style.fontSize = fontSize + "px";
  });

  increaseText.addEventListener("click", function (event) {
    if (fontSize >= 244) {
      return;
    }
    fontSize = parseInt(fontSize, 10) + STEP;
    box.style.fontSize = fontSize + "px";
  });

  //* FEAT: FONT FAMILY
  textSansSerif.addEventListener("click", function (event) {
    setCurrentText("sans-serif");
    textSansSerif.style.color = getCSSVariableValue();
  });

  textSerif.addEventListener("click", function (event) {
    setCurrentText("serif");
  });

  //* FEAT: THEME
  theme.addEventListener("click", function (event) {
    if (this.checked) {
      setTheme(THEME_COLOR.light);
      themeLabel.src = icons.moon.src;
      themeLabel.alt = icons.moon.alt;
      window.localStorage.setItem("theme", "light");
    } else {
      setTheme(THEME_COLOR.dark);
      themeLabel.src = icons.sun.src;
      themeLabel.alt = icons.sun.alt;
      window.localStorage.setItem("theme", "dark");
    }
  });

  document.body.style.setProperty("opacity", "1");
  document.body.style.setProperty("visibility", "visible");

  //* window LOAD and BEFOREUNLOAD
  window.addEventListener("load", () => {
    const persistentText = window.localStorage.getItem("persistentText");
    setTimeout(() => {
      if (persistentText) {
        box.value = persistentText;
      }
      box.focus();
    }, 0);
  });

  window.addEventListener("beforeunload", (event) => {
    const text = box.value;
    if (typeof text === "string") {
      window.localStorage.setItem("persistentText", text);
    }
  });

  //* console info
  generateConsoleText();
})();
