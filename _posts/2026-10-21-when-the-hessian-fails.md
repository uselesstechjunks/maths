---
layout: post
title: "When the Hessian fails"
date: 2026-10-21
slug: when-the-hessian-fails
tags:
  - calculus
  - optimisation
  - taylor series
---
I wrote a rather long motivation for this post which I've since pushed to the footnotes.[^1] as I realised that it's slightly orthogonal. It is still a useful reminder for me on why I started writing in the first place. For the reader, it might explain what I am trying to achieve here. However, the discussion below doesn't borrow anything from there. We can jump right in.

Let's assume that we're dealing with a function that is continuously differentiable (see [[THIS POST]] for more details on continuous differentiability).

To keep things simple, I'll start with the scalar case of $f:U\to\mathbb{R}$, where $U\subseteq\mathbb{R}$ is an open set. Why do we need an open set for the domain? Because we're going to nudge the input and we need to make sure we can do that safely staying within the domain of $f$.

Around a point $x\in U$, the Taylor expansion is

$$
f(x+h)=f(x)+f'(x)h+\frac{1}{2!}f^{\prime\prime}(x)h^2+\frac{1}{3!}f^{\prime\prime\prime}(x)h^3+\cdots
$$

This converges as long as $h$ is within its radius of convergence. See [[THIS POST]] for more details on Taylor expansion.

For a linear approximation, we truncate after the first derivative term. I'll use a different letter $y$ for the function that represents this approximation so that we don't mix things up (this is not the same function as $f$).

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

{% assign related_post = site.posts | where: "slug", "linear-structures" | first %}

which now looks more familiar for a straight line passing through $(a, b)$ with a slope $m$. Some interesting details on that is covered in [Linear Structures in Higher Dimensions]({{ related_post.url | relative_url }}).

$$
y-b=m(x-a)
$$

Now, onto the the interesting part. At stationary points, if we use $f'(x)=0$ into the Taylor expansion, the equation becomes

$$
f(x+h)=f(x)+\cancelto{0}{f'(x)h}+\frac{1}{2!}f^{\prime\prime}(x)h^2+\frac{1}{3!}f^{\prime\prime\prime}(x)h^3+\cdots
$$

Now, in order for $f$ to have a minima at $x$, we must have $f(x+h) > f(x)$ even when the limit $\lim\limits_{h\to 0}\frac{f(x+h)-f(x)}{h}=0$. This implies

$$
\left(\frac{1}{2!}f^{\prime\prime}(x)h^2+\frac{1}{3!}f^{\prime\prime\prime}(x)h^3+\cdots\right) >0
$$

For any $h\in\mathbb{R}$, $h^2>0$. Also, since it's a stationary point, we must have $h\to 0$.

Let's consider the case where $h>0$. If we have $f^{\prime\prime}(x)>0$, the above equation is satisfied. What about $h<0$? The above still is satisfied as long as $f^{\prime\prime}(x)>0$ if 

$$
\frac{1}{2!}f^{\prime\prime}(x)\vert h\vert^2>\frac{1}{3!}f^{\prime\prime\prime}(x)\vert h\vert^3+\frac{1}{4!}f^{\prime\prime\prime}(x)\vert h\vert^4+\cdots
$$

This also clarifies another thing: while having $f^{\prime\prime}(x)>0$ is sufficient, it is not necessary. 

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
