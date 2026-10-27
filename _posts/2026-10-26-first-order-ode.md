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

It is typically written with $p(x)$ on the left hand side. When we solve it, it would become clear why it is preferred this way:

$$
\frac{dy}{dx}+p(x)y=q(x)
$$

#### Exact
This one is described in terms of the partials of the solution $h$.

$$
\frac{dy}{dx}=f(x,y)=-\frac{\partial h/\partial x}{\partial h/\partial y}
$$

### Identifying The Patterns
Apart from the last one, the rest are easily identifiable. For the exact-case, there are essentially three tests.

Since we assume that the solution is total differentiable ($h\in C^1(\mathbb{R}^2,\mathbb{R}) $), the partial derivatives are continuous, and the second partial derivatives are equal (why?).

$$
\frac{\partial^2 h}{\partial y\partial x}=\frac{\partial^2 h}{\partial x\partial y}
$$

To check whether this holds, we start by arranging our equation into the form:

$$
\frac{dy}{dx}=-\frac{s(x,y)}{t(x,y)}
$$

If this was indeed in the form the exact-pattern desires, then one of these two things must be true. It's either the following:

$$
\begin{align}
\frac{\partial h}{\partial x}=s(x,y)\\ 
\frac{\partial h}{\partial y}=t(x,y)
\end{align}
$$

or, it might have happened that there was a common factor $\rho(x,y)$ which never showed up due to the ratio form:

$$
\frac{dy}{dx}=-\frac{s(x,y)\rho(x,y)}{t(x,y)\rho(x,y)}
$$

with 

$$
\begin{align}
\frac{\partial h}{\partial x}=s(x,y)\rho(x,y)\\
\frac{\partial h}{\partial y}=t(x,y)\rho(x,y)\end{align}
$$

#### First Test for Exact
If it's the first case, we can identify it by testing for the following:

$$
\frac{\partial s}{\partial y}=\frac{\partial t}{\partial x}
$$

#### Second Test for Exact
If the first test fails, identifying $\rho(x,y)$ in general is tough. If $\rho$ happens to be a function of $x$ alone, we can test for it and find it via a trick. I'll just mention the test here. I've added the derivation for the trick for finding it in full detail in the appendix.

Since we must have computed $\partial s/\partial y$ and $\partial t/\partial x$ already for the first test, we now compute the following and see if we can get rid of $y$ completely:

$$
\frac{\partial s/\partial y-\partial t/\partial x}{t}=g(x)
$$

#### Third Test for Exact
If the second test fails as well, then $\rho$ is function of both. In that case, we rely purely on muscle memory as we look for known patterns. A few of them appear frequently once we rearrange a bit:

$$
\begin{gather}
\frac{y\mathrm{dx}-x\mathrm{dy}}{y^2}=d\left(\frac{y}{x}\right),\quad \frac{x\mathrm{dy}-y\mathrm{dx}}{x^2}=d\left(\frac{x}{y}\right) \\
\frac{y\mathrm{dx}-x\mathrm{dy}}{x^2+y^2}=d\left(\arctan\left(\frac{y}{x}\right)\right) \\
\frac{y\mathrm{dx}-x\mathrm{dy}}{xy}=d\left(\ln\left(\frac{y}{x}\right)\right) \\
\end{gather}
$$

or

$$
\begin{gather}
2(x\mathrm{dx}+y\mathrm{dy})=d(x^2+y^2) \\
x\mathrm{dy}+y\mathrm{dx}=d(xy)
\end{gather}
$$

These often carries a hint of what $\rho(x,y)$ might make sense. Once we identify $\rho$, we can reuse the double partial tests for exactness.

### Solving Tricks
#### Separable
If the equation is separable, we can solve directly 

$$
\int q(y)\mathrm{dy}=\int p(x)\mathrm{dx}+c
$$

#### Homogeneous: Leverage Symmetry
Homogeneous functions stay constant along radial lines as it depends only on $y/x$. Therefore, we can reparameterise this as a function of the slope of lines in the $y=mx$ form. 

A point worth clarifying is that $m$ is not a constant. We have a family of lines, where $m$ is a function of $x$ ($m=m(x)=y(x)/x$).

To solve, we compute the differential and set it to $r(m)$:

$$
\frac{\mathrm{dy}}{\mathrm{dx}}=\frac{\mathrm{dm}}{\mathrm{dx}}x+m=r(m)
$$

which turns out to be a separable ODE for $m$:

$$
\frac{\mathrm{dm}}{\mathrm{dx}}=\frac{r(m)-m}{x}
$$

#### Exact: Integrating through Partial
Once we have solved the ODE for $\rho$, we end up with 2 equations that must hold simultaneously:

$$
\frac{\partial h}{\partial x}=\rho s;\quad \frac{\partial h}{\partial y}=\rho t
$$

The trick to solve these is to note that 

$$
\frac{\partial h}{\partial x}=\rho s \Longleftrightarrow  h=\left(\int\rho s\mathrm{dx}\right)+g(y)
$$

which implies

$$
\frac{\partial}{\partial y}\left(\int\rho s\mathrm{dx}\right)+g'(y)=\rho t
$$

We can find $g(y)$ from this (often much more manageable form than this one suggest when solving with actual equations):

$$
g(y)=\int g'(y)\mathrm{dy}=\int\left(\rho t-\frac{\partial}{\partial y}\left(\int\rho s\mathrm{dx}\right)\right)\mathrm{dy}
$$

The final solution is

$$
h=\int\rho s\mathrm{dx}+\int\left(\rho t-\frac{\partial}{\partial y}\left(\int\rho s\mathrm{dx}\right)\right)\mathrm{dy}
$$

#### Linear: Mapping to to Exact
We first note that this can be rearranged in the form

$$
\frac{dy}{dx}=-\frac{p(x)y-q(x)}{1}=-\frac{s(x,y)}{t(x,y)}
$$

with $s=py-q$ and $t=1$.

Now, if we run the second test for exactness, we get

$$
\frac{\partial s/\partial y-\partial t/\partial x}{t}=p
$$

and hence we obtain our integrating factor as $\rho=e^{\int p\mathrm{dx}}$.

However, due to the fact that it's linear in $y$, solving this turns out to be simpler. If we multiply the integrating factor, we end up with an eqution involving a direct differential:

$$
\frac{dy}{dx}e^{\int p\mathrm{dx}}+ype^{\int p\mathrm{dx}}=qe^{\int p\mathrm{dx}}
$$

which rearranges into

$$
\frac{d}{dx}\left(ye^{\int p\mathrm{dx}}\right)=qe^{\int p\mathrm{dx}}
$$

Solving it produces

$$
y=e^{-\int p\mathrm{dx}}\left(\int qe^{\int p\mathrm{dx}}\mathrm{dx+c}\right)
$$

### Appendix
#### Deriving the Test Condition for Integrating Factors
Let's start with the premise that $\rho=\rho(x)$. We note that for the second partial derivative symmetry to hold, we must need that

$$
\frac{\partial}{\partial y}(\rho s)=\frac{\partial}{\partial x}(\rho t)
$$

Expanding, we get

$$
\frac{\partial \rho}{\partial y}s+\rho\frac{\partial s}{\partial y}=\frac{\partial \rho}{\partial x}t+\rho\frac{\partial t}{\partial x}
$$

Since $\rho$ is only function of $x$, we have $\partial \rho/\partial y=0$ and $\frac{\partial \rho}{\partial x}=\frac{\mathrm{d\rho}}{\mathrm{dx}}$. Therefore the condition we must need to satisfy is

$$
\rho\frac{\partial s}{\partial y}=\frac{\mathrm{d\rho}}{\mathrm{dx}}t+c\frac{\partial t}{\partial x}
$$

and, with a rearrangement

$$
\frac{\mathrm{d\rho}}{\rho}=\frac{\partial s/\partial y-\partial t/\partial x}{t}
$$

If the right side turns out to be in the form of $g(x)$, then we can solve for this and find $\rho$ as it has the form of a fully separable ODE.

$$
\frac{\mathrm{d\rho}}{\rho}=g(x)\implies \ln\lvert\rho\rvert=\int g(x)\mathrm{dx}\implies\rho=e^{\int g(x)\mathrm{dx}}
$$

[^1]: See this post for some clarifications on the notations I used here.
[^2]: I'll keep this post updated with other patterns and solving techniques as I learn more about them.
