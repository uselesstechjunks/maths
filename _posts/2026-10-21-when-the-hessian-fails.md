---
layout: post
title: "When the Hessian fails"
date: 2026-10-21
tags:
  - calculus
  - optimisation
  - taylor series
---
When I first learned about stationary points, I leaned heavily on visualisation. It was sufficient (and fun) for me to imagine that the tangent lines at different points of a function would rotate up-or-down, depending on how the graph looks, if we slided along the x-axis. Whenever the tangent becomes horizontal, we have a stationary point.

The classification of stationary points involving the second derivative test also has a geometric explanation. The slope of the tangent line is $f'(x)$, and at stationary points it is $0$. Whether it is a (local) maximum or a minimum depends on how the slope changes as we move from left to right on the x-axis.

A nice thing about these intuitions is that I never had to memorise the particulars of the tests. I would call upon an image of a smooth-looking graph around its minimum and deduce that if we moved from $(x-h)$ to $x$ to $(x+h)$, the slope must go from negative (line leaning left) to 0 and then to positive (line leaning right). Therefore, the second derivative must have to be increasing with $x$ and this implied that the correct test for a local minimum must have to be $f''(x)>0$ (and $f''(x)<0$ for the maximum, by extension).

I could never explain (or, paid much attention to) the $f''(x)=0$ case though, except for the trivial cases of either a constant ($f(x)=c$) or an affine function ($f(x)=mc+c$) where the slope never changes. I never understood what happens at $x=0$ for $f(x)=x^4$, and how is that different from $f(x)=x^3$.

The limitation of an animation-based reconstruction technique is that it is only as good as our imagination, which gets increasing poorer as we move up in dimensions. For example, even for $f:\mathbb{R}^2\to\mathbb{R}$, 

- second derivative test for stationary points
- rules for hessian for the multivariate case
- geometric intuition in 1d
- analytical reasoning in 1d > taylor > 
- analytical reasoning in 2d
- geometric intuition in 2d
- counterexample: hessian null space vectors
- what's happening there
- third term in taylor series
