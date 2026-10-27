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
Let's consider first-order ordinary differential equations (ODEs). As a reminder, an ODE involving $x$ and $y(x)$ of order $n$ in general form looks like this:

$$
F(x, y, \frac{dy}{dx}, \frac{d^2y}{dx^2}, \cdots, \frac{d^ny}{dx^n})=0
$$

First-order ODEs are typically presented in (or can often be rearranged into) this form:

$$
\frac{dy}{dx}=f(x,y)
$$

[TODO: add a note on implicit equations]

A closed-form solution, when it exists, sometimes has the form of a level curve:

$$
h(x,y) = c
$$

instead of an explicit form for $y=g(x)$ (which is a special case of the above, since $h(x,y)=y-g(x) $). 

Unless we know what $c$ is, it describes a family of solutions. The fact that we have only one parameter here is because we're dealing with a first-order equation.

The ODE is a description of a vanishing differential of this function $h$ (that is, $dh=0$), and therefore represents tangent lines to these level curves for tiny changes. The form we see them in becomes easier to grasp observing the following:

$$
dh = Dh\left[
\begin{pmatrix}
\mathrm{dx} \\
\mathrm{dy} \\
\end{pmatrix}
\right]=\nabla h\cdot
\begin{pmatrix}
\mathrm{dx} \\
\mathrm{dy} \\
\end{pmatrix}=\frac{\partial h}{\partial x}\mathrm{dx}+\frac{\partial h}{\partial y}\mathrm{dy}=0
$$

with $D:h\in C^1(\mathbb{R}^2,\mathbb{R})\mapsto Dh\in\mathcal{L}(\mathbb{R}^2,\mathbb{R})$, where $Dh$ is the derivative of $h$ and $\mathcal{L}(\mathbb{R}^2,\mathbb{R})$ is the space of bounded linear maps from $\mathbb{R}^2$ to $\mathbb{R}$.[^1]

### Solving First-Order ODEs
The simple looking first-order ODE does not have a general solution. In some cases, however, it is possible to find the solution analytically. These special cases are identifiable by the specific forms it takes.

In this post we start with some key patterns to look for in $f(x,y)$ which makes them solvable. We discuss ways to identify these patterns, and then lay out ways to go about solving them. Note that although there are quite a few patterns and a few tricks to identify them, every pattern can be mapped to essentially a handful of core solving mechanisms [^2].

### Patterns
#### Separable
This is the simplest of all, where the function splits neatly into a ratio format:

$$
\frac{dy}{dx}=f(x,y)=\frac{p(x)}{q(y)}
$$

#### Homogeneous
This function can be rearranged as a function of $y/x$:

$$
\frac{dy}{dx}=f(x,y)=r\left(\frac{y}{x}\right)
$$

#### Linear
It is linear in $y$

$$
\frac{dy}{dx}=f(x,y)=p(x)y+q(x)
$$

#### Exact
This one is described in terms of the partials of the solution $h$.

$$
\frac{dy}{dx}=f(x,y)=-\frac{\partial h/\partial x}{\partial h/\partial y}
$$

### Identifying The Patterns
Apart from the last one, the rest are easily identifiable. For the exact-case, there are essentially three tests we do to check if we're dealing with this pattern.

Since we assume that the solution is total differentiable ($h\in C^1(\mathbb{R}^2,\mathbb{R}) $), not only do the partial derivatives exist, they are continuous as well. In this case, the second partial derivatives are equal (question: how do we see why that is?).

To check whether this holds, we start by arranging our equation into the form:

$$
\frac{dy}{dx}=-\frac{s(x,y)}{t(x,y)}
$$

If this was indeed in the form the exact-pattern desires, then one of these two things must be true. It's either the following:

$$
\frac{\partial h}{\partial x}=s(x,y), \frac{\partial h}{\partial y}=t(x,y)
$$

or, it might have happened that there was a common factor $c(x,y)$ which got cancelled in the ratio form (not due to our rearrangement, but because the problem we're solving never showed it):

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
If the first test fails, identifying $c(x,y)$ in general is tough. So, if possible, we rely purely on muscle memory as we look for seen patterns, such as

$$
\begin{align}
\frac{y\mathrm{dx}-x\mathrm{dy}}{y^2} &=& d\left(\frac{y}{x}\right) \\
\frac{y\mathrm{dx}-x\mathrm{dy}}{x^2+y^2} &=& d\left(\arctan\left(\frac{y}{x}\right)\right) \\
\frac{y\mathrm{dx}-x\mathrm{dy}}{xy} &=& d\left(\ln\left(\frac{y}{x}\right)\right) \\
\end{align}
$$

or

$$
\begin{align}
2(x\mathrm{dx}+y\mathrm{dy}) &=& d(x^2+y^2) \\
x\mathrm{dy}+y\mathrm{dx} &=& d(xy)
\end{align}
$$

which often carries a hint of what $c(x,y)$ might make sense. Once we identify $c$, we can reuse the tests for exactness.

#### Third Test for Exact
In the special case where $c$ is a function of $x$ alone, we can find it via a trick.

### Solving Tricks
#### Leverage Symmetry
The function shows a constant behaviour along radial lines outward of origin. [TODO]

#### Integrating Factors

[^1]: See this post for some clarifications on the notations I used here.
[^2]: I'll keep this post updated with other patterns and solving techniques as I learn more about them.
