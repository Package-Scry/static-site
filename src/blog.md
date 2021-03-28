---
title: Blog
layout: default.njk
href:
  next: "..."
  previous: "..."
pagination:
  data: posts
  size: 3
  alias: posts
  next: "..."
  previous: "..."
---

<style type="text/css">
  .blog-container {
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 1em;
  }
  .article-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: start;
    grid-gap: 1em;
  }
  .article:first-of-type {
    grid-column: 1 / span 3;
  }
  .article {
    background: #2D444D;
    padding: 1em;
    border: 1px solid #718990;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  .article h1 {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    margin-block-start: 0;
    margin-block-end: 0;
    margin: .5em 0 0 0;
  }
  .article h1:hover {
    text-decoration: underline;
  }
  .article .text {
    margin: 1.5em 0;
  }

  .navigation-container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto auto auto;
  }
  .navigation-container > p {
    display: inline-block;
    background: #2A4A53;
  }
  .navigation-container > p:hover {
    background: #2A4A61;
  }
  .navigation-container > p:first-child {
    justify-self: start;
  }
  .navigation-container > .next {
    grid-row: 1;
    grid-column: 2;
    justify-self: end !important;
  }
  @media screen and (max-width: 1200px) {
    .article-list {
      grid-template-columns: 1fr 1fr;
    }
    .article:first-of-type {
      grid-column: 1 / span 2;
    }
  }
  @media screen and (max-width: 600px) {
    .article-list {
      grid-template-columns: 1fr;
    }
    .article:first-of-type {
      grid-column: 1 / span 1;
    }
  }
</style>

<div class="logo-container">
  <img src="/img/logo.png" />
  <div id="slogan">Dependency management 
    <br /> with just a click
  </div>
</div>
<div class="blog-container">
  <ul class="article-list">
  {% for post in posts %}
  <li class="article">
    <a href="/posts/{{ post.id }}" class="title-container">
      <h1>{{ post.title }}</h1>
    </a>
    <div class="text">{{ post.text }}</div>
    <div>Kristóf Szőllősi, {{ post.createdAt }}</div>
  </li>
  {% endfor %}
  </ul>
  <div class="navigation-container">
  {% if pagination.href.previous %}
  <p class="button">
    <a href="{{pagination.href.previous}}">Previous</a>
  </p>
  {% endif %}
  {% if pagination.href.next %}
  <p class="button next">
    <a href="{{pagination.href.next}}">Next</a>
  </p>
  {% endif %}
  </div>
</div>

