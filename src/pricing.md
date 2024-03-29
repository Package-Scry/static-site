---
title: Pricing
layout: default.njk
permalink: "pricing/"
---

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
    column-gap: 3rem;
    justify-items: center;
    margin: 0 0 2rem 0;
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

  @media screen and (max-width: 1200px) {
    #pricing-tables {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
    .pricing-table:last-child {
      grid-row: 1;
    }
  }
  
  @media screen and (max-width: 600px) {
    #pricing-container {
      margin: 0 auto;
      padding: .25em;
      max-width: 95vw;
    }
    .pricing-table {
      box-sizing: border-box;
      width: 100%;
      grid-template-rows: auto auto calc(150px + 2rem) 1fr auto;
    }
  }
  h1 {
    margin: 0 0 1.5rem 0;
    font-size: 2.75em;
    filter: drop-shadow(var(--default-shadow));
    font-weight: 100;
  }
  .pricing-table > .description {
    font-size: 1.25em;
    text-shadow: var(--default-shadow)
  }
  .price-container {
    height: 220px;
    display: grid;
    grid-template-rows: 1fr auto auto 1fr;
    margin: 1.25rem 0;
  }
  .pro > h2{
    color: deepskyblue;
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
    font-size: 2.25em;
    filter: drop-shadow(var(--default-shadow));
    font-weight: 100;
  }
  #monthly-price {
    font-size: 2.25em;
  }
  h3 {
    margin: auto 0;
    font-size: 1.25em;
    font-weight: 100;
  }
  .sub-description {
    font-size: 1.25em;
    font-weight: 100;
    text-shadow: var(--default-shadow)
  }
  .pro > .sub-description {
    font-style: italic;
  }
  h3 + .sub-description {
    font-size: 1em;
  }
  .features {
    margin: 3rem auto 0 auto;
  }
  .feature {
    display: grid;
    justify-content: start;
    grid-template-columns: 25px auto;
    column-gap: 8px;
    margin: 2rem 0;
  }
  .feature > .icon {
    align-self: center;
    line-height: 0;
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
  .pricing-button {
    margin: 3rem auto 0 auto;
  }


</style>

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
            <svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g transform="matrix(4.0568,0,0,4.26439,1.95538,-42.6098)">
                    <path d="M5.936,17.328L0.756,9.992L3.556,9.992L7.42,15.648L11.256,9.992L14.028,9.992L8.848,17.328L14.308,25L11.508,25L7.42,19.008L3.276,25L0.504,25L5.936,17.328Z" style="fill:white;fill-rule:nonzero;"/>
                </g>
            </svg>
          </div>
          <div class="description">Ad-free</div>
        </li>
        <li class="feature">
          <div class="icon x">
            <svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g transform="matrix(4.0568,0,0,4.26439,1.95538,-42.6098)">
                    <path d="M5.936,17.328L0.756,9.992L3.556,9.992L7.42,15.648L11.256,9.992L14.028,9.992L8.848,17.328L14.308,25L11.508,25L7.42,19.008L3.276,25L0.504,25L5.936,17.328Z" style="fill:white;fill-rule:nonzero;"/>
                </g>
            </svg>
          </div>
          <div class="description">Commercial use</div>
        </li>
      </ul>
      <a class="button primary pricing-button" href="/download">Download</a>
    </div>
    <div class="pricing-table pro">
      <h1 class="header">Pro</h1>
      <span class="description">For individuals & small teams</span>
      <div class="price-container pro">
        <div class="separator"></div>
        <h2>Free</h2>
        <span class="sub-description">during open beta</span>
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
      <a class="button primary pricing-button" href="/download">Download for <strong>FREE</strong> during Beta</a>
    </div>
  </div>
</div>
