---
layout: post
title: "When the Hessian fails"
date: 2026-10-21
tags:
  - calculus
  - optimisation
  - taylor series
---
I wrote a rather long background and motivation for this post which I've since pushed to footnotes.[^1]

Let's assume that the function we're dealing with is continuously differentiable (see [[THIS POST]] for more details on continuous differentiability).

To keep things simple, I'll start with the scalar case of $f:U\to\mathbb{R}$, where $U\subseteq\mathbb{R}$ is an open set. 

Why do we need an open set for the domain? Because we're going to nudge the input and we need to make sure we can do that safely within the domain of $f$.

Around a point $x\in U$, the Taylor expansion is

$$
f(x+h)=f(x)+f'(x)h+\frac{1}{2!}f^{\prime\prime}(x)h^2+\frac{1}{3!}f^{\prime\prime\prime}(x)h^3+\cdots
$$

This converges as long as the nudge $h$ keeps it within its radius of convergence. See [[THIS POST]] for more details on Taylor expansion.

For a linear approximation, we take up-to term with the first derivative. Let's use a different letter $y$ for the function that represents this approximation so that we don't mix things up (this is not the same function $f$).

$$
y(x+h)=f(x)+f'(x)h
$$

Although it might not be immediately apparent, what we have here is an equation of a straight line passing through the point $(x, f(x))$. To see that clearly, let's use $a$ (instead of $x$) as the centre of the expansion, and reserve $x$ for the nudged input $a+h$, so that we have:

$$
\begin{aligned}
y(x)&=f(a)+f'(a)(x-a) \\
\therefore\quad y(x)-f(a)&=f'(a)(x-a)
\end{aligned}
$$

which now looks to be in the more familiar form of a straight line passing through $(a, b)$ with a slope $m$. [^2]

$$
y-b=m(x-a)
$$

Here is the interesting point. If we use $f'(x)=0$ in the Taylor expansion, the equation becomes

$$
f(x+h)=f(x)+\cancelto{0}{f'(x)h}+\frac{1}{2!}f^{\prime\prime}(x)h^2+\frac{1}{3!}f^{\prime\prime\prime}(x)h^3+\cdots
$$

Note that in this entire discussion, we actually didn't need the function to be more than thrice differentiable. So we didn't really need the continuous differentiability, although it allowed us to talk about the Taylor expansion which does make things easier.

- second derivative test for stationary points
- rules for hessian for the multivariate case
- geometric intuition in 1d
- analytical reasoning in 1d > taylor > 
- analytical reasoning in 2d
- geometric intuition in 2d
- counterexample: hessian null space vectors
- what's happening there
- third term in taylor series

[^1]: When I first learned about stationary points, I leaned heavily on visual intuition. It was sufficient (and fun) to imagine that the tangent lines of a function would rotate up or down as we slid along the $x$-axis, depending on how the graph looks at different points. Whenever the tangent became horizontal, we had a stationary point.

    A nice thing about these intuitions is that I never had to memorise the particulars. For example, the classification of stationary points involved the second derivative test. Fortunately for me, this one also had a visual explanation. When needed, I would call upon an image of a smooth-looking graph around its minimum and deduce that if we moved from left to right passing through the stationary point, the slope of the tangent must go from negative (leaning left) to $0$ and then to positive (leaning right). Therefore, the second derivative must be increasing in the positive direction of $x$, which implied that the correct test for a local minimum was $f^{\prime\prime}(x)>0$ (and $f^{\prime\prime}(x)<0$ for the maximum, by extension).

    The limitation of this animation-based mental reconstruction technique is that it is only as good as our imagination. It gets increasingly unreliable as things get subtle or as we move up in dimensions. As a concrete example of the subtle case, I could never explain (or, pay much attention to) the $f^{\prime\prime}(x)=0$ case, except for the trivial scenarios involving a constant $f(x)=c$ or an affine function $f(x)=mx+c$. These are trivial because the slope never changes in the entire domain. I never thought much about what happens at $x=0$ for $f(x)=x^4$, and whether or how it is different from $f(x)=x^3$.

    As for higher dimensions, even for $f:\mathbb{R}^2\to\mathbb{R}$, things became difficult. I did the best I could drawing on cues from 3Blue1Brown. I knew what positive eigenvalues were meant to do to the surface geometrically, or what the basis transformations did. But when I wanted to solve a problem, I couldn't remember whether $H(x,y)<0$ meant "saddle" or was it $>0$ (or $=0$). Worse still, I realised that I couldn't see a way to figure this out from the things that I knew.

    So here is an attempt to capture a slightly different approach that still lets me reconstruct the conditions without memorisation. I'll also take this one step further, involving notations that I haven't seen before. There might be a geometric view to this as well. But until I know more about quadratic or trilinear forms, this would have to do.

[^2]: Here is something I also wish I had known earlier. A slight rearrangement makes this into a general vector-form equation. The nice thing about that is that it extends to higher dimensions.

    What is the vector form equation? Say, the line passes through the tip of the vector $\mathbf{r}_0$ (tail at origin). For any arbitrary vector $\mathbf{r}$, one can imagine the difference vector $\mathbf{r}-\mathbf{r}_0$ (tail at $\mathbf{r}_0$, tip at $\mathbf{r}$) to be the line. Let $\hat{\mathbf{n}}$ be a normal vector to this line (i.e. perpendicular). The equation in this form is essentially the orthogonality between these two vectors:

    $$
    (\mathbf{r}-\mathbf{r}_0)\cdot\hat{\mathbf{n}}=0
    $$

    For our simple scalar case, the vector is made up by 1 input dimension and 1 output dimension. That is, our line is in $\mathbb{R}^2$ made up with points $(x, g(x))$ that must pass through

    $$
    \mathbf{r}_0=
    \begin{pmatrix} 
    a \\ 
    f(a) 
    \end{pmatrix}
    $$

    Rearranging $g(x)-f(a)=f'(a)(x-a)$, we get

    $$
    \begin{aligned}
    f'(a)(x-a) - (g(x)-f(a)) &= 0 \\
    \therefore\quad
    \begin{pmatrix}
    x-a \\
    y(x)-f(a)
    \end{pmatrix}
    \cdot
    \begin{pmatrix}
    f'(a) \\
    -1
    \end{pmatrix}
    &= 0
    \end{aligned}
    $$

    When $f'(a)=0$, the equation reduces to $y(x)=f(a)$, which is parallel to the $x$-axis.
