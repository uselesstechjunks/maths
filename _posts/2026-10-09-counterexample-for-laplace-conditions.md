---
layout: post
title: "On Non-Necessity of Laplace Transform Conditions"
date: 2026-10-14
slug: linear-structures
tags:
  - transforms
  - calculus
  - laplace transform
---
Piecewise continuity and exponential order is described as a sufficient condition for a Laplace transform to exist. 

The first condition ensures that the definite integral exists:

$$
I_s(\beta)=\int_0^\beta e^{-st}f(t)\mathrm{dt}
$$ 

while the second condition ensure that the improper integral 

$$
\lim\limits_{\beta\to\infty}I_s(\beta)
$$ 

converges. Let's unwrap this. The function $f$ has exponential order when we can find $M>0$ and $c>0$ such that $\lvert f(t)\rvert \leq Me^{ct}$. This implies

$$
\frac{\lvert f(t)\rvert}{e^{st}}\leq\frac{Me^{ct}}{e^{st}}=Me^{-(s-c)t}
$$

Let's integrate the right hand side.

$$
\int\limits_0^\infty Me^{-(s-c)t}\mathrm{dt}=\lim\limits_{\beta\to\infty}\left(\int\limits_0^\beta Me^{-(s-c)t}\mathrm{dt}\right)=\lim\limits_{\beta\to\infty}M\left[\frac{e^{-(s-c)t}}{-(s-c)}\right]_0^\beta=\lim\limits_{\beta\to\infty}M\frac{1-e^{-(s-c)\beta}}{s-c}
$$

So, as long as $s> c$, this evaluates to $\frac{M}{s-c}$, and therefore, integrating the left converges for all values of $s$ (squeeze theorem).

It is, however, not strictly necessary. A counterexample is $f(t)=t^{1/2}$ which has a discontinuity at $t=0$ (and therefore is not continuous on the domain of integration $[0,\infty)$.

A Laplace transform for this, however, exists, and it's related to the Gamma function and Gaussian integrals.
