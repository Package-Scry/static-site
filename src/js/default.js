let isLoggedIn = null;
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

    elNav.className = elNav.className?.includes("active") ? "" : "active";
  });

  const response = await fetch("https://package-scry.herokuapp.com/user", {
    credentials: "include",
  });

  const data = await response.json();

  const { user } = data;
  const id = user?.id;
  const elMenuItem = document.querySelector("#menu-login");
  const userMenuItem = `<li id="menu-login"><span class="menu-item" >My account</span><span id="down-arrow">▼</span><div class="dropdown"><a class="dropdown-item" href="/subscriptions">My subscriptions</a><a class="dropdown-item" id="logout" href="https://package-scry.herokuapp.com/logout">Logout</a></div></li>`;

  if (id) {
    elMenuItem.outerHTML = userMenuItem;
    isLoggedIn = true;

    const elLogout = document.querySelector("#logout");

    elLogout.addEventListener("click", () => {
      isLoggedIn = false;
    });
  } else {
    const url = document.URL;

    if (url === "https://www.packagescry.com/contact-us/")
      window.location.href = "https://www.packagescry.com/login";

    isLoggedIn = false;
  }

  const elSubscribeButton = document.querySelector("#subscribe-button");
  const elSubscribeInput = document.querySelector("#subscribe-input");
  const elSubscribeCheckbox = document.querySelector("#subscribe-checkbox");
  const elSubscribeTerms = document.querySelector("#subscribe-terms");

  elSubscribeCheckbox.addEventListener("change", () => {
    if (elSubscribeTerms.style.color === "red")
      elSubscribeTerms.style.color = "white";
  });

  elSubscribeButton.addEventListener("click", async () => {
    const isChecked = elSubscribeCheckbox.checked;
    const emailValue = elSubscribeInput.value;

    if (!isChecked) elSubscribeTerms.style.color = "red";

    if (!!emailValue && isChecked) {
      const response = await fetch(
        "https://package-scry.herokuapp.com/post/subscribe",
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ email: emailValue }),
        }
      );

      const data = await response.json();
      const { status } = data;

      if (status === "success")
        elSubscribeInput.outerHTML = `<div style="color: white; font-size: 2em; text-align: center; margin: auto 0;">Success!</div>`;
      else elSubscribeInput.value = "failed";

      elSubscribeCheckbox.checked = false;
    }
  });
});
