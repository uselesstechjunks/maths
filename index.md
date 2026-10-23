---
layout: default
title: Home
---

<section class="home-intro">
  <p class="eyebrow">MATHEMATICS · NOTES · EXPLORATIONS</p>
  <h1>Thinking through mathematics.</h1>
  <p class="intro-text">
    Write-ups on mathematical topics that I think I understand, and those I am still trying to understand.
  </p>
</section>

<section class="notes-section">
  <div class="section-heading">
    <h2>Notes</h2>
    <span>{{ site.posts.size }} entries</span>
  </div>

  {% for post in site.posts %}
  <article class="note">
    <div class="note-date">
      {{ post.date | date: "%d %b %Y" }}
    </div>

    <div class="note-main">
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>

      <div class="note-excerpt">
        {{ post.excerpt }}
      </div>

      {% if post.tags.size > 0 %}
      <div class="post-tags">
        {% for tag in post.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>

    <a class="note-arrow"
       href="{{ post.url | relative_url }}"
       aria-label="Read {{ post.title }}">↗</a>
  </article>
  {% endfor %}
</section>
