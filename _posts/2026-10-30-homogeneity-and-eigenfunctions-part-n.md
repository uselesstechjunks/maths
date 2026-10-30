---
layout: post
title: "Homogeneity and Eigenfunctions: Part N"
date: 2026-10-30
slug: homogeneity-and-eigenfunctions-part-n
tags:
  - functional equations
  - ordinary differential equations
  - sequences
  - difference equations
  - analysis
---
Link to previous parts:
{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-1" | first %}
- [Part 1]({{ related_post.url | relative_url }})

### Problems
#### Example 1
Find all continuous functions $f:(0,\infty)\to\mathbb{R}$ that satisfy the following for all $x > 0$:

$$
f(x^2) + f(x) = \ln(x) + 2
$$

#### Example 2 (Dilation/Scaling Operator)
Find all continuous functions $f:(0,\infty)\to\mathbb{R}$ that satisfy the following for all $x > 0$:

$$
f(x) + f(2x) + f(4x) = \ln(x)
$$

#### Example 3 (Integral-Shift Operator)
Find all continuous functions $f:\mathbb{R}\to\mathbb{R}$ that satisfy the following for all $x\in\mathbb{R}$:

$$
f(x) = x + \int\limits_0^x f(t)\mathrm{dt}
$$

#### Example 4 (Involutive/Reflection Operator)
Find all functions $f:\mathbb{R}\setminus\\{0\\}\to\mathbb{R}$ that satisfy for all $x\neq 0$:

$$
f(x) + 3f\left(\frac{1}{x}\right) = x^2
$$

#### Example 5 (Shift-Dilation Hybrid Operator)
Find all polynomials $P(x)\in\mathbb{R}[x]$ such that for all $x\in\mathbb{R}$:

$$
P(2x) = P'(x)P^{\prime\prime}(x)
$$

### Solutions
#### Example 1

$$
f(x) = \ln(x) + 1
$$

#### Example 2

$$
f(x) = \frac{\ln(x)}{3} - \frac{\ln(2)}{3}
$$

#### Example 3

$$
f(x) = e^x - 1
$$

#### Example 4

$$
f(x) = \frac{3-x^4}{8x^2}
$$

#### Example 5

$$
P(x) = 0\quad\text{or}\quad P(x) = \frac{4}{9}x^3
$$
