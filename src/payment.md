---
title: Payment
layout: default.njk
permalink: "payment/"
---

<script src="https://js.stripe.com/v3/"></script>
<script src="/js/stripe.js"></script>

<style>
  .stripe-form {
    padding: 3.75rem 0;
  }

  @media screen and (max-width: 1200px) {

  }
  
  @media screen and (max-width: 600px) {

  }



</style>

<div id="payment-container" class="container">
  <div id="header">
    <h1>Payment</h1>
    <div class="separator"></div>
  </div>

  <form id="payment-form" class="stripe-form">
    <div id="payment-element">
    <!-- Elements will create form elements here -->
    </div>
    <button id="submit" class="button">Submit</button>
    <div id="error-message">
      <!-- Display error message to your customers here -->
    </div>
  </form>
      
  </form>
</div>
