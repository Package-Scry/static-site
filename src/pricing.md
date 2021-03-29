---
title: Pricing
layout: default.njk
permalink: 'pricing/'
---

<style>
  #pricing-container {
    width: 1200px;
    max-width: 90vw;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 1rem;
  }
  #pricing-tables {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    justify-items: center;
    margin: 0 0 2rem 0;
  }
  @media screen and (max-width: 1200px) {
    #pricing-tables {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
    .pricing-table:last-child {
      grid-row: 1;
    }
  }
  .pricing-table {
    display: grid;
    background: rgba(48, 55, 64, .8);
    border: 1px solid #61828D;
    padding: 1.5rem 2rem;
    width: 400px;
    text-align: center;
    box-shadow: var(--default-shadow);
    grid-template-rows: auto auto calc(200px + 2rem) 1fr auto;
  }
  h1 {
    margin: 0 0 .5rem 0;
    font-size: 2.5em;
    filter: drop-shadow(var(--default-shadow));
    font-weight: 100;
  }
  .pricing-table > .description {
    font-size: 1.25em;
    text-shadow: var(--default-shadow)
  }
  .price-container {
    height: 200px;
    display: grid;
    grid-template-rows: 1fr auto auto 1fr;
    margin-top: 1rem;
  }
  .pro {
    height: 200px;
    display: grid;
    grid-template-rows: 1fr auto auto 1fr;
    row-gap: 5px;
    margin: 1rem 0;
  }
  .pro > .separator {
    grid-column: 1 / span 2;
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
    margin: 0 0 .2rem 0;
    font-size: 1.75em;
    filter: drop-shadow(var(--default-shadow));
    font-weight: 100;
  }
  h3 {
    margin: auto 0;
    font-size: 1em;
    font-weight: 100;
  }
  .sub-description {
    font-size: 1.25em;
    font-weight: 100;
    text-shadow: var(--default-shadow)
  }
  .pro > .sub-description {
    text-align: left;
  }
  h3 + .sub-description {
    font-size: 1em;
  }
  .features {
    margin: auto;
  }
  .feature {
    display: grid;
    justify-content: start;
    grid-template-columns: 25px auto;
    column-gap: 8px;
    margin: 2rem 0;
  }
  svg {
    max-width: 25px;
    max-height: 1em;
    filter: drop-shadow(var(--default-shadow));
  }
  .x svg {
    max-width: 20px;
    max-height: 1em;
  }
  .description {
    font-size: 1.25em;
    align-self: center;
    filter: drop-shadow(var(--default-shadow));
  }
  .free {
    background: #61828D;
    max-width: 300px;
    margin: auto auto 0 auto;
  }
  .free:hover {
    background: #62628D;
  }
</style>

<div class="logo-container">
  <img src="/img/logo.png" />
  <div id="slogan">Dependency management 
    <br /> with just a click
  </div>
</div>
<div id="pricing-container">
  <div id="pricing-tables">
    <div class="pricing-table">
      <h1 class="header">Free</h1>
      <span class="description">Best for personal use</span>
      <div class="price-container">
        <div class="separator"></div>
        <h2>Free</h2>
        <span class="sub-description">14-day Pro trial</span>
        <div class="separator"></div>
      </div>
      <ul class="features">
        <li class="feature">
          <div class="icon">
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18.0787L10.9492 29L34 2" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="description">Core Features</div>
        </li>
        <li class="feature">
          <div class="icon x">
            <svg width="26" height="63" viewBox="0 0 26 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.176 29.848L1.296 17.272H6.096L12.72 26.968L19.296 17.272H24.048L15.168 29.848L24.528 43H19.728L12.72 32.728L5.616 43H0.864L10.176 29.848Z" fill="white"/>
            </svg>
          </div>
          <div class="description">Ad-free</div>
        </li>
        <li class="feature">
          <div class="icon x">
            <svg width="26" height="63" viewBox="0 0 26 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.176 29.848L1.296 17.272H6.096L12.72 26.968L19.296 17.272H24.048L15.168 29.848L24.528 43H19.728L12.72 32.728L5.616 43H0.864L10.176 29.848Z" fill="white"/>
            </svg>
          </div>
          <div class="description">Commercial use</div>
        </li>
      </ul>
      <div class="button free">Download</div>
    </div>
    <div class="pricing-table">
      <h1 class="header">Pro</h1>
      <span class="description">For individuals & small teams</span>
      <div class="price-container pro">
        <div class="separator"></div>
        <h1>$4.99</h1>
        <span class="sub-description">user/month <br />billed if annually</span>
        <h3>$6.99</h3>
        <span class="sub-description">user/month <br />billed if annually</span>
        <div class="separator"></div>
      </div>
      <ul class="features">
        <li class="feature">
          <div class="icon">
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18.0787L10.9492 29L34 2" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="description">Ad-free</div>
        </li>
        <li class="feature">
          <div class="icon">
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18.0787L10.9492 29L34 2" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="description">Commercial use</div>
        </li>
        <li class="feature">
          <div class="icon">
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18.0787L10.9492 29L34 2" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="description">Unlimited workspaces</div>
        </li>
        <li class="feature">
          <div class="icon">
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18.0787L10.9492 29L34 2" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="description">Priority support </div>
        </li>
      </ul>
      <div class="button free">Buy now</div>
    </div>
  </div>
</div>
