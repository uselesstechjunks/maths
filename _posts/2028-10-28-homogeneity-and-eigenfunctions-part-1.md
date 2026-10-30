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
Let's consider a problem involving a functional equation. We are asked to find all continuous functions $f:\mathbb{R}\to\mathbb{R}$ such that we have

$$
f(x+2) - 5f(x+1) + 6f(x) = 0
$$

This problem looks quite difficult as first if we don't know how to approach problems of this sort. 

To make it more interesting, let's consider another one. We have the same task as before, but this time the function must satisfy the following:

$$
f(4x) - 5f(2x) + 6f(x) = 0
$$

Let's look at another one. We have a sequence $(x_n)$ which satisfy

$$
x_{n+2} = 5 x_{n+1} - 6 x_n,\quad x_0=1, x_1=1
$$

Another example that involves second-order ODEs with constant-coefficients:

$$
y^{\prime\prime} - 5y' - 6y = 0
$$

For the last one, the books tell us that we should "assume" that $y(x)=e^{rx}$ solves this. And therefore, we proceed by differentiating it 

$$
\begin{align}
y'&=re^{rx} \\
y^{\prime\prime}&=r^2e^{rx} \\
\end{align}
$$

and then, putting it back into our equation, we get

$$
(r^2-5r+6)e^{rx}=0\implies (r^2-5r+6)=0\implies r=2 \textrm{ or } r=3
$$

since $e^{rx}>0$ for all $x\in\mathbb{R}$.

### Homogeneous Equations
