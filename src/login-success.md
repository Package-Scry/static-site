---
title: Login Success
layout: default.njk
permalink: "login-success/"
---

<script>
  document.addEventListener("DOMContentLoaded", function(){
    const elButton = document.querySelector("#login .primary")

    elButton.addEventListener("click", async (e) => {
      e.preventDefault();

      const response = await fetch(
        "https://0auth-production.up.railway.app/site/check",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include"
        }
      );
      console.log(response);
    });
  })
</script>

<style>

#login #price {
  display: inline-block;
  margin: 0;
}
#login #content {
  display: grid;
  align-items: start;
  justify-items: center;
}

</style>

<div class="container" id="login">
  <div id="header">
    <h1>Login</h1>
    <div class="separator"></div>
  </div>
  <div id="content">
    <a class="button primary" href="/login">CHECK</a>
  </div>
  <div id="container-footer">
    <div class="separator"></div>
  </div>
</div>
