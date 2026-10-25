---
layout: post
title: "Derivatives and Integrals involving Laplace Transform"
date: 2026-10-09
slug: laplace-derivative-integral
tags:
  - integral transform
  - laplace transform
  - differential equations
  - calculus
---
Derivatives and integrals involving Laplace transform are interesting as they can be used in many different situations, including solving ODEs or tricky integrals. I'll create other posts on some of those cool applications later. In this post, I'm going to derive them from the first principle. When working on these, I found two of these formulas quite easy. For the other two, I had a tough time. I might make further edits to this post if I find something that makes it easy for me.

So let's start.

Quick context: We have a function $f:x\in X\mapsto f(x)\in\mathbb{R}$. The Laplace transform, through its exponential kernel, converts this to a different function $F:s\in S\mapsto F(s)\in\mathbb{R}$ via an improper integral as follows:

$$
F(s)=\mathcal{L}\{f(t)\}=\int\limits_0^\infty e^{-st}f(t)\mathrm{dt}
$$

Couple of things to note here: 
- The kernel is the bit that connects the source domain and the target domain. It is exponent on both.
- The kernel is symmetric as $e^{-st}=e^{-ts}$

Hook:
