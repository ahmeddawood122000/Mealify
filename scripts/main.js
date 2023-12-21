window.onload = function () {
  var aMainMenu = document.getElementById("aMainMenu");
  /**
   * HTMLUListElement
   */
  var mainNav = document.getElementById("mainNav");

  aMainMenu.onclick = function () {
    if (
      mainNav.style.display.toLowerCase() == "none" ||
      mainNav.style.display == ""
    ) {
      mainNav.style.display = "block";
    } else {
      mainNav.style.display = "none";
    }
  };

  var iDarkLight = document.getElementById("iDarkLight");
  iDarkLight.onclick = function () {
    if (iDarkLight.className.includes("moon")) {
      // site will be dark
      iDarkLight.className = "fa-regular fa-sun";
      document.head.innerHTML +=
        '<link rel="stylesheet" href="css/dark.css" id="stDark" />';
    } else {
      iDarkLight.className = "fa-regular fa-moon";
      document.getElementById("stDark").remove();
    }
  };
  var closeMenu = document.getElementById("closeMenu");
  closeMenu.onclick = function () {
    aMainMenu.click();
  };
};
