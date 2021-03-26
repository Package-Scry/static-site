---
title: Post
layout: default.njk
pagination:
  data: posts
  size: 1
  alias: post
  permalink: 'posts/{{ post.id }}/'
---

# {{ post.title }}


{{ post.text }}
