---
title: My Subscriptions
layout: default.njk
permalink: 'subscriptions/'
---

<style>

#subscriptions h2 {
  display: inline-block;
  margin: 0;
  margin-right: 1rem;
  font-size: 2em;
  font-weight: 100;
}
#subscriptions #price {
  display: inline-block;
  margin: 0;
}
#subscriptions #content {
  display: grid;
  align-items: start;
}
#info {
  display: grid;
  align-items: center;
  grid-template-columns: auto auto 1fr;
}
#subscriptions .danger {
  justify-self: end;
}

</style>

<div class="logo-container">
  <img src="/img/logo.png" />
  <div id="slogan">Dependency management 
    <br /> with just a click
  </div>
</div>
<div class="container" id="subscriptions">
  <div id="header">
    <h1>My Subsciptions</h1>
    <div class="separator"></div>
  </div>
  <div id="content">
    <div id="info">
      <h2>Annual Pro Plan</h2>
      <span id="price">($58.88 / year)</span>
      <a class="button danger" href="/cancel">Cancel Subscription</a>
    </div>
  </div>
  <div id="container-footer">
    <div class="separator"></div>
  </div>
</div>
