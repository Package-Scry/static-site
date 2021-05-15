---
title: Login
layout: default.njk
permalink: 'login/'
---

<script>
  document.addEventListener("DOMContentLoaded", function(){
    const elButton = document.querySelector("#login .primary")

    elButton.addEventListener("click", async (e) => {
      e.preventDefault();

      const response = await fetch(
        "https://package-scry.herokuapp.com/site/redirect",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
        }
      );
      const data = response.json()
      console.log(data);
      const url = data?.oauthUrl;

      console.log(url);
      
      if (url) window.location.href = url;
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
    <a class="button primary" href="/login">Login</a>
  </div>
  <div id="container-footer">
    <div class="separator"></div>
  </div>
</div>
