---
layout: post
title: "Integral Tricks: Level 1"
date: 2026-11-01
slug: integral-tricks-level-1
tags:
  - calculus
  - single variable calculus
  - bag of tricks
  - revision
---
### Indefinite Integrals
#### Integration by Parts
$$
\int u\mathrm{d}v=uv-\int v\mathrm{d}u
$$

Alternatively

$$
\int uv=u\int v-\int u'\left(\int v\right)
$$

#### Partial Fraction Decomposition
This decomposition applies directly when the rational function $\frac{N(x)}{D(x)}$ is proper, meaning $\deg N<\deg D$. Otherwise, perform polynomial division first. Once we have it in the correct form, we write

$$
D(x)=(x-a)^m\cdots(x^2+bx+c)^n\cdots
$$

and then

$$
\frac{N(x)}{D(x)}=\left(\frac{A_1}{(x-a)}+\frac{A_2}{(x-a)^2}+\cdots+\frac{A_m}{(x-a)^m}\right)+\cdots+\left(\frac{B_1x+C_1}{(x^2+bx+c)}+\frac{B_2x+C_2}{(x^2+bx+c)^2}+\cdots+\frac{B_nx+C_n}{(x^2+bx+c)^n}\right)+\cdots
$$

#### Trigonometric Substitution
Common patterns:

$$
\begin{align}
x^2+a^2,\sqrt{x^2+a^2}\longrightarrow & x=a\tan\theta, x=\cot\theta \\
x^2-a^2,\sqrt{x^2-a^2}\longrightarrow & x=a\sec\theta, x=\csc\theta \\
a^2-x^2,\sqrt{a^2-x^2}\longrightarrow & x=a\sin\theta, x=\cos\theta \\
\sqrt{a+x}\textrm{ and }\sqrt{a-x}\longrightarrow & x=a\cos\theta \\
\sqrt{(x-a)(b-x)}\longrightarrow & x=a\cos^2\theta+b\sin^2\theta \\
\end{align}
$$

#### General Substitution
For integrals in the form

$$
\int f(g(x))g'(x)\mathrm{d}x
$$

we can substitute $g(x)=t$ as long as $\int f(t)\mathrm{d}t$ exists. 

#### Reciprocal Substitution
These integrals

$$
\begin{align}
\frac{2x^2}{x^4+1}&=\left(\frac{x^2+1}{x^4+1}+\frac{x^2-1}{x^4+1}\right)\\
\frac{2}{x^4+1}&=\left(\frac{x^2+1}{x^4+1}-\frac{x^2-1}{x^4+1}\right)\\
\end{align}
$$

Or, more generally integrals of this form

$$
\begin{align}
\frac{2x^2}{x^4+1+kx^2}\\
\frac{2}{x^4+1+kx^2}\\
\end{align}
$$

are solved by dividing by $x^2$ first and then completing the square. The following is an example:

$$
\int\frac{x^2+1}{x^4-x^2+1}\mathrm{d}x=\int\frac{1+\frac{1}{x^2}}{x^2-1+\frac{1}{x^2}}\mathrm{d}x=\int\frac{\mathrm{d}\left(x-\frac{1}{x}\right)}{\left(x-\frac{1}{x}\right)^2+1}
$$

Integrals involving the following trigonometric functions can be reduced to the above form by using appropriate substitutions:

$$
\sqrt{\tan{x}},\sqrt{\cot{x}},\frac{1}{\sin^{2n}(x)+\cos^{2n}(x)}
$$

For integrals involving quadratic functions without the linear terms

$$
\int\frac{1}{(px^2+q)\sqrt{rx^2+s}}\mathrm{d}x
$$

$x=1/t$ and then $r+st^2=u^2$ works.

#### Rational and Irrational Fractions
For integrals of this form

$$
\int\frac{L(x)}{Q(x)}\mathrm{d}x,\int\frac{L(x)}{\sqrt{Q(x)}}\mathrm{d}x,\int L(x)\sqrt{Q(x)}\mathrm{d}x
$$

where $L$ is a linear function and $Q$ is a quadratic function, we express

$$
L(x)=p(Q')+q
$$

If we have

$$
\int\frac{Q_n(x)}{Q_d(x)}\mathrm{d}x, \int\frac{Q_n(x)}{\sqrt{Q_d(x)}}\mathrm{d}x
$$

where both $Q_n$ and $Q_d$ are quadratic, we express

$$
Q_n=p(Q_d)+q(Q'_d)+r
$$

If we have 

$$
\int\frac{Q_n(x)}{L(x)\sqrt{Q_d(x)}}\mathrm{d}x
$$

we express

$$
Q_n=pLQ'_d+qL+r
$$

For integrals of the form

$$
\int\frac{N(\sin,\cos)}{D(\sin,\cos)}\mathrm{d}x
$$

the same trick from the algebraic case seems to work

$$
N=pD+qD'+r
$$

If we have

$$
\int\frac{1}{L(x)^r\sqrt{Q(x)}}\mathrm{d}x
$$

the substitution $L(x)=t$ works.

#### Rationalising Substitution
Integrals containing irrational functions $(px+q)^{1/n}$, $px+q=t^n$ works.

#### Euler Substitution
Special hyperbolic substitution for the following form:

$$
\begin{align}
\left(\sqrt{x^2+a^2}\pm x\right)\implies& \sqrt{x^2+a^2}\pm x=t\\
\left(x\pm\sqrt{x^2+a^2}\right)\implies& x\pm\sqrt{x^2+a^2}=t\\
\end{align}
$$

#### Möbius Substitution
Applicable for the following form

$$
\frac{1}{(x+a)^c(x+b)^d}\implies \frac{x+a}{x+b}=t
$$

#### Weierstrass Substitution
Let $R$ represent a rational function. For integrals of the form

$$
\int R(\sin x,\cos x)\mathrm{d}x
$$

we can use the universal substitution

$$
\tan\left(\frac{x}{2}\right)=t
$$

such that

$$
\mathrm{d}x=\frac{2\mathrm{d}t}{1+t^2}
$$

and 

$$
\sin x=\frac{2t}{1+t^2},\cos x=\frac{1-t^2}{1+t^2}
$$

#### Trigonometric power-reduction method
For integrals of the following form

$$
\int\sin^m(x)\cos^n(x)\mathrm{d}x,\quad m,n\in\mathbb{N}
$$

- if one of $m$ or $n$ is odd, substitute for the even one

$$
\sin^2x=1-\cos^2x,\quad\cos^2x=1-\sin^2x
$$

- if both are odd, substitute either
- if both are even, use trigonometric identities

$$
\sin^2x=\frac{1-\cos2x}{2},\quad\cos^2x=\frac{1+\cos2x}{2}
$$

### Definite Integrals
#### Riemann Sum
For a function $f\in\ C([a,b],\mathbb{R})$, the definite integral is defined as the limit of the Riemann sum

$$
\int\limits_a^b f(x)\mathrm{d}x=\lim\limits_{n\to\infty}\left(h\sum\limits_{r=0}^{n-1} f(a+rh)\right)=\lim\limits_{n\to\infty}\left(h\sum\limits_{r=1}^n f(a+rh)\right)
$$

where 

$$
h=\frac{b-a}{n}
$$

Alternatively, $f\in\ C([0,p],\mathbb{R})$ for $p\in\mathbb{N}$,

$$
\lim\limits_{n\to\infty}\sum\limits_{r=1}^{pn}\frac{1}{n}f\left(\frac{r}{n}\right)=\int\limits_{\alpha=\lim\limits_{n\to\infty}\frac{r}{n}\rvert_{r=1}}^{\beta=\lim\limits_{n\to\infty}\frac{r}{n}\rvert_{r=pn}}f(x)\mathrm{d}x=\int\limits_0^p f(x)\mathrm{d}x
$$

#### General Properties
$$
\begin{align}
\quad\int\limits_a^b f(x)\mathrm{d}x&=-\int\limits_b^a f(x)\mathrm{d}x \\
\quad\int\limits_a^b f(x)\mathrm{d}x&=\int\limits_a^c f(x)\mathrm{d}x+\int\limits_c^b f(x)\mathrm{d}x\quad\textrm{[useful for for piecewise continuous]} \\
\quad\int\limits_a^b f(x)\mathrm{d}x&=\int\limits_a^b f(a+b-x)\mathrm{d}x\quad\textrm{[King's formula]} \\
\quad\int\limits_0^b f(x)\mathrm{d}x&=\int\limits_0^{b/2} f(x)\mathrm{d}x+\int\limits_0^{b/2} f(b-x)\mathrm{d}x \\
\quad\int\limits_{-b}^b f(x)\mathrm{d}x&=\int\limits_0^b f(x)\mathrm{d}x+\int\limits_0^b f(-x)\mathrm{d}x\\
\quad\int\limits_a^b f(x)\mathrm{d}x&=(b-a)\int\limits_0^1 f((b-a)x+a)\mathrm{d}x\quad\textrm{[change-of-variables identity]}
\end{align}
$$

#### Periodic Functions
For periodic functions with period $T$

$$
\begin{align}
\int\limits_a^{a+nT}f(x)\mathrm{d}x&=n\int\limits_0^T f(x)\mathrm{d}x,\quad n\in\mathbb{Z} \\
\int\limits_{a+mT}^{b+nT} f(x)\mathrm{d}x&=(n-m)\int\limits_0^T f(x)\mathrm{d}x+\int\limits_a^b f(x)\mathrm{d}x,\quad n,m\in\mathbb{Z}
\end{align}
$$

#### Leibniz Rule
For a function $f(x,t)$ whose partial derivative with respect to $x$ is continuous, and differentiable integration limits $a(x),b(x)$, define

$$
F(x)=\int\limits_{a(x)}^{b(x)} f(x,t)\mathrm{d}t
$$

differentiating with respect to $x$, we get

$$
F'(x)=\int\limits_{a(x)}^{b(x)}\frac{\partial f(x,t)}{\partial x}\mathrm{d}t+\left[f(x,t)\frac{\mathrm{d}t}{\mathrm{d}x}\right]_{t=a(x)}^{t=b(x)}
$$

When $a(x)=a$ and $b(x)=b$ are constants:

$$
F'(x)=\int\limits_{a}^{b}\frac{\partial f(x,t)}{\partial x}\mathrm{d}t
$$

This is known as Feynman's technique of differentiating under the integral sign.

### Standard Integrals
