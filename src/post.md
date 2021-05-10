---
title: Post
layout: default.njk
permalink: 'posts/{{ post.title }}/'
pagination:
  data: posts
  size: 1
  alias: post
---

<style>
  #article-container {
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 1em;
  }
  #article {
    background: #2D444D;
    padding: 1em;
    border: 1px solid #718990;
    box-shadow: var(--default-shadow);
    margin-bottom: 1em;
  }
  #article > #title {
    font-size: 2em;
    margin-bottom: .25em;
  }
  #article > #date {
    font-size: .9em;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 2em;
    padding-bottom: 1em;
  }
</style>

<div id="article-container">
  <div id="article">
    <div id="title">
      {{ post.title }}
    </div>
    <div id="date">Kristóf Szőllősi, {{ post.createdAt }}</div>
    <div id="text">{{ post.text }}</div>
  </div>
</div>
