---
title: Blog
layout: default.njk
pagination:
  data: posts
  size: 100
  alias: posts
permalink: 'blog/'
---

# Blog

<ul>
{% for post in posts %}
  <li><a href="/posts/">{{ post.title }}</a></li>
{% endfor %}
</ul>