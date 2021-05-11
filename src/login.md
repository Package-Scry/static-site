---
title: Login
layout: default.njk
permalink: 'login/'
---

<script>
  document.addEventListener("DOMContentLoaded", async function(){
    const elButton = document.querySelector("#login .primary")

    elButton.addEventListener("click", e => {
      e.preventDefault()
      const response = await fetch('https://package-scry.herokuapp.com/auth/000000')
      console.log(response)

      const { "x-token": token } = response
      console.log({token})

      localStorage.setItem("token", token)
    })
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
