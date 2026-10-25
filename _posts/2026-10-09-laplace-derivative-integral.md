---
layout: post
title: "Derivatives and Integrals involving Laplace Transform"
date: 2026-10-09
slug: laplace-derivative-integral
tags:
  - integral transform
  - laplace transform
  - differential equations
  - calculus
---
Derivatives and integrals involving Laplace transform are interesting as they are quite useful in many different situations, including solving ODEs or tricky integrals. I'll create other posts on some of those cool applications.

In this, I'm adding some hints to help me derive them from the first principle when I am revisiting them later. When working on these, I found two of these formulas quite easy to work out. For the other two, I had a tough time. I might make further edits to this post if I find something that makes it even easier to prove.

So let's start.

Quick context: We have a function $f:x\in X\mapsto f(x)\in\mathbb{R}$. The Laplace transform, through its exponential kernel, converts this to a different function $F:s\in S\mapsto F(s)\in\mathbb{R}$ via an improper integral as follows:

$$
F(s)=\mathcal{L}\{f(t)\}=\int\limits_0^\infty e^{-st}f(t)\mathrm{dt}
$$

Few things to note: 
- The kernel is the bit that connects the source domain and the target domain. It is exponent on both.
- The kernel is symmetric as $e^{-st}=e^{-ts}$
- The improper integral is defined in the Riemannian sense, that is, it is defined as the limit of integrals over finite domains $[0, \beta]$

$$
\Phi(s)=\int\limits_0^\infty \varphi(s, t)\mathrm{dt}=\lim\limits_{\beta\to\infty} \left( \int\limits_0^\beta \varphi(s, t)\mathrm{dt} \right)
$$

{% assign related_post = site.posts | where: "slug", "improper-integrals-sequence" | first %}

- An alternate way of defining improper integrals would involve Lebesgue integration with a sequence of functions, $\varphi_n(s, t)\to\varphi(s, t)$ as $n\to\infty$. This (might) involve the Monotone Convergence Theorem (MCT). I'll have to learn more about how that is done and how is it different (edit: see this [note]({{ related_post.url | relative_url }})).

$$
\Phi(s)=\int\limits_0^\infty \varphi(s, t)\mathrm{dt}=\lim\limits_{n\to\infty} \left( \int\limits_0^\infty \varphi_n(s, t)\mathrm{dt} \right)
$$

Aside: There is a powerful angle that connects these transforms to basis transforms in linear algebra. On the outset the integral transform looks eerily similar to multiplying a vector with a matrix, extended to continuous input dimensions.

$$
F(s)=\int\limits_0^\infty K(s,t)f(t)\mathrm{dt}\Leftrightarrow y(k)=\sum_{i=0}^n Q(k,i)x(i)
$$

Now, onto the main results. The cool thing about performing derivatives and integrals on either side is that they result in algebraic relation with regards to the transform of the original function. The results involving integrals are particularly well-behaved.

### Laplace Transforms on Derivatives
Taking derivatives on source functions result in scalar multiplication (with a shift) in the target space. The key result here is

$$
\mathcal{L}\{f'(t)\}=sF(s)-f(0)
$$

Taking derivative one more time:

$$
\mathcal{L}\{f^{\prime\prime}(t)\}=s^2F(s)-sf(0)-f'(0)
$$

... and so on.

Hint: First principle with IBP

### Laplace Transforms on Integrals
Integrating source functions result in division in the target:

$$
\mathcal{L}\left\{\int\limits_0^tf(\tau)\mathrm{d\tau}\right\}=\frac{F(s)}{s}
$$

Hint: Reuse the derivative formula by replacing the integral.

### Derivatives of Laplace Transforms
Shows the same multiplicative behaviour, but with an oscillating nature.

$$
F'(s)=\mathcal{L}\{-tf(t)\}
$$

Or, taken $n$ times,

$$
F^{(n)}(s)=\mathcal{L}\{(-1)^nt^nf(t)\}
$$

Hint: Leibniz rule of differentiating under the integral sign.

### Integrals of Laplace Transforms
Integrating on target results in division in source. The key thing to note here is that the limit of the integral on the output space is $[s,\infty)$.

$$
\int\limits_s^\infty F(\sigma)\mathrm{d\sigma}=\mathcal{L}\left\{\frac{f(t)}{t}\right\}
$$

A cool extension is that if we set $s=0$ (as long as the domain of convergence allows us to do that), we get:

$$
\int\limits_0^\infty \frac{f(t)}{t}\mathrm{dt}=\int\limits_0^\infty F(\sigma)\mathrm{d\sigma}
$$

Hint: 
- Replace the ratio. Would require invoking the fundamental theorem of calculus, which is shown below as a reminder:

$$
F(b)-F(a)=\int\limits_a^b F'(x)\mathrm{dx}\implies \left(g(t)=\int\limits_0^tf(u)\mathrm{du}\implies g'(t)=f(t)\right)
$$

- Alternatively, expand the integral into a double integral and apply Fubini.
