"use strict";

export function generateConsoleText() {
  const copyrightYear = document.getElementById("copyright-year");
  const consoleCss = "font-weight: 700; color: orangered; font-size: 20px;";

  copyrightYear.textContent = new Date().getFullYear();
  console.log('Icons made by "https://www.flaticon.com/authors/freepik');
  console.log(
    "%cAuthors of bigtextbloks is looking for a" + "%c full-time job!",
    "color: whitesmoke;",
    consoleCss
  );
  console.log(
    "%cweb: https://anakagung.com",
    "color: skyblue; font-size: 18px"
  );
}
