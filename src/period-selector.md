---
title: Sign up
layout: default.njk
permalink: "sign-up/"
---

<script>
  document.addEventListener("DOMContentLoaded", function(){
    const elButtonMonthly = document.querySelector(".button-monthly")
    const elButtonAnnual = document.querySelector(".button-annual")

    elButtonMonthly.addEventListener("click", () => localStorage.setItem("plan-period", "monthly"))
    elButtonAnnual.addEventListener("click", () => localStorage.setItem("plan-period", "annual"))
  })
</script>

<style>
  #pricing-container {
    width: 1200px;
    max-width: 90vw;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
  }
  #pricing-tables {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    column-gap: 3rem;
    justify-items: center;
    margin: 0 0 2rem 0;
  }
  .pricing-table {
    display: grid;
    grid-row: 2;
    background: rgba(48, 55, 64, .8);
    border: 1px solid #61828D;
    padding: 2rem 2rem;
    width: 400px;
    text-align: center;
    box-shadow: var(--default-shadow);
  }
  #annual {
    width: 440px;
    font-size: 1.5em;
    grid-row: 1 / span 3;
    border: 3px solid #FFC439;
    align-self: center;
  }

  @media screen and (max-width: 1200px) {
    #pricing-tables {
      grid-template-columns: 1fr;
     grid-template-rows: auto;
      row-gap: 2rem;
    }
    #annual {
      grid-row: 1;
    }
  }
  
  @media screen and (max-width: 600px) {
    #pricing-container {
      margin: 0 auto;
      padding: .25em;
      max-width: 95vw;
    }
    .pricing-table, #annual {
      box-sizing: border-box;
      width: 100%;
    }
  }
  h1 {
    margin: 0 0 1rem 0;
    font-size: 2.75em;
    filter: drop-shadow(var(--default-shadow));
    font-weight: 100;
  }
  .pricing-table > .description {
    font-size: 1.25em;
    text-shadow: var(--default-shadow)
  }
  .price-container {
    display: grid;
    margin: 1.5rem 0 0 0;
  }
  #annual .price-container {
    margin: 2.25rem 0 0 0;
  }
  .separator {
    background: #0FA8B2;
    filter: blur(1px);
    height: 1px;
  }
  .separator:last-child {
    align-self: end;
  }
  h2 {
    margin: 3.5rem 0;
    font-size: 1.25em;
    filter: drop-shadow(var(--default-shadow));
    font-weight: 100;
  }
  #annual h2 {
    margin: 4.5rem 0;
  }
  .pricing-button {
    margin: 0 auto;
  }


</style>

<div id="pricing-container">
  <div id="pricing-tables">
    <div class="pricing-table">
      <h1 class="header">Monthly</h1>
      <span class="description">Plan: Pro</span>
      <div class="price-container">
        <div class="separator"></div>
        <h2 class="monthly-price">$6.99 per user per month</h2>
        <div class="separator"></div>
        <h2 class="total-price">Total: $6.99 per month</h2>
      </div>
      <a class="button primary button-monthly" href="/billing-information">Pay</a>
    </div>
    <div class="pricing-table" id="annual">
      <h1 class="header">Annual</h1>
      <span class="description">Plan: Pro</span>
      <div class="price-container">
        <div class="separator"></div>
        <h2 class="monthly-price">$4.99 per user per month</h2>
        <div class="separator"></div>
        <h2 class="total-price">Total: $59.88 per year</h2>
      </div>
      <a class="button primary button-annual" href="/billing-information">Pay</a>
    </div>
  </div>
</div>
