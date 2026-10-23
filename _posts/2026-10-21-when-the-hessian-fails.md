---
layout: post
title: "When the Hessian fails"
date: 2026-10-21
tags:
  - calculus
  - optimisation
  - taylor series
---
# The Geometric View in 1D
When I first learnt about stationary points, I leaned heavily on visualisation. It was sufficient to imagine that the tangent lines at different points of a function would rotate around, up-or-down, depending on how the graph looks, as we slide along the x-axis. Whenever the tangent becomes horizontal, we have a stationary point $(x, f(x))$.

The idea involving second derivative test is also geometric. The slope of the tangent line is $f'(x)$, and at stationary points it is $0$. Whether it is a (local) maximum or a minimum depends on how the slope changes as we move left to right on the x-axis.

The good thing about this intuition is that I never had to memorise the conditions on the second derivative that correlated with the types of stationary points. I would call upon my mental image of some random graph around its minimum to see that as we moved from $x-h$ to $x$ to $x+h$, the slope must go from negative to 0 and then to positive, and therefore, the second derivative must have to increase with increasing $x$. Therefore, the right test for a local minimum must have to be $f''(x)>0$ and $f''(x)<0$ for the maximum.

The issue with a visualisation-based recall technique is that it's only as good as our visualisation skills, which gets increasing poorer as we move up dimensions. For example, 

- second derivative test for stationary points
- rules for hessian for the multivariate case
- geometric intuition in 1d
- analytical reasoning in 1d > taylor > 
- analytical reasoning in 2d
- geometric intuition in 2d
- counterexample: hessian null space vectors
- what's happening there
- third term in taylor series
