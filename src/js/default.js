document.addEventListener("DOMContentLoaded", function () {
  const elNav = document.querySelector("nav");
  const elMobileMenu = document.querySelector("#mobile-menu");
  const elMenu = document.querySelector("#menu-container");

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < 600) {
      elMenu.style.display = "none";
      elMobileMenu.style.display = "inline-block";
      elNav.className = "";
    } else {
      elMenu.style.display = "block";
      elMobileMenu.style.display = "none";
      elNav.className = "";
    }
  });

  elMobileMenu.addEventListener("click", () => {
    elMenu.style.display === "block"
      ? (elMenu.style.display = "none")
      : (elMenu.style.display = "block");
    console.log(elNav.className);
    elNav.className = elNav.className?.includes("active") ? "" : "active";
  });
});
