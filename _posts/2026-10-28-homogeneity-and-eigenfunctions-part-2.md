---
layout: post
title: "Homogeneity and Eigenfunctions: Part 2"
date: 2026-10-28
slug: homogeneity-and-eigenfunctions-part-2
tags:
  - functional equations
  - ordinary differential equations
  - sequences
  - difference equations
  - analysis
---
{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-1" | first %}

(Following from [part 1]({{ related_post.url | relative_url }})).

We have a polynomial equation on an operator which naturally factorises in the form $(T-\lambda I)(f(x))=0$. Rearranging, this is

$$
T(f(x))=\lambda f(x)
$$

This is identical to the familiar eigen-equation from linear algebra:

$$
M\mathbf{v}=\lambda\mathbf{v}
$$

Let's make this concrete by working with our difference equation example. We introduce a vector space in $\mathbb{R}^2$ made up by 2 of the terms in our equations (since we need 2 of the them to determine the next). 

If we consider one such vector containing terms $x_n$ and $x_{n+1}$, and another containing $x_{n+1}$ and $x_{n+2}$, the equation can be written with matrix notation as follows:

$$
\begin{pmatrix}
x_{n+2} \\
x_{n+1}
\end{pmatrix}= 
\begin{pmatrix}
5 & -6 \\
1 & 0
\end{pmatrix}
\begin{pmatrix}
x_{n+1} \\
x_n
\end{pmatrix}
$$

We can unroll the right hand side:

$$
\begin{pmatrix}
x_{n+2} \\
x_{n+1}
\end{pmatrix}= 
\begin{pmatrix}
5 & -6 \\
1 & 0
\end{pmatrix}
\begin{pmatrix}
x_{n+1} \\
x_n
\end{pmatrix}=
\begin{pmatrix}
5 & -6 \\
1 & 0
\end{pmatrix}^2
\begin{pmatrix}
x_{n} \\
x_{n-1}
\end{pmatrix}=\cdots=
\begin{pmatrix}
5 & -6 \\
1 & 0
\end{pmatrix}^n
\begin{pmatrix}
x_2 \\
x_1
\end{pmatrix}
$$

For the matrix power, consider the eigendecomposition of the matrix. We compute the characteristic polynomial as

$$
\det\begin{pmatrix}
5-\lambda & 6 \\
1 & -\lambda
\end{pmatrix}=0\implies \lambda^2-5\lambda+6=0\implies P(\lambda)=0
$$

The characteristic equation has the exact form as our operator polynomial. This matrix is known as the companion matrix of the polynomial.

$$
\begin{pmatrix}
x_{n+2} \\
x_{n+1}
\end{pmatrix}= 
\begin{pmatrix}
3 & 2 \\
1 & 1
\end{pmatrix}
\begin{pmatrix}
3 & 0 \\
0 & 2
\end{pmatrix}^n
\begin{pmatrix}
1 & -2 \\
-1 & 3
\end{pmatrix}
\begin{pmatrix}
x_2 \\
x_1
\end{pmatrix}
$$

For our equation, we have the Eigenvalues $\lambda$. Our task in essence is to find special Eigenfunctions which simply scales under our operator.



factorise
find factor equation
establish raw form
discuss connection with linear algebra
establish companion matrix and eigenproblem.
motivate by transition
establish connection with vector spaces for sequences and differential equations by naming them
establish connection with kernel space and direct sum
state theorem $P(T)(x)=\lambda P(\lambda)$

before non-homogenous, read simmons.
