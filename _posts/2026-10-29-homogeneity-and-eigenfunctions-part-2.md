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

We have a polynomial equation on an operator that factorises into the form $(T-\lambda I)(f)[x]=0$. Rearranging, this is

$$
T(f(x))=\lambda f(x)
$$

This is similar to the familiar eigen-equation from linear algebra:

$$
M\mathbf{v}=\lambda\mathbf{v}
$$

### Companion Matrix
Let's make this connection concrete by working with our difference equation example. We introduce a vector space in $\mathbb{R}^2$ that's made up by 2 of the terms in our equations (since we need at least 2 of the them to determine the next).

If we consider one such vector containing terms $x_n$ and $x_{n+1}$, and another containing $x_{n+1}$ and $x_{n+2}$, the equation can be written with matrix notation as follows (verifiable):

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

We unroll the right hand side:

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

### Eigenfunctions
The first major insight it provides is by connecting the subsequent terms once we fit in the eigenvalues to solve for eigenvectors:

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
\implies 
\begin{pmatrix}
5x_{n+1}-6x_n\\
x_{n+1}
\end{pmatrix}=
\begin{pmatrix}
\lambda x_{n+1}\\
\lambda x_n
\end{pmatrix}
$$

$$
\implies
\begin{cases}
x_{n+2}=\lambda x_{n+1}\\
x_{n+1}=\lambda x_n
\end{cases}
$$

Going back to the more general form, this resembles the form we obtained from the factorisation exactly:

$$
T(f(x))=\lambda f(x)
$$

Let me add a comment here. Thinking about this general form, this means that corresponding to each operator (shift, scale, differentiation, whatever), we have a set of special functions for which applying the operator results in just scaling them. These functions stay invariant in their shape under the operator (recall that the operator is meant to transform the functions to produce new ones).

Following the notion from linear algebra, we call these the eigenfunctions of their corresponding operators.

### Linearity of the Solution Space
The second insight we obtain is an explanation for combining the solutions. The operator we're dealing with is linear. We haven't noticed it yet, but this allows us to claim something important. So, let's verify.

Linearity requires that we must have

$$
T(\alpha f+\beta g)[x]=\alpha T(f)[x]+\beta T(g)[x]
$$

For $D$, this is known to hold:

$$
D(\alpha f+\beta g)[x]=\alpha D(f)[x]+\beta D(g)[x]=\alpha f'(x)+\beta g'(x)
$$

For the others, this is seems difficult:

$$
\begin{align}
E(\alpha f+\beta g)[x-1]=\alpha E(f)[x-1]+\beta E(g)[x-1]=&\alpha f(x)+\beta g(x) \\
S(\alpha f+\beta g)[x/2]=\alpha S(f)[x/2]+\beta S(g)[x/2]=\alpha f(x)+\beta g(x)
\end{align}
$$

For this to hold, we need to completeness on our the function spaces. This should give us the property that having a linear combination of two functions produces another function that remains in the function space.

Assuming we have that, we can then claim:

$$
\exists \varphi\in C(\mathbb{R},\mathbb{R}), \textrm{s.t. } \varphi(x)=\alpha f(x)+\beta g(x)
$$

With this, the linearity holds:

$$
\begin{align}
E(\varphi)[x-1]=\varphi(x) \\
S(\varphi)[x/2]=\varphi(x)
\end{align}
$$

This implies that $(T-\lambda I)$ is also a linear operator. Now we can extend the notion of null-space of this matrix to this operator. 

The eigenfunctions are in the null-space of the operator $(T-\lambda I)$. For an operator polynomial, we have finitely many eigenfunctions (finite number of roots, corresponding to each eigenvalue of the companion matrix). These form the basis of the solution space. Therefore, we have linear solution space with finite basis system.

Every other function in the kernel space is also a valid solution. Therefore, we represent the general solution as a linear combination of these eigenfunctions.

For our example, $\lambda_1=2$ and $\lambda_2=3$ are two solutions which correspond to two eigenvectors of the matrix, producing functional eigenequations $x_{n+1}=2x_n$ and $x_{n+2}=3x_n$. Let's represent $x_n=f_1$ and $x_n=f_2$ being two eigenfunctions corresponding to these equations. Therefore, the linear combination of the following form is the entire space of valid solutions:

$$
x_n=\alpha f_1 + \beta f_2
$$

Note that the trivial solution of $x_n=0$ comes from simply choosing $\alpha=0$ and $\beta=0$.

#### Remarks
The null-space machinery is a complicated way of stating the fact that when we have roots $x_1$ and $x_2$ for some $P(x)=0$, then anything that looks like $\alpha x_1+\beta x_2$ also solves the polynomial.

$$
P(x_1)=0, P(x_2)=0\implies P(\alpha x_1+\beta x_2)=\alpha P(x_1)+\beta P(x_2)=0
$$

This is not what I remember learning when I learned about roots. Also, we should not take this property for granted as the linearity breaks down if the equation is not a homogeneous one. Say, the polynomial (or any of the equations we discussed so far) has the form:

$$
P(x)=\xi
$$

and we have two roots

$$
P(x_1)=\xi,P(x_2)=\xi
$$

We don't have the linear structure of the solution space anymore as we can verify:

$$
P(\alpha x_1+\beta x_2)=\alpha P(x_1)+\beta P(x_2)=\alpha\xi+\beta\xi\neq\xi
$$

{% assign related_post = site.posts | where: "slug", "homogeneity-and-eigenfunctions-part-3" | first %}

In the next [post]({{ related_post.url | relative_url }}), I'll solve the eigenfunctions for each individual equations from part 1.
