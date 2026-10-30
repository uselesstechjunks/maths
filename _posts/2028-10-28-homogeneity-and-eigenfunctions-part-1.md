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
Let's consider a problem involving a functional equation. We are asked to find all continuous functions $f:\mathbb{R}\to\mathbb{R}$ such that

$$
f(x+2) - 5f(x+1) + 6f(x) = 0
$$

This problem looks quite difficult as first if we don't know how to approach problems of this sort. 

To make it interesting, let's consider another one. We have the same task as before, but this time the function must satisfy the following:

$$
f(4x) - 5f(2x) + 6f(x) = 0
$$

The first and the second one look essentially the same, except how the inputs differ. The first one shifts $x$ by $1$ while the next one scales it by $2$.

To make it more interesting, let's consider another one that does not involve a functional equation, but rather a difference equation. Here, we have a sequence $(x_n)$ which must satisfy

$$
x_{n+2} = 5 x_{n+1} - 6 x_n,\quad x_0=1, x_1=1
$$

and the task is to find closed form expression for $x_n$.

{% assign related_post = site.posts | where: "slug", "first-order-ode" | first %}

The example I am going to include here is one that involves a second-order ODE with constant coefficient. This is a natural follow up from first-order linear ODEs, discussed in this [post]({{ related_post.url | relative_url }}). We're asked to find solutions of the following:

$$
y^{\prime\prime} - 5y' - 6y = 0
$$

For this one, the books tell us that we should "assume" that $y(x)=e^{rx}$ solves this. We can then proceed by differentiating 

$$
\begin{align}
y'&=re^{rx} \\
y^{\prime\prime}&=r^2e^{rx} \\
\end{align}
$$

and then, putting it back into the equation, we get

$$
(r^2-5r+6)e^{rx}=0\implies (r^2-5r+6)=0\implies r=2 \textrm{ or } r=3
$$

since $e^{rx}>0$ for all $x\in\mathbb{R}$. The general solution for this ODE is given by, for some parameters $c_1$ and $c_2$

$$
y(x) = c_1e^{2x}+c_2e^{3x}
$$

while the parameters depend on some initial condition which are typically provided with the equation.

This feels like magic, so in this post I'll try to demystify it, comment on the general technique, and use these techniques to solve some more fun functional equations.

### Homogeneous Equations
The first thing I'd notice in all of the equations I've mentioned so far is that it has (or can be rearranged to a shape which would have) $0$ on the right hand side.

$$
\begin{align}
f(x+2) - 5f(x+1) + 6f(x) =& 0 \\
f(4x) - 5f(2x) + 6f(x) =& 0 \\
x_{n+2} - 5 x_{n+1} + 6 x_n =& 0 \\
y^{\prime\prime} - 5y' - 6y =& 0
\end{align}
$$

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-n" | first %}

See Part N [here]({{ related_post.url | relative_url }})
