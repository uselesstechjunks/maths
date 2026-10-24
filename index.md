---
layout: default
title: Home
---

<section class="home-intro">
  <p class="eyebrow">MATHEMATICS · NOTES · EXPLORATIONS</p>
  <h1>Thinking through mathematics.</h1>
  <p class="intro-text">
    Write-ups on mathematical topics that I think I understand or I don't and I am trying to understand ~
  </p>
</section>

<section class="notes-layout" id="notes">
  <aside class="notes-sidebar">
    <div class="filter-group">
      <h3>Year</h3>
      <button class="filter-button active" data-filter-year="all">
        All years
      </button>
      {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
      {% for year in years %}
        <button class="filter-button" data-filter-year="{{ year.name }}">
          {{ year.name }} <span>{{ year.items.size }}</span>
        </button>
      {% endfor %}
    </div>

    <div class="filter-group">
      <h3>Topics</h3>
      <button class="filter-button active" data-filter-tag="all">
        All topics
      </button>
      {% assign tags = site.tags | sort %}
      {% for tag in tags %}
        <button class="filter-button" data-filter-tag="{{ tag[0] | escape }}">
          {{ tag[0] }} <span>{{ tag[1].size }}</span>
        </button>
      {% endfor %}
    </div>
  </aside>

  <div class="notes-results">
    {% for post in site.posts %}
      <article class="note"
        data-year="{{ post.date | date: '%Y' }}"
        data-tags="{% for tag in post.tags %}{{ tag | escape }}{% unless forloop.last %}|{% endunless %}{% endfor %}">
        <div class="note-date">{{ post.date | date: "%d %b %Y" }}</div>
        <div class="note-main">
          <h3>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <div class="note-excerpt">{{ post.content | strip_html | truncatewords: 40 }}</div>
          <div class="post-tags">
            {% for tag in post.tags %}
              <button class="tag tag-filter" data-tag="{{ tag | escape }}">
                {{ tag }}
              </button>
            {% endfor %}
          </div>
        </div>
        <a class="note-arrow"
           href="{{ post.url | relative_url }}"
           aria-label="Read {{ post.title }}">↗</a>
      </article>
    {% endfor %}

    <p id="no-results" hidden>No notes match these filters.</p>
  </div>
</section>
