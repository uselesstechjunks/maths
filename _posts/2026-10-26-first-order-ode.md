---
layout: post
title: "First-Order Ordinary Differential Equations"
date: 2026-10-26
slug: first-order-ode
tags:
  - ordinary differential equations
  - differential equations
  - bag of tricks
---
Let's consider first-order ordinary differential equations (ODEs). For a quick reminder, a general equation of an ODE involving $x$ and $y(x)$ of order $n$ looks like this

$$
F(x, y, \frac{dy}{dx}, \frac{d^2y}{dx^2}, \cdots, \frac{d^ny}{dx^n})=0
$$

First-order ODEs are typically presented in (or can be rearranged into) this form:

$$
\frac{dy}{dx}=f(x,y)
$$

A closed form solution, when it exists, sometimes has the form:

$$
h(x,y) = c
$$

instead of an explicit form for $y(x)$ (which is essentially a special case of the above).

In this article we start with some key patterns to look for in $f(x,y)$, discuss ways to identify these, and then lay out ways to go about solving them. Note that although there are quite a few identifiable patterns and a few tricks to identify them, every pattern can be mapped to essentially 3 core solving mechanisms [^1].

### Patterns
#### Separable
This is the simplest of all, where the function splits neatly in the ratio format:

$$
\frac{dy}{dx}=f(x,y)=\frac{p(x)}{q(y)}
$$

#### Homogeneous
This function can be rearranged as a function of $y/x$:

$$
\frac{dy}{dx}=f(x,y)=r(y/x)
$$

#### Exact
This one provides the differential of the solution function $h$ directly.

$$
\frac{dy}{dx}=f(x,y)=-\frac{\partial h/\partial x}{\partial h/\partial y}
$$

#### Linear
It is linear in $y$

$$
\frac{dy}{dx}=f(x,y)=p(x)y+q(x)
$$

### Identifying The Patterns
Apart from the exact-case, the rest are easily identifiable. For the exact-case, there are essentially three checks we can do to ensure if we're dealing with this pattern.

Assuming the solution is total differentiable (that is, not only does the partial derivatives exist, they are continuous as well), the symmetry in second derivative holds. To check, we start by arranging our equation into this form:

$$
\frac{dy}{dx}=-\frac{s(x,y)}{t(x,y)}
$$

If this was indeed in the form the exact-pattern desires, then one of these two things must be true. It's either the following:

$$
\frac{\partial h}{\partial x}=s(x,y), \frac{\partial h}{\partial y}=t(x,y)
$$

or, it might have happened that there was a common factor which got lost due to the ratio:

$$
\frac{dy}{dx}=-\frac{s(x,y)c(x,y)}{t(x,y)c(x,y)}
$$

with 

$$
\frac{\partial h}{\partial x}=s(x,y)c(x,y), \frac{\partial h}{\partial y}=t(x,y)c(x,y)
$$

#### First Test for Exact
If it's the first case, we can identify it by testing for the following:

$$
\frac{\partial s}{\partial y}=\frac{\partial t}{\partial x}\left[\because \frac{\partial^2 h}{\partial y\partial x}=\frac{\partial^2 h}{\partial x\partial y}\right]
$$

#### Second Test for Exact
If the first test fails, identifying $c(x,y)$ in general is typically hard.

#### Third Test for Exact

### Solving Tricks
#### Leverage Symmetry
The function shows a constant behaviour along radial lines outward of origin. [TODO]

#### 

#### Laplace Transform

[^1]: There would be other ways as well, which I do not cover here.
