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

Unless we already know how to approach problems of this sort, this looks quite difficult.

To make things interesting, let's consider another one. The task is the same as before, with the equation this time being:

$$
f(4x) - 5f(2x) + 6f(x) = 0
$$

Let's pause for a second. The first and the second one look similar except their inputs. The first one slides $x$ by $1$ once (and then, once again) while the next one stretches $x$ by $2$ (and again).

Let's make this even more interesting by considering one that is a difference equation. Say, we have a sequence $(x_n)$ which must satisfy

$$
x_{n+2} = 5 x_{n+1} - 6 x_n,\quad x_0=1, x_1=1
$$

and the task is to find a closed form expression for $x_n$.

{% assign related_post = site.posts | where: "slug", "first-order-ode" | first %}

The last one in this lot I'll include involves a second-order linear ODE with constant coefficients. This is a natural follow up from first-order linear ODEs that I discussed [here]({{ related_post.url | relative_url }}). Our task is to find solutions of the following:

$$
y^{\prime\prime} - 5y' - 6y = 0
$$

Let's pick the last one as this is one that we're typically told a recipe for. The recipe tells us that we should "assume" that the solution has the form $y(x)=e^{rx}$. We proceed by differentiating first

$$
\begin{align}
y'&=re^{rx} \\
y^{\prime\prime}&=r^2e^{rx} \\
\end{align}
$$

Putting it back into the equation, the task reduces to finding the right values of $r$. So, we get

$$
(r^2-5r+6)e^{rx}=0\implies (r^2-5r+6)=0\implies r=2 \textrm{ or } r=3
$$

since $e^{rx}>0$ for all $x\in\mathbb{R}$. The general solution for this ODE, as we're told, is given by

$$
y(x) = c_1e^{2x}+c_2e^{3x}
$$

for some parameters $c_1$ and $c_2$.These parameters depend on some initial condition which are typically provided with the question (in the form of $y(0)=y_0$ and $y'(0)=y_1$).

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-n" | first %}

This feels like magic. So, in this series of posts I'll try to understand on the general framework, and hopefully be able to solve some fun problems (see [here]({{ related_post.url | relative_url }})).

### Homogeneous Equations
The first thing that pops out is that all of these equations have (or, can be rearranged into a shape which has) $0$ on the right hand side (I've rearranged the order here):

$$
\begin{eqnarray}
x_{n+2} - 5 x_{n+1} + 6 x_n = 0 \\
f(x+2) - 5f(x+1) + 6f(x) = 0 \\
f(4x) - 5f(2x) + 6f(x) = 0 \\
y^{\prime\prime} - 5y' - 6y = 0
\end{eqnarray}
$$

The second thing is that they look identical on the left hand side - as in, the order and coefficients attached to the individual terms are the same in each. To make it prominent, let's try to extract this structures out in the form of a polynomial:

$$
P([?]) := [?]^2 - 5[?] + 6
$$

To do this, we need a way to map each into a structure. We recognise the differential operator $Dy=y'$ here. Let's try to extend this idea. Let's assume that instead of differential operator for the ODE, there is an general operator $T$ for each of these functions. Concretely, using separate symbols for the nature for each:

$$
\begin{align}
E:x_n\mapsto & x_{n+1} \\
E:f(x)\mapsto & f(x+1) \\
S: f(x)\mapsto & f(2x) \\
D:y(x)\mapsto & y'(x) \\
\end{align}
$$

Just as a reminder, operators are transforms that takes on functions and outputs other functions. So how do we define the term that's just $y$ (or $x_n$ or $f(x)$)? We need an identify operator for each case individually, commonly called $I$.

Let me try to see if we can fit this operator neatly inside the polynomial structure. First, we define higher-order terms for operators $T$ using composition:

$$
T^2 = T\circ T
$$

and 

$$
T\circ I = I\circ T = T
$$

So, we can define $T^2$ for each as follows:

$$
\begin{align}
E^2(x_n)&=E(E(x_n))=E(x_{n+1})=x_{n+2} \\
E^2(f(x))&=E(E(f(x)))=E(f(x+1))=f(x+2) \\
S^2(f(x))&=S(S(f(x)))=S(f(2x))=f(4x) \\
D^2(y)&=D(D(y))=D(y')=y^{\prime\prime} \\
\end{align}
$$

So we can define higher-order operator application with operator powers. Now, we can fit this inside our polynomial structure. In essence, for each of the equations we discussed, it has this general form:

$$
P(T)(\cdot)=(\cdot^2-5\cdot+6I)(T)(\cdot)=0
$$

It's natural trying to factorise this form.

$$
(T-3I)(T-2I)(\cdot)=0
$$

This hints that there are two potential solutions, one involving $(T-3I)(\cdot)=0$ and another $(T-2I)(\cdot)=0$. Concretely, this means we have

$$
\begin{align}
E(x_{n+1})&=3 x_n \\
E(f(x))&=3f(x) \\
S(f(x))&=3 (x_n) \\
D(y(x))&=3 y(x) \\
\end{align}
$$

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-2" | first %}

We'll discuss how do we go about solving these in the next [post]({{ related_post.url | relative_url }}).
