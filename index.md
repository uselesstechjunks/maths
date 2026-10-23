---
layout: default
title: Home
---

# Notes

{% for post in site.posts %}
<article class="post-preview">
  <h2>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>

  <p class="post-meta">
    {{ post.date | date: "%d %B %Y" }}
  </p>

  <div class="post-excerpt">
    {{ post.excerpt }}
  </div>

  {% if post.tags.size > 0 %}
  <p class="post-tags">
    {% for tag in post.tags %}
      <span class="tag">{{ tag }}</span>
    {% endfor %}
  </p>
  {% endif %}
</article>
{% endfor %}
