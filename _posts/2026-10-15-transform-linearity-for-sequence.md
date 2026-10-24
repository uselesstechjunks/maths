---
layout: post
title: "Extending Linearity of Transform to Sequences"
date: 2026-10-14
slug: transform-linearity-for-sequence
tags:
  - calculus
  - transforms
---
Say, we have 2 function spaces 

$$
\mathcal{F}=\{f\mid f:X\to\mathbb{R}\}, \mathcal{G}=\{g\mid g:S\to\mathbb{R}\}
$$

Let $T:\mathcal{F}\to\mathcal{G}$ be a transform between these, $T:f\mapsto g$. Some examples are:

### Derivatives
  
$$
T:f\mapsto f'
$$
  
### Integration

$$
T:f\mapsto \int\limits_0^s f(x)\mathrm{d}x
$$

### Integral transform 
With a kernel $K:S\times X\to\mathbb{R}$ for this transform

$$
T:f\mapsto \int\limits_a^b K(s,x)f(x)\mathrm{d}x
$$

Linear transforms are defined algebraically with 2 functions typically:

$$
T(\alpha f_1 + \beta f_2) = \alpha T(f_1) + \beta T(f_2) = \alpha g_1 + \beta g_2
$$

One can extend this to any finite number of terms (via induction, for example).

The question is: can we extend this to an infinite number of terms? That is, when can we say, for a "linear" transform defined as above that the following would hold?

$$
T(\sum_{n=1}^\infty \alpha_n f_n)=\sum_{n=1}^\infty \alpha_n T(f_n)
$$

Does this hold automatically or do we need some additional structure in $L$ or $\mathcal{F}$ or $\mathcal{G}$?
