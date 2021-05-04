---
title: Contact us
layout: default.njk
permalink: 'contact-us/'
---

<style>

#contact #sub-header {
  display: inline-block;
  margin: 2.5rem 0 4.5rem 0;
  font-size: 1.25em;
  font-weight: 100;
  text-align: center;
}
#contact #content {
  display: grid;
  align-items: start;
  justify-items: center;
}
#contact #contact-radios {
  display: flex;
  border: none;
}
@media screen and (max-width: 1200px) {
#contact #contact-radios {
  display: grid;
  grid-template-columns: auto 1fr;
}
}
#contact #contact-radios input {
  align-self: center;
  appearance: none;
  background: transparent;
  border-radius: 50%;
  border: 3px solid white;
  width: 14px;
  height: 14px;
}
#contact #contact-radios input:hover {
  cursor: pointer;
  background: white;
}
#contact #contact-radios input:checked {
  background: white;
}
#contact #contact-radios label:hover {
  cursor: pointer;
}
#contact #contact-radios label {
  font-size: 1.75em;
  margin-right: 2rem;
  padding-left: .5rem;
    filter: drop-shadow(var(--default-shadow));
}
#contact #contact-radios label:last-child {
  margin-right: 0;
}
#contact-text {
  width: 100%;
  margin: 2.5rem 0 4.5rem 0;
  font-size: 1.5em;
  padding: 1rem;
  box-sizing: border-box;
  font-family: Bitter;
  resize: vertical;
  min-height: 200px;
}
#contact-text:focus-visible {
  outline: none;
}

</style>

<div class="logo-container">
  <img src="/img/logo.png" />
  <div id="slogan">Dependency management 
    <br /> with just a click
  </div>
</div>
<div class="container" id="contact">
  <div id="header">
    <h1>Contact us</h1>
    <div class="separator"></div>
  </div>
  <div id="content">
    <fieldset id="contact-radios">
      <input type="radio" id="feedback" name="type" value="feedback" checked>
      <label for="feedback">Feedback</label>
      <input type="radio" id="bug" name="type" value="bug">
      <label for="bug">Bug</label>
      <input type="radio" id="payment" name="type" value="payment">
      <label for="payment">Payment issues</label>
      <input type="radio" id="other" name="type" value="other">
      <label for="other">Other</label>
    </fieldset>
    <textarea id="contact-text" rows="15" placeholder="Your message..."></textarea>
    <a class="button primary" href="/send-contact">Send</a>
  </div>
  <div id="container-footer">
    <div class="separator"></div>
  </div>
</div>
