import { getCSSVariableValue } from "./utils.js";

export var THEME_COLOR = {
  dark: {
    "--theme-bg": getCSSVariableValue("--theme-dark-bg"),
    "--theme-color": getCSSVariableValue("--theme-dark-color"),
    "--theme-color-hover": getCSSVariableValue("--theme-dark-color-hover"),
    "--theme-color-textarea": getCSSVariableValue(
      "--theme-dark-color-textarea"
    ),
  },
  light: {
    "--theme-bg": getCSSVariableValue("--theme-light-bg"),
    "--theme-color": getCSSVariableValue("--theme-light-color"),
    "--theme-color-hover": getCSSVariableValue("--theme-light-color-hover"),
    "--theme-color-textarea": getCSSVariableValue(
      "--theme-light-color-textarea"
    ),
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

export var themeLabel = document.getElementById("theme-label");
export var theme = document.getElementById("theme");

(function () {
  // get user prefer theme from local storage
  var userPreferredTheme = window.localStorage.getItem("theme");

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
})();
