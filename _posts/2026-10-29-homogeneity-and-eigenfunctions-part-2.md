---
layout: post
title: "Homogeneity and Eigenfunctions: Part 2"
date: 2026-10-29
slug: homogeneity-and-eigenfunctions-part-2
tags:
  - functional equations
  - ordinary differential equations
  - sequences
  - difference equations
  - analysis
---
{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-1" | first %}

(following from [part 1]({{ related_post.url | relative_url }})).

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

The first major insight it provides is by connecting the individual terms once we fit in the eigenvalues and solve for eigenvectors:

$$
\begin{pmatrix}
5 & -6 \\
1 & 0
\end{pmatrix}
\begin{pmatrix}
x_{n+1}\\
x_n
\end{pmatrix}=
\lambda
\begin{pmatrix}
x_{n+1}\\
x_n
\end{pmatrix}
\implies x_{n+1}=\lambda x_n\quad \left[T(f(x))=\lambda f(x)\right]
$$

Thinking about the general functional form, this means the following. Corresponding to each of each operator, there are a set of functions for which applying the operator (shift, scale, differentiation, whatever) is the same as just scaling it. Following the linear algebra notion, we call these the eigenfunctions of their corresponding operators.

The second insight we obtain is an explanation on why we can combine the solutions. The structure we're dealing with linear. We haven't noticed it yet, but this allows us to claim the following. We extend the notion of null-space of this matrix to the operator. The eigenfunctions are in the null-space of the operator $(T-\lambda I)$. Therefore, they form the basis of the solution space which is linear. For an operator polynomial, we only have finitely many such basis functions. Every other function in the kernel space is a valid solution. Therefore, we represent the general solution as a linear combination of these basis vectors.

For our example, $\lambda_1=2$ and $\lambda_2=3$ are two solutions which correspond to two eigenvectors, producing functional eigenequations $x_{n+1}=2x_n$ and $x_{n+2}=3x_n$. Let's represent $x_n=f_1$ and $x_n=f_2$ being two eigenfunctions corresponding to these. Therefore, any linear combination of the following form is in the kernel space:

$$
x_n=\alpha f_1 + \beta f_2
$$

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-3" | first %}

In the next [post]({{ related_post.url | relative_url }}), I'll solve the eigenfunctions for each individual equations from part 1.
