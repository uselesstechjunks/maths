---
layout: post
title: "Linear Structures in Higher Dimensions"
date: 2026-10-14
tags:
  - geometry
  - calculus
---

For simple scalar functions $y:\mathbb{R}\to\mathbb{R}$, $y:x\mapsto y(x)$ traces the trajectory of a point $(x, y(x))$ in $\mathbb{R}^2$ as we vary $x$. Let's constrain this by requiring that it must pass through a specific point $(a, y(a))$. 

We recall from geometry that in order for this to be a straight line, we must have

$$
y(x) - y(a) = m(x - a)
$$

It follows from $y(x)=mx+c$ and making $(a,f(a))$ satisfying this equation (I do this calculation explicitly for the $\mathbb{R}^2$ case).

When $m=0$, the equation reduces to $y(x)=f(a)$, which is parallel to the $x$-axis.

For the other extreme, when $m\to\infty$, we can reason that in limit, we must have 

$$
x-a=\lim\limits_{m\to\infty}\frac{y(x)-y(a)}{m}=0\implies x=a
$$

which is parallel to the $y$-axis.

Now, here is the trick: a slight rearrangement makes this into a general vector-form equation that extends neatly to higher dimensions to planes and hyperplanes.

What is the vector form equation of a straight line? 

### Vector form in 1D
For the moment, let's stick with scalar functions (and therefore, graphs of these functions in $\mathbb{R}^2$). The vectors we naturally have here are in the form 

$$
\mathbf{r}=
\begin{pmatrix} x \\ 
y(x)
\end{pmatrix}\in\mathbb{R}^2
$$

with their tails at origin and tips at points $(x, y(x))$. 

In this form, as for the constraint, the trajectory must pass through the tip of some vector $\mathbf{r}_0$.

For any arbitrary vector $\mathbf{r}$, we consider the difference vector $\mathbf{r}-\mathbf{r}_0$ (tail at the tip of $\mathbf{r}_0$, tip at the tip of $\mathbf{r}$). As we vary $\mathbf{r}$, this defines the family of trajectories passing through $\mathbf{r}_0$. 

Let $\hat{\mathbf{n}}$ be a normal vector (i.e. perpendicular) to $\mathbf{r}-\mathbf{r}_0$ at some point.

In order for this trajectory to define a straight line (extended either ways indefinitely), we must need this normal to be pointing to the same direction everywhere. That is, a single normal vector stays normal to $\mathbf{r}-\mathbf{r}_0$ throughout. 

The equation in the vector form is this orthogonality condition between these two:

$$
(\mathbf{r}-\mathbf{r}_0)\cdot\hat{\mathbf{n}}=0
$$

Now, looking back at our original equation, we rearrange $y(x)-f(a)=m(x-a)$ to get

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

that always point downwards, and how far or which direction in the $x$-axis it points to is completely determined by its slope. Since the slope stays constant for straight lines, we can compute $f'(x)$ at any point (say, at $a$), and use $m=f'(a)$ throughout.

$$
\hat{\mathbf{n}}=\begin{pmatrix}f'(a)\\ 
-1\end{pmatrix}
$$

### Planes in 2D
For general equation of planes, we recall that any map $f:(x,y)\in\mathbb{R}^2\mapsto z\in\mathbb{R}$ must follow that $z=f(x,y)=mx+ny+c$ for some $m,n,c$.

We need this to pass through some specific point $(a,b,f(a,b))\in\mathbb{R}^3$. Since I don't remember what the equation needed to be, let me derive it here.

$$
\begin{align}
f(a,b)=ma+nb+c\implies c=f(a,b)-ma-nb \\
\therefore f(x,y)=mx+ny+(f(a,b)-ma-nb)\\
\therefore
\begin{pmatrix}
x-a \\
y-b \\
f(x,y)-f(a,b)
\end{pmatrix}\cdot
\begin{pmatrix}
m\\
n\\
-1
\end{pmatrix}
=0
\end{align}
$$

Now we see a pattern forming. If we follow from the equation, we can derive directly that $f_x=\frac{\partial f}{\partial x}=m$ and $f_y=\frac{\partial f}{\partial y}=n$. So, the normal to this plane actually is

$$
\hat{\mathbf{n}}=\begin{pmatrix}
f_x\\ 
f_y\\
-1\end{pmatrix}
$$

or, with a little abuse of notation

$$
\begin{pmatrix}
\nabla f\\
-1
\end{pmatrix}
$$

### The cross product view
Let's consider 2 vectors on the plane $z=mx+ny+c$. We first consider straight lines on that plane. The simplest 2 we can think of are along the axes. For $x=0$ (along the $y$-axis), we have $z=ny+c$ and for $y=0$ (along the $x$-axis), we have $z=mx+c$. 

These lines are parallel to $z=ny$ and $z=mx$, respectively (lines passing through origin). So, if we think of vectors along these lines (tails at origin, heads at somewhere on the lines), those vectors are identical to the ones we're looking for.

As we're mostly interested in the directions and not actual magnitude, we can fill in arbitrary values for $(x, y)$ and recover the tips of these vectors. If we choose $y=1$ for the first line, then we recover the tip at $(0, 1, n)$. Similarly, for the second vector, we recover $(1, 0, m)$. The first one is along the $y$-axis, and the second one is along the $x$-axis.

Let's name them. Let's call them $\mathbf{u}$ and $\mathbf{v}$ in the right hand order (first, along the $x$-axis, followed by $y$):

$$
\mathbf{u}=\begin{pmatrix}1\\
0\\
m\end{pmatrix},\mathbf{v}=\begin{pmatrix}0\\
1\\
n\end{pmatrix}
$$

and see what we get when we perform a cross product.

$$
\mathbf{u}\times\mathbf{v}=\begin{vmatrix} 
\hat{\imath} && \hat{\jmath} && \hat{k} \\
1 && 0 && m \\
0 && 1 && n
\end{vmatrix}=-m\hat{\imath}-n\hat{\jmath}+\hat{k}=-\begin{pmatrix}
m\\
n\\
-1
\end{pmatrix}
\\
$$

Not exactly what we were looking for. It points to the opposite direction of the normal we had earlier. But that just means I might be missing the right convention somewhere. Instead of pretending that it's not bothering me, let me keep it here lingering so that I come back to it someday.

### Hyperplanes
For general hyperplanes $f:\mathbb{R}^n\to\mathbb{R}$, we can safely extend this in proper vector notation:

$$
\begin{pmatrix}
\mathbf{x}-\mathbf{a} \\
y(\mathbf{x})-y(\mathbf{a})
\end{pmatrix}\cdot
\begin{pmatrix}
\nabla_\mathbf{x}(\mathbf{a}) \\
-1
\end{pmatrix}=0
$$

This simply rearranges into

$$
y(\mathbf{x})=y(\mathbf{a})+\nabla_\mathbf{x}(\mathbf{a})(\mathbf{x}-\mathbf{a})
$$
