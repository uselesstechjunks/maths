---
layout: post
title: "Dirichlet, Laplace, and Feynman"
date: 2026-10-25
slug: dirichlet-laplace-feynman
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

The second trick generalises this, as the first trick is a special case involving the identify function (see below).

In the first step, we need to identify a function in the integral that is a recognisable Laplace transform of some know function. For example, if we have integrals in the form

$$
\int\limits_0^\infty F(x)g(x)\mathrm{dx}
$$

we expand the Laplace integral formula

$$
\int\limits_0^\infty F(x)g(x)\mathrm{dx}=\int\limits_0^\infty\left(\int\limits_0^\infty e^{-xt}f(t)\mathrm{dt}\right)g(x)\mathrm{dx}
$$

Now, for the next step, we swap the order of integrals using Fubini's theorem.

$$
\int\limits_0^\infty\left(\int\limits_0^\infty e^{-xt}f(t)\mathrm{dt}\right)g(x)\mathrm{dx}=\int\limits_0^\infty\left(\int\limits_0^\infty e^{-xt}g(x)\mathrm{dx}\right)f(t)\mathrm{dt}=\int\limits_0^\infty G(t)f(t)\mathrm{dt}
$$

Some notes:
- We have to be careful about when that's allowed, as there are some nuances. See [[link]] for some corner cases.
- To see why the first trick is a special case of this one, identifying that $1/x$ is the Laplace transform of $f(x)=1$ helps.

### Dirichlet Integral
$$
\int\limits_0^\infty\frac{\sin(x)}{x}\mathrm{dx}
$$

The integral rule can be directly used here to obtain the result as follows

$$
\int\limits_0^\infty \frac{\sin(x)}{x}\mathrm{dx}=\int\limits_0^\infty \frac{\mathrm{ds}}{s^2+1}=\frac{\pi}{2}
$$

### A Tricky Integral
$$
\int\limits_0^\infty\frac{\sin(x)}{x(x^2+1)}\mathrm{dx}
$$

Hint:
First, apply partial fraction to obtain

$$
\frac{\sin(x)}{x(x^2+1)}=\left(\frac{1}{x}-\frac{x}{x^2+1}\right)\sin(x)
$$

The first part is a repeat from Dirichlet integral.

For the second part, we can apply the second trick here to get rid of the $x$ from the numerator.

$$
I=\int\limits_0^\infty\frac{x\sin(x)}{x^2+1}\mathrm{dx}=\int\limits_0^\infty\sin(x)\left(\int\limits_0^\infty e^{-xy}\cos(y)\mathrm{dy}\right)\mathrm{dx}=\int\limits_0^\infty\cos(y)\left(\int\limits_0^\infty e^{-xy}\sin(x)\mathrm{dx}\right)\mathrm{dy}=\int\limits_0^\infty\frac{\cos(x)}{x^2+1}\mathrm{dx}
$$

Now, we can apply Feynman's trick.

$$
I(t)=\int\limits_0^\infty\frac{\cos(tx)}{x^2+1}\mathrm{dx}=\int\limits_0^\infty\frac{x\sin(tx)}{x^2+1}\mathrm{dx}
$$

where $I(1)$ is the original integral and

$$
I(0)=\int\limits_0^\infty\frac{\mathrm{dx}}{x^2+1}=\frac{\pi}{2}
$$

Now, differentiating under the integral sign, we get

$$
I'(t)=\int\limits_0^\infty \frac{\partial }{\partial t}\left(\frac{\cos(tx)}{x^2+1}\right)\mathrm{dx}=-\int\limits_0^\infty\frac{x\sin(tx)}{x^2+1}\mathrm{dx}=-I(t)
$$

What we have here is a separable ODE, which can be solved directly.

$$
\int\frac{I'(t)}{I(t)}=-1\implies I(t)=Ce^{-t}
$$

Using the fact that we have $I(0)=\pi/2$, we evaluate the constant $C=\pi/2$, and therefore 

$$
I(1)=\int\limits_0^\infty\frac{\sin(x)}{x(x^2+1)}\mathrm{dx}=\frac{\pi}{2e}
$$

Therefore, what we have finally evaluates to

$$
\frac{\pi}{2}\left(1-\frac{1}{e}\right)
$$
