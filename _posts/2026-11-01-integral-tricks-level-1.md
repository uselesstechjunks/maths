---
layout: post
title: "Integral Formulae: Level 1"
date: 2026-09-10
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
\int\limits_a^b f(x)\mathrm{dx}=\lim\limits_{n\to\infty}\left(h\sum\limits_{r=0}^{n-1} f(a+rh)\right)
$$

Alternatively

$$
\lim\limits_{n\to\infty}\sum\limits_{r=1}^{pn}\frac{1}{n}f\left(\frac{r}{n}\right)=\int\limits_{\alpha=\lim\limits_{n\to\infty}\frac{r}{n}\rvert_{r=1}}^{\beta=\lim\limits_{n\to\infty}\frac{r}{n}\rvert_{r=pn}}f(x)\mathrm{dx}=\int\limits_0^p f(x)\mathrm{dx}
$$

#### General Properties
$$
\begin{align}
\quad\int\limits_a^b f(x)\mathrm{dx}&=-\int\limits_b^a f(x)\mathrm{dx} \\
\quad\int\limits_a^b f(x)\mathrm{dx}&=\int\limits_a^c f(x)\mathrm{dx}+\int\limits_c^b f(x)\mathrm{dx}\quad\textrm{[usefor for piecewise continuous]} \\
\quad\int\limits_a^b f(x)\mathrm{dx}&=\int\limits_a^b f(a+b-x)\mathrm{dx}\quad\textrm{[King's formula]} \\
\quad\int\limits_0^b f(x)\mathrm{dx}&=\int\limits_0^{b/2} f(x)\mathrm{dx}+\int\limits_0^{b/2} f(b-x)\mathrm{dx} \\
\quad\int\limits_{-b}^b f(x)\mathrm{dx}&=\int\limits_0^b f(x)\mathrm{dx}+\int\limits_0^b f(-x)\mathrm{dx}\\
\quad\int\limits_a^b f(x)\mathrm{dx}&=(b-a)\int\limits_0^1 f((b-a)x+a)\mathrm{dx}&
\end{align}
$$

#### Periodic Functions
For periodic functions with period $T$

$$
\begin{align}
\int\limits_a^{a+nT}f(x)\mathrm{dx}&=n\int\limits_0^T f(x)\mathrm{dx},\quad n\in\mathbb{Z} \\
\int\limits_{a+nT}^{b+nT} f(x)\mathrm{dx}&=\int\limits_a^b f(x)\mathrm{dx},\quad n\in\mathbb{Z} \\
\int\limits_{a+mT}^{b+nT} f(x)\mathrm{dx}&=(n-m)\int\limits_0^T f(x)\mathrm{dx},\quad n,m\in\mathbb{Z}
\end{align}
$$

#### Leibnitz Rule
For a function 

$$
F(x)=\int\limits_{a(x)}^{b(x)} f(x,t)\mathrm{dt}
$$

differentiating with respect to $x$, we get

$$
F'(x)=\int\limits_{a(x)}^{b(x)}\frac{\partial}{\mathrm{\partial x}}f(x,t)\mathrm{dt}+\left[f(x,t)\frac{\mathrm{dt}}{\mathrm{dx}}\right]_{t=a(x)}^{t=b(x)}
$$

When $a(x)=a$ and $b(x)=b$ are constants:

$$
F'(x)=\int\limits_{a}^{b}\frac{\partial}{\mathrm{\partial x}}f(x,t)\mathrm{dt}
$$

### Solutions
