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
Laplace transform is useful for evaluating difficult integrals of certain forms. In this post, I'll discuss 2 main tricks, and a couple of examples where we take it to town. The second example is particularly satisfying as it required me to call upon the big guns - partial fractions, Laplace transform, Feynman's trick (differentiating under the integral sign/Leibniz rule), and ODE. I also noted one which should be solvable by the same tricks discussed here, and an example of another which looks similar but can't be solved with these.

### Bag of tricks
{% assign related_post = site.posts | where: "slug", "laplace-derivative-integral" | first %}

The first of the trick comes from the integral of the transform (this [post]({{ related_post.url | relative_url }}) contains some details on how to derive this result from the first principle).

$$
\int\limits_0^\infty \frac{f(t)}{t}\mathrm{dt}=\int\limits_0^\infty F(\sigma)\mathrm{d\sigma}
$$

The second trick generalises this, as the first trick is a special case involving the identify function (see below).

For this, in the first step, we need to identify a function in the integral that is a recognisable Laplace transform of some function. For example, the integrals it applies to have the following form:

$$
\int\limits_0^\infty F(x)g(x)\mathrm{dx}
$$

We expand the Laplace integral formula:

$$
\int\limits_0^\infty F(x)g(x)\mathrm{dx}=\int\limits_0^\infty\left(\int\limits_0^\infty e^{-xt}f(t)\mathrm{dt}\right)g(x)\mathrm{dx}
$$

Now, for the next step, we swap the order of integrals using Fubini's theorem:

$$
\int\limits_0^\infty\left(\int\limits_0^\infty e^{-xt}f(t)\mathrm{dt}\right)g(x)\mathrm{dx}=\int\limits_0^\infty\left(\int\limits_0^\infty e^{-xt}g(x)\mathrm{dx}\right)f(t)\mathrm{dt}=\int\limits_0^\infty G(t)f(t)\mathrm{dt}
$$

Some notes:
- We have to be careful about when the swap is allowed. There are some nuances. See [[link]] for some corner cases.
- To see why the first trick is a special case of this one, identifying that $1/x$ is the Laplace transform of $f(x)=1$ helps.

### Dirichlet Integral
The first example we'll discuss is a famous one

$$
\int\limits_0^\infty\frac{\sin(x)}{x}\mathrm{dx}
$$

The first trick can be directly used here to obtain the result as shown here:

$$
\int\limits_0^\infty \frac{\sin(x)}{x}\mathrm{dx}=\int\limits_0^\infty \frac{\mathrm{ds}}{s^2+1}=\frac{\pi}{2}
$$

### A Tricky Integral
This one asks us to evaluate 

$$
\int\limits_0^\infty\frac{\sin(x)}{x(x^2+1)}\mathrm{dx}
$$

Hints:
First, apply partial fraction to obtain

$$
\frac{\sin(x)}{x(x^2+1)}=\left(\frac{1}{x}-\frac{x}{x^2+1}\right)\sin(x)
$$

The first part is a repeat from the Dirichlet integral.

For the second part, we can apply the second trick here to get rid of the $x$ from the numerator.

$$
I=\int\limits_0^\infty\frac{x\sin(x)}{x^2+1}\mathrm{dx}=\int\limits_0^\infty\sin(x)\left(\int\limits_0^\infty e^{-xy}\cos(y)\mathrm{dy}\right)\mathrm{dx}=\int\limits_0^\infty\cos(y)\left(\int\limits_0^\infty e^{-xy}\sin(x)\mathrm{dx}\right)\mathrm{dy}=\int\limits_0^\infty\frac{\cos(x)}{x^2+1}\mathrm{dx}
$$

Now, we introduce a parameter to apply the Feynman's trick.

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

What we have here is a separable first-order ODE, which can be solved directly.

$$
\int\frac{I'(t)}{I(t)}=-1\implies I(t)=Ce^{-t}
$$

Using the fact that we have $I(0)=\pi/2$, we evaluate the constant $C=\pi/2$, and therefore 

$$
I(1)=\int\limits_0^\infty\frac{\sin(x)}{x(x^2+1)}\mathrm{dx}=\frac{\pi}{2e}
$$

Putting all of these together, we get

$$
\frac{\pi}{2}\left(1-\frac{1}{e}\right)
$$

### A Few Follow Ups
These should be doable using the tricks here. I'll edit this post when I splve these.

$$
\int\limits_0^\infty \frac{\sin^2(x)}{x^2}\mathrm{dx}=\frac{\pi}{2}
$$

### Lobachevsky Dirichlet Integral
This one looks similar but cannot be solved using these tricks. We need Lobachevsky's Dirichlet integral formula which I'll cover in a separate post.

$$
\int\limits_0^\infty \frac{\sin(x)}{x(1+\cos^2(x))}\mathrm{dx}=\frac{\pi}{2\sqrt{2}}
$$
