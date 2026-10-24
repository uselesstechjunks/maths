---
layout: post
title: "Counterexample: Swapping Limits and Integrals"
date: 2026-10-24
slug: counterexample-swapping-limits-integrals
tags:
  - analysis
  - calculus
  - series
  - power series
---

When dealing with integrals over a sequence of functions, it's often tempting to swap the integrals and limits to make things easier. To make things concrete, let's assume that we have a sequence of functions $(f_n(x))_{n=0}^\infty$, and the quantity we're interested in is 

$$
\lim\limits_{n\to\infty}\int_0^t f_n(x)\mathrm{dx}
$$

### An Example
When would we have such a situation? A useful example is the $\log$-series expansion (or, any power series expansion). The trick typically seem to work here.

### A Counterexample
Now, let's look at another one where this breaks down. Let $f_n=ne^{-nx^2}$ forming our sequence.
