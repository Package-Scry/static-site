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
      const data = await response.json()
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
#login .button {
  background: #231E1B;
  padding: 0.75rem 2rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 1.5rem;
}
#login .button:hover {
  background: #23282E;
}

</style>

<div class="container" id="login">
  <div id="header">
    <h1>Login</h1>
    <div class="separator"></div>
  </div>
  <div id="content">
    <a class="button primary" href="/login">
      <img src="/img/github.png" alt="github" />
      <span>Login with GitHub</span>
    </a>
  </div>
  <div id="container-footer">
    <div class="separator"></div>
  </div>
</div>
