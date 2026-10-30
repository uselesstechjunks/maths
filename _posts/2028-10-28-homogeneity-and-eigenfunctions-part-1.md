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

The first and the second one look essentially the same, except how the inputs differ. The first one shifts $x$ by $1$ (and then once again) while the next one scales it by $2$ (and then once again).

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

This feels like magic. So in this series of posts I'll try to demystify it for myself, understand on the general technique behind all these, and use these to solve some fun problems.

### Homogeneous Equations
The first thing I notice is that all of the equations have (or can be rearranged to a shape which would have) $0$ on the right hand side.

$$
\begin{eqnarray}
x_{n+2} - 5 x_{n+1} + 6 x_n = 0 \\
f(x+2) - 5f(x+1) + 6f(x) = 0 \\
f(4x) - 5f(2x) + 6f(x) = 0 \\
y^{\prime\prime} - 5y' - 6y = 0
\end{eqnarray}
$$

The second thing is that they have the same coefficients attached to the individual terms. The only difference in them is the operation it performs on each of the functions it deals with. 

Just as a reminder, for the third one we have a sequence which can always be thought of as a function on the integer domain as $x_n:\mathbb{N}\to \mathbb{R}$ with $x_n:n\mapsto x_n$.

To make it concrete, let's try to extract two specific structures out of these. The first one is a polynomial

$$
P(x) = x^2 - 5x + 6
$$

For the second one, things start looking similar if we could imagine that there is an underlying operator that's taking care of the most atomic transformation in these functions. What I mean by this is, concretely, is that we define the following operators

$$
\begin{align}
E:x_n\mapsto & x_{n+1} \\
E:f(x)\mapsto & f(x+1) \\
S: f(x)\mapsto & f(2x) \\
D:y(x)\mapsto & y'(x) \\
\end{align}
$$

Just as a reminder, operators are transformations that works on functions and outputs other functions.

Let me try to see if we can fit this operator structure neatly inside the polynomial structure. First, we can define higher-order terms for operators $T$ using composition:

$$
T^2 = T\circ T
$$

such that

$$
\begin{align}
E^2(x_n)&=E(E(x_n))=E(x_{n+1})=x_{n+2} \\
E^2(f(x))&=E(E(f(x)))=E(f(x+1))=f(x+2) \\
S^2(f(x))&=S(S(f(x)))=S(f(2x))=f(4x) \\
D^2(y)&=D(D(y))=D(y')=y^{\prime\prime} \\
\end{align}
$$

Now that we can define operator powers, we can fit this inside a polynomial structure. In essence, all we have is, in terms of a placeholder operator $T$, an equation in this general form:

$$
P(T)(\cdot)=0
$$

The missing thing for us to be able to write it in the format above is an identify operator $I$ for each of them, so that our equation becomes

$$
(T^2-5T-6I)(\cdot)=0
$$

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-2" | first %}

We'll discuss how do we go about solving these in the next [post]({{ related_post.url | relative_url }}).
