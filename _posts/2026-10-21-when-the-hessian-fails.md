---
layout: post
title: "When the Hessian fails"
date: 2026-10-21
tags:
  - calculus
  - optimisation
  - taylor series
---
When I first learned about stationary points, I leaned heavily on visualisation. It was sufficient (and fun) for me to imagine that the tangent lines of a function would rotate up or down as we slid along the $x$-axis, depending on how the graph looks at different points. Whenever the tangent became horizontal, we had a stationary point.

The classification of stationary points involved the second derivative test. Fortunately for me, it also has a geometric explanation. The slope of the tangent line is $f'(x)$, and at stationary points it is $0$. Whether it is a (local) maximum or a minimum depends on how the slope changes as we move from left to right on the $x$-axis passing through that point.

A nice thing about these intuitions is that I never had to memorise the particulars of things I needed to use. I would call upon an image of a smooth-looking graph around its minimum and deduce that if we moved from $(x-h)$ to $x$ to $(x+h)$, the slope of the tangent must go from negative (line leaning left) to 0 and then to positive (line leaning right). Therefore, the second derivative must be increasing with $x$, which implied that the correct test for a local minimum must be $f''(x)>0$ (and $f''(x)<0$ for the maximum, by extension).

The limitation of an animation-based mental reconstruction technique is that it is only as good as our imagination. It gets increasingly unreliable as things get subtle or as we move up in dimensions. As a concrete example of the subtle case, I could never explain (or, pay much attention to) the $f''(x)=0$ case, except for the trivial cases of either a constant $f(x)=c$ or an affine function $f(x)=mx+c$. These are trivial because the slope never changes in the entire domain. I never thought about what happens at $x=0$ for $f(x)=x^4$, and whether or how it is different from $f(x)=x^3$. 

As for higher dimensions, even for $f:\mathbb{R}^2\to\mathbb{R}$, I did the best I could using the visual cues drawn from 3Blue1Brown videos. I knew what positive eigenvalues were meant to do to the surface geometrically, or what the basis transformations did. But when I wanted to solve a real problem, I couldn't remember whether $H(x,y)>0$ meant "saddle" or was it $<0$ (or $=0$). Worse still, I realised that I couldn't figure this out from the things that I could "see" or reason about.

So here is an attempt to capture a slightly different approach that still lets me reconstruct the conditions without memorisation. There might be a geometric view to this as well. But until I know more about quadratic forms, this would have to do.

### Taylor series


- second derivative test for stationary points
- rules for hessian for the multivariate case
- geometric intuition in 1d
- analytical reasoning in 1d > taylor > 
- analytical reasoning in 2d
- geometric intuition in 2d
- counterexample: hessian null space vectors
- what's happening there
- third term in taylor series
