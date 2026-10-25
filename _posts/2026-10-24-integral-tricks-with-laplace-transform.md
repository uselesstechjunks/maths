---
layout: post
title: "Dirichlet, Feynman and Laplace Transform"
date: 2026-10-09
slug: integral-tricks-with-laplace-transform
tags:
  - integral transform
  - laplace transform
  - differential equations
  - calculus
---
Laplace transform allows us to compute tricky integrals. In this post, I'll discuss the 2 main tricks, and a couple of examples where we take it to town. The second example in particular is particularly satisfying as it required me to call upon the big guns - partial fractions, Laplace transform and Feynman's trick (differentiating under the integral sign/Leibniz rule).

### Bag of tricks
{% assign related_post = site.posts | where: "slug", "laplace-derivative-integral" | first %}

The first of the trick comes from the integral of the transform in target (this [post]({{ related_post.url | relative_url }}) contains some details on how to derive it from the first principle).

$$
\int\limits_0^\infty \frac{f(t)}{t}\mathrm{dt}=\int\limits_0^\infty F(\sigma)\mathrm{d\sigma}
$$
