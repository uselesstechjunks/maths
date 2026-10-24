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

When dealing with limits over integrals involving a sequence of functions, it's tempting to swap the integrals and limits to make things easier. 

Let's assume that we have a sequence of functions $(f_n(x))_{n=0}^\infty$, $f_n:F\to\mathbb{R}$ with $F$ being some closed set. The quantity we're interested in is 

$$
\lim\limits_{n\to\infty}\left(\int\limits_0^t f_n(x)\mathrm{dx}\right)
$$

If we invented $s_n(t)=\int\limits_0^t f_n(x)\mathrm{dx}$, then this is just a normal sequential limit

$$
\lim\limits_{n\to\infty} s_n(t)
$$

Let's have the sequence converging towards a limit. That is, let there be some $f:F\to\mathbb{R}$ such that we have $f_n\to f$ as $n\to\infty$.

To define this limit, let's ensure that it converges to $f$ for every point in the domain.

$$
\forall x\in\mathbb{R}, \lim\limits_{n\to\infty} f_n(x)=f(x)
$$

What we want is to see whether swapping the limit and integral works, so that we are allowed to do this:

$$
\lim\limits_{n\to\infty}\left(\int\limits_0^t f_n(x)\mathrm{dx}\right)\overset{?}{=}\int\limits_0^t\left(\lim\limits_{n\to\infty} f_n(x)\right)\mathrm{dx}=\int\limits_0^tf(x)\mathrm{dx}
$$

### An Example
When would we have such a situation? A useful example is the $\log$-series expansion (or, any power series expansion). The trick seems to work here.

Let's start with the power series expansion. This formula can easily be proven by algebra. If we start with $S=\sum_{n=0}^\infty x^n$ for $\vert x\vert < 1$, we have $Sx=S+1\implies S=\frac{1}{1-x}$.

This can immediately help recover the log-series. Integrating both sides we get

$$
\int\limits_0^t\frac{1}{1-x}\mathrm{dx}=\int\limits_0^t\left(\sum_{n=0}^\infty x^n\right)\mathrm{dx}
$$

Our function sequence here is made up by the partial sums $f_n(x)=\sum_{k=0}^nx^k$. With this notation, $f(x)=\lim\limits_{n\to\infty} f_n(x)$. 

So what we have here can be written as

$$
\int\limits_0^t\frac{1}{1-x}\mathrm{dx}=\int\limits_0^t\left(\lim\limits_{n\to\infty}f_n(x)\right)\mathrm{dx}
$$

Assuming we can push the integral through the limit, we have

$$
\int\limits_0^t\frac{1}{1-x}\mathrm{dx}=\lim\limits_{n\to\infty}\left(\int\limits_0^t\left(\sum_{k=0}^nx^k\right)\mathrm{dx}\right)
$$

Using linearity of integral (it's a finite number of terms), we have

$$
\left[\ln(1-x)\right]_ 0^t=\lim\limits_{n\to\infty}\sum_{k=0}^n\left(\int\limits_0^tx^k\mathrm{dx}\right)=\lim\limits_{n\to\infty}\sum_{k=0}^n\left[\frac{x^{k+1}}{k+1}\right]_0^t=\lim\limits_{n\to\infty}\sum_{k=0}^n\frac{t^{k+1}}{k+1}=\sum_{k=0}^\infty\frac{t^{k+1}}{k+1}
$$

This gives out familiar series

$$
\ln(1-t)=t+\frac{t^2}{2}+\frac{t^3}{3}+\cdots
$$

### Another Example
We can use this for finding complicated series expansions, for example $\arctan(x)$ by rearranging

$$
\frac{1}{1+x^2}=\frac{1}{1-(-x^2)}=1+(-x^2)+(-x^2)^2+\cdots=\sum_{n=0}^\infty(-1)^n x^{2n}
$$

and integrating both sides from $0$ to $x$, swapping the integral and the limits similarly to obtain

$$
\arctan(x)=\sum_{n=0}^\infty(-1)^n\frac{x^{2n+1}}{2n+1}
$$

### A Counterexample
Before we get carried away, let's look at another one where this breaks down.

Let $f_n=nxe^{-nx^2}$ forming our sequence with $f_n:[0,1]\to\mathbb{R}$. For the limit, we can check this case by case.

#### Case 1
For $x=0$, $f_n(x)=0$, and therefore the limit is $f(x)=0$.

#### Case 2
For $0<x\leq 1$, we have 

$$
\lim\limits_{n\to\infty}nxe^{-nx^2}=\lim\limits_{n\to\infty}\frac{nx}{e^{nx^2}}
$$

which has the $+\infty/+\infty$ form. So, By L'Hopital, we get
 
$$
\lim\limits_{n\to\infty}\frac{nx}{e^{nx^2}}=\lim\limits_{n\to\infty}\frac{x}{x^2e^{nx^2}}=\frac{1}{x}\lim\limits_{n\to\infty}\frac{1}{e^{nx^2}}=0
$$

So, for every $x\in[0,1]$, we have $f_n(x)\to 0$ as $n\to\infty$.

Now, if we compute the integral,

$$
\int\limits_0^1nxe^{-nx^2}\mathrm{dx}=\frac{1}{2}\int\limits_0^1ne^{-nu}\mathrm{du}=\left[-\frac{1}{2}e^{-nu}\right]_0^1=\frac{1}{2}(1-e^{-n})
$$

Therefore

$$
\lim\limits_{n\to\infty}\left(\int\limits_0^1 f_n(x)\mathrm{dx}\right)=\lim\limits_{n\to\infty}\left(\int\limits_0^1nxe^{-nx^2}\mathrm{dx}\right)=\lim\limits_{n\to\infty}\left(\frac{1}{2}(1-e^{-n})\right)=\frac{1}{2}
$$

On the other hand, 

$$
\int\limits_0^t\left(\lim\limits_{n\to\infty} f_n(x)\right)\mathrm{dx}=\int\limits_0^t0\cdot\mathrm{dx}=0
$$

Therefore,

$$
\lim\limits_{n\to\infty}\left(\int\limits_0^t f_n(x)\mathrm{dx}\right)\neq\int\limits_0^t\left(\lim\limits_{n\to\infty} f_n(x)\right)\mathrm{dx}
$$

### What Breaks?
It has to do with how we defined the limiting function. Pointwise convergence is not sufficient for this property to hold. The functions in the example have uniform convergence. We'll expand on that in another post.
