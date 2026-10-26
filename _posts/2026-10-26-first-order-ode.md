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
Let's consider first-order ordinary differential equations (ODEs). For a quick reminder, a generation equation of an ODE involving $x$ and $y(x)$ of order $n$ looks like this

$$
F(x, y, \frac{dy}{dx}, \frac{d^2y}{dx^2}, \cdots, \frac{d^ny}{dx^n})=0
$$

The general first-order ODE has the form:

$$
\frac{dy}{dx}=f(x,y)
$$

and a closed form solution, when it exists, often has the form:

$$
h(x,y) = c
$$

instead of an explicit form for $y(x)$.

In this article we start with some key patterns to look for in $f(x,y)$, discuss ways to identify these, and then lay out ways to go about solving them. Note that although there are quite a few identifiable patterns, every pattern can be mapped to essentially 2 key solving tricks. There would be other ways as well, which I do not cover here.

To make this more useful for myself when I revisit this later, I'll lay out the patterns and the solving techniques first, without revealing which technique applies for which pattern. I'll expand on the connection afterwards.

### Patterns
#### Separable
This is the simplest of all.

$$
\frac{dy}{dx}=f(x,y)=\frac{p(x)}{q(y)}
$$

We might very well have it the other way around:

$$
\frac{dy}{dx}=f(x,y)=\frac{p(y)}{q(x)}=\frac{1/q(x)}{1/p(y)}
$$

#### Homogeneous
The function shows a constant behaviour along radial lines outward of origin.

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

### Solving Tricks
