---
layout: post
title: "Homogeneity and Eigenfunctions: Part 1"
date: 2026-10-28
slug: homogeneity-and-eigenfunctions-part-1
tags:
  - functional equations
  - ordinary differential equations
  - sequences
  - difference equations
  - analysis
---
Let's consider a functional equation. We are asked to find all continuous functions $f:\mathbb{R}\to\mathbb{R}$ such that

$$
f(x+2) - 5f(x+1) + 6f(x) = 0
$$

A trivial solution to this is when $f(x)=0$ for all $x\in\mathbb{R}$. However, unless we have encountered problems of this sort before, finding non-trivial solutions to this seems difficult.

To make things interesting, let's consider another one. The task is the same as before, with the equation being:

$$
f(4x) - 5f(2x) + 6f(x) = 0
$$

Let's pause for a second. The first and the second one look very similar. Its the way the inputs to these functions change is different. The first one slides $x$ by $1$ once (and then, once again) while the next one stretches $x$ by $2$ (and again).

Let's make this even more interesting by considering one that not a functional equation. Say, we have a sequence $(x_n)$ which must satisfy

$$
x_{n+2} = 5 x_{n+1} - 6 x_n,\quad x_0=1, x_1=1
$$

and the task is to find a closed form expression for $x_n$. This is known as a difference equation.

{% assign related_post = site.posts | where: "slug", "first-order-ode" | first %}

Now, for the last one of this lot, let's include a second-order homogeneous linear ODE with constant coefficients. This is a natural follow up from first-order linear ODEs I discussed in my earlier [post]({{ related_post.url | relative_url }}). Our task is to find solutions of the following:

$$
y^{\prime\prime} - 5y' - 6y = 0
$$

How do we go about solving these? Let's start with the last one as we might be familiar with the typical recipe for it. The recipe tells us that we "assume" that the solution has the form $y(x)=e^{rx}$. We proceed by differentiating first

$$
\begin{align}
y'&=re^{rx} \\
y^{\prime\prime}&=r^2e^{rx} \\
\end{align}
$$

Putting it back into the equation, the task reduces to finding the right values of $r$. So, we arrive at

$$
(r^2-5r+6)e^{rx}=0\implies (r^2-5r+6)=0\implies r=2 \textrm{ or } r=3
$$

This follows from the fact that $e^{rx}>0$ for all $x\in\mathbb{R}$. The general solution for this, as we're told, is given by

$$
y(x) = c_1e^{2x}+c_2e^{3x}
$$

for some parameters $c_1$ and $c_2$. These parameters depend on the initial conditions (in the form of $y(0)=y_0$ and $y'(0)=y_1$) which are typically provided.

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-n" | first %}

The approach seems like magic. In this series of posts I'll try to understand on the general framework, and attempt to solve some fun problems (see [here]({{ related_post.url | relative_url }}), more to come).

### Homogeneous Equations
The first thing that pops out of these equations is they have (or, can be rearranged into a shape which has) $0$ on the right hand side (I've rearranged the order):

$$
\begin{eqnarray}
x_{n+2} - 5 x_{n+1} + 6 x_n = 0 \\
f(x+2) - 5f(x+1) + 6f(x) = 0 \\
f(4x) - 5f(2x) + 6f(x) = 0 \\
y^{\prime\prime} - 5y' - 6y = 0
\end{eqnarray}
$$

Second, they look identical on the left hand side - the order of the terms and coefficients attached to these terms are the same. By order, I mean by far apart is a term (e.g, $x_{n+2}$) with regards to the base term (e.g, $x_n$) (2 here).

To make it prominent, let's try to extract this structure in the form of a polynomial:

$$
P([?]) := [?]^2 - 5[?] + 6
$$

{% assign related_post = site.posts | where: "slug", "derivatives-differentials-gradients" | first %}

In order to do this, we need a way to map each equation into a framework. We recognise the [differential operator]({{ related_post.url | relative_url }}) $Dy=y'$ here. Let's try to extend this. 

Instead of a specific operator (e.g., differential for the ODE), we introduce the notion of a general operator $T$. As a reminder, operators are transforms that map functions to other functions (potentially defined on a different domain).

Let's define the operators for each case. Let $T=E$ be a "shift" operator that shifts the inputs to the right by $1$. We can use that for $2$ of our cases. Let $T=S$ be the "scale" operator, and $T=D$ stays as usual.

Concretely, the notations stand for the following transform:

$$
\begin{align}
E:x_n\mapsto & x_{n+1} \\
E:f(x)\mapsto & f(x+1) \\
S:f(x)\mapsto & f(2x) \\
D:y(x)\mapsto & y'(x) \\
\end{align}
$$

What do we need to fit this operator within the polynomial structure? First, we need the notion of "powers". We can define this using compositions for operators $T$:

$$
T^2 = T\circ T
$$

This works, as we verify:

$$
\begin{align}
E^2(x_n)&=E(E(x_n))=E(x_{n+1})=x_{n+2} \\
E^2(f(x))&=E(E(f(x)))=E(f(x+1))=f(x+2) \\
S^2(f(x))&=S(S(f(x)))=S(f(2x))=f(4x) \\
D^2(y)&=D(D(y))=D(y')=y^{\prime\prime} \\
\end{align}
$$

Second, we have terms that's just $y$ (or $x_n$ or $f(x) $). We need an identify operator. I'm choosing to use the common symbol $T=I$ for this (even though they mean different thing for each case). With this, we to have (verifiable):

$$
T\circ I = I\circ T = T
$$

Now, we can fit this into our polynomial structure. In essence, for each of the equations we discussed, it has this general form:

$$
P(T)(\cdot)=(T^2 - 5T + 6I)(\cdot)=0
$$

It's natural trying to factorise this:

$$
\left((T-3I)(T-2I)\right)(\cdot)=0
$$

This hints that there are two solutions, one from $(T-3I)(\cdot)=0$ and another $(T-2I)(\cdot)=0$. This is due to the fact that we have $0$ on the right. If we had something else, things would have been more complicated.

This $0$ makes this a special case. Each of these are examples of homogeneous equations. These often carry hints for solving for the more general case which I'd discuss in the course of this series.

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-2" | first %}

As an immediate follow up [post]({{ related_post.url | relative_url }}), I'll discuss the general principles for the homogeneous case.
