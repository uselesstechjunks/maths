---
layout: post
title: "Linear Structures in Higher Dimensions"
date: 2026-10-14
tags:
  - geometry
  - calculus
---

For simple scalar functions $y:\mathbb{R}\to\mathbb{R}$, $y:x\mapsto y(x)$ traces a trajectory of a point $(x, y(x))\in\mathbb{R}^2$ as we vary $x$. Let's constrain this by requiring that it must pass through a specific point $(a, y(a))$. 

We recall from geometry that in order for this to be a straight line, we must have

$$
y(x) - y(a) = m(x - a)
$$

When $m=0$, the equation reduces to $y(x)=f(a)$, which is parallel to the $x$-axis.

The other extreme, when $m\to\infty$, we can reason that in limit, we must have 

$$
x-a=\lim\limits_{m\to\infty}\frac{y(x)-y(a)}{m}=0\implies x=a
$$

which is parallel to the $y$-axis.

Now, here is the trick: a slight rearrangement makes this into a general vector-form equation that extends neatly to higher dimensions to planes and hyperplanes.

What is the vector form equation of a straight line? 

#### Vector form in 1D
For the moment, let's stick with scalar functions (and therefore, graphs of these functions in $\mathbb{R}^2$). The vectors we naturally have here are in the form 

$$
\mathbf{r}=
\begin{pmatrix} x \\ 
y(x)
\end{pmatrix}\in\mathbb{R}^2
$$

that has its tail at origin and the tip at point $(x, y(x))$. In this form, as for the constraint, the trajectory must pass through the tip of some vector $\mathbf{r}_0$.

For any arbitrary vector $\mathbf{r}$, we have the difference vector $\mathbf{r}-\mathbf{r}_0$ (tail at the tip of $\mathbf{r}_0$, tip at the tip of $\mathbf{r}$). As we vary $\mathbf{r}$, this defines the family of trajectories passing through $\mathbf{r}_0$. 

Let $\hat{\mathbf{n}}$ be a normal vector (i.e. perpendicular) to this line at some point.

In order for this trajectory to define a straight line (extended either ways indefinitely), we must need this normal to be pointing to the same direction. That is, a single normal vector stays normal to the trajectory $\mathbf{r}$ traces throughout. 

The equation in the vector form is essentially this orthogonality condition between these two vectors:

$$
(\mathbf{r}-\mathbf{r}_0)\cdot\hat{\mathbf{n}}=0
$$

Rearranging $y(x)-f(a)=m(x-a)$, we get

$$
\begin{aligned}
m(x-a) - (y(x)-f(a)) &= 0 \\
\therefore\quad
\begin{pmatrix}
x-a \\
y(x)-f(a)
\end{pmatrix}
\cdot
\begin{pmatrix}
m \\
-1
\end{pmatrix}
&= 0
\end{aligned}
$$

So, the normal vector we have is just 

$$
\begin{pmatrix}
m \\
-1
\end{pmatrix}
$$

As for the slope $m$, since it stays constant, we can simply compute $f'(x)$ at any point (say, $f'(a)$), and use $m=f'(a)$ instead.

#### Planes in 2D
For general equation of planes, we recall that it defines the graph in $\mathbb{R}^3$ with $z=f(x,y)=ax+by+c$ ($f:(x,y)\mapsto z\in\mathbb{R}$).

Rearranging, we get

#### Hyperplanes
