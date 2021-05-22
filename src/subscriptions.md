---
title: My Subscriptions
layout: default.njk
permalink: 'subscriptions/'
---

<script src="/js/subscriptions.js"></script>

<style>

#subscriptions h2 {
  display: inline-block;
  margin: 0;
  margin-right: 1rem;
  font-size: 2em;
  font-weight: 100;
}
#subscriptions #plan-price {
  display: inline-block;
  margin: 0;
}
#subscriptions #content {
  display: grid;
  align-items: start;
}
#plan-info {
  display: grid;
  align-items: center;
  grid-template-columns: auto auto 1fr;
}
#no-plan {
  grid-column: 1 / span 3
}
#plan-name::first-letter {
  text-transform: uppercase;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto 1fr;
}
#subscriptions .danger {
  justify-self: end;
}

</style>

<div class="container" id="subscriptions">
  <div id="header">
    <h1>My Subsciptions</h1>
    <div class="separator"></div>
  </div>
  <div id="content">
    <div id="plan-info">
      <div id="no-plan">Loading...</div>
    </div>
  </div>
  <div id="container-footer">
    <div class="separator"></div>
  </div>
</div>
