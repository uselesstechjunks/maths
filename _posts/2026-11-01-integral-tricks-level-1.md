---
layout: post
title: "Integral Tricks: Level 1"
date: 2026-11-01
slug: integral-tricks-level-1
tags:
  - calculus
  - single variable calculus
  - bag of tricks
  - revision
---
### Definite Integrals
#### Riemann Sum
For a function $f\in\ C([a,b],\mathbb{R})$, the definite integral is defined as the limit of the Riemann sum

$$
\int\limits_a^b f(x)\mathrm{d}x=\lim\limits_{n\to\infty}\left(h\sum\limits_{r=0}^{n-1} f(a+rh)\right)=\lim\limits_{n\to\infty}\left(h\sum\limits_{r=1}^n f(a+rh)\right)
$$

where 

$$
h=\frac{b-a}{n}
$$

Alternatively, $f\in\ C([0,p],\mathbb{R})$ for $p\in\mathbb{N}$,

$$
\lim\limits_{n\to\infty}\sum\limits_{r=1}^{pn}\frac{1}{n}f\left(\frac{r}{n}\right)=\int\limits_{\alpha=\lim\limits_{n\to\infty}\frac{r}{n}\rvert_{r=1}}^{\beta=\lim\limits_{n\to\infty}\frac{r}{n}\rvert_{r=pn}}f(x)\mathrm{d}x=\int\limits_0^p f(x)\mathrm{d}x
$$

#### General Properties
$$
\begin{align}
\quad\int\limits_a^b f(x)\mathrm{d}x&=-\int\limits_b^a f(x)\mathrm{d}x \\
\quad\int\limits_a^b f(x)\mathrm{d}x&=\int\limits_a^c f(x)\mathrm{d}x+\int\limits_c^b f(x)\mathrm{d}x\quad\textrm{[useful for for piecewise continuous]} \\
\quad\int\limits_a^b f(x)\mathrm{d}x&=\int\limits_a^b f(a+b-x)\mathrm{d}x\quad\textrm{[King's formula]} \\
\quad\int\limits_0^b f(x)\mathrm{d}x&=\int\limits_0^{b/2} f(x)\mathrm{d}x+\int\limits_0^{b/2} f(b-x)\mathrm{d}x \\
\quad\int\limits_{-b}^b f(x)\mathrm{d}x&=\int\limits_0^b f(x)\mathrm{d}x+\int\limits_0^b f(-x)\mathrm{d}x\\
\quad\int\limits_a^b f(x)\mathrm{d}x&=(b-a)\int\limits_0^1 f((b-a)x+a)\mathrm{d}x\quad\textrm{[change-of-variables identity]}
\end{align}
$$

#### Periodic Functions
For periodic functions with period $T$

$$
\begin{align}
\int\limits_a^{a+nT}f(x)\mathrm{d}x&=n\int\limits_0^T f(x)\mathrm{d}x,\quad n\in\mathbb{Z} \\
\int\limits_{a+mT}^{b+nT} f(x)\mathrm{d}x&=(n-m)\int\limits_0^T f(x)\mathrm{d}x+\int\limits_a^b f(x)\mathrm{d}x,\quad n,m\in\mathbb{Z}
\end{align}
$$

#### Leibniz Rule
For a function $f$ and its partial derivative with respect to $x$ are continuous, and $a,b$ are differentiable.

$$
F(x)=\int\limits_{a(x)}^{b(x)} f(x,t)\mathrm{d}t
$$

differentiating with respect to $x$, we get

$$
F'(x)=\int\limits_{a(x)}^{b(x)}\frac{\partial f(x,t)}{\partial x}\mathrm{d}t+\left[f(x,t)\frac{\mathrm{d}t}{\mathrm{d}x}\right]_{t=a(x)}^{t=b(x)}
$$

When $a(x)=a$ and $b(x)=b$ are constants:

$$
F'(x)=\int\limits_{a}^{b}\frac{\partial f(x,t)}{\partial x}\mathrm{d}t
$$
