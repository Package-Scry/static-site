document.addEventListener("DOMContentLoaded", async function () {
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

  const response = await fetch("https://package-scry.herokuapp.com/user", {
    credentials: "include",
  });

  const data = await response.json();

  const { user } = data

  const elMenuItem = document.querySelector("#menu-login");
  const userMenuItem = `<li id="menu-login"><span class="menu-item" >My account</span><span id="down-arrow">▼</span><div class="dropdown"><a class="dropdown-item" href="/subscriptions">My subscriptions</a><a class="dropdown-item" href="/logout">Logout</a></div></li>`;
  
   if (user) elMenuItem.outerHTML = userMenuItem
  
  console.log(data)
});
