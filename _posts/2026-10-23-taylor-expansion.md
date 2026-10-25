---
layout: post
title: "Vanishing Errors with Taylor Approximation for Tiny Changes"
date: 2026-10-23
slug: taylor-approximation
tags:
  - series
  - calculus
  - taylor series
  - approximation
---
{% assign related_post = site.posts | where: "slug", "continuous-differentiable" | first %}

We consider the Taylor expansion around $x$ with radius $h$ for a [continuously differentiable]({{ related_post.url | relative_url }}) function $f:\mathbb{R}\to\mathbb{R}$ (i.e., $f\in C^\infty[0,1]$).

$$
f(x+h)=\sum_{n=0}^\infty \frac{1}{n!}f^{(n)}(x)h^n
$$

We need to prove that any term $t_k=\frac{1}{k!}f^{(k)}(x)h^k$ overshadows the contribution from _all_ the remainder terms as $h\to 0$, that is

$$
\lim\limits_{h\to 0}\lvert\frac{1}{k!}f^{(k)}(x)h^k\rvert\geq \lim\limits_{h\to 0}\lvert \sum_{n=k+1}^\infty \frac{1}{n!}f^{(n)}(x)h^n\rvert
$$
