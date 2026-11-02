---
layout: post
title: "Integral Tricks Problem Sheet: Level 1"
date: 2026-11-02
slug: integral-tricks-problem-sheet-level-1
tags:
  - calculus
  - single variable calculus
  - bag of tricks
  - revision
---
### Practice Problems

Difficulty: ★ warm-up, ★★ standard, ★★★ challenging. Problems follow the order of the sections above. Answers are in the key at the end.

#### Basic Moves

1. ★★ $\int\arctan x\,\mathrm{d}x$
2. ★★ $\int\sin\left(\sqrt{x}\right)\mathrm{d}x$

#### Splitting the Integrand

3. ★ $\int\frac{x^3}{x^2-1}\mathrm{d}x$
4. ★★ $\int\frac{1}{(x-1)^2(x+2)}\mathrm{d}x$
5. ★★★ $\int\frac{1}{x(x^2+1)^2}\mathrm{d}x$
6. ★★ $\int\frac{2x+3}{x^2+2x+5}\mathrm{d}x$
7. ★★ $\int\frac{x+1}{\sqrt{x^2+4x+7}}\mathrm{d}x$
8. ★★★ $\int\frac{1}{(x+1)\sqrt{x^2+1}}\mathrm{d}x$, for $x>-1$
9. ★★ $\int\frac{\sin x+2\cos x}{\sin x+\cos x}\mathrm{d}x$
10. ★★ $\int\frac{\sin x+2}{1+\cos x}\mathrm{d}x$
11. ★ $\int\sin^3x\cos^2x\,\mathrm{d}x$
12. ★★ $\int\sin^2x\cos^2x\,\mathrm{d}x$

#### Making It Rational

13. ★ $\int\frac{x}{\sqrt{x+1}}\mathrm{d}x$
14. ★★★ $\int\frac{1}{(x-1)^{3/4}(x+2)^{5/4}}\mathrm{d}x$, for $x>1$
15. ★★ $\int\frac{1}{x^2\sqrt{x^2+9}}\mathrm{d}x$
16. ★★ $\int\sqrt{\frac{1-x}{1+x}}\,\mathrm{d}x$, for $-1<x<1$
17. ★★ $\int\limits_a^b\frac{1}{\sqrt{(x-a)(b-x)}}\mathrm{d}x$, for $a<b$
18. ★★ $\int\frac{1}{x+\sqrt{x^2+1}}\mathrm{d}x$
19. ★★ $\int\frac{1}{2+\cos x}\mathrm{d}x$, for $-\pi<x<\pi$
20. ★★★ $\int\limits_0^{2\pi}\frac{1}{2+\cos x}\mathrm{d}x$. What goes wrong if you apply $t=\tan(x/2)$ directly over the whole interval?

#### Structural Substitutions

21. ★★ $\int\frac{x^2+1}{x^4+1}\mathrm{d}x$
22. ★★★ $\int\frac{x^2-1}{x^4+1}\mathrm{d}x$
23. ★★★ $\int\sqrt{\tan x}\,\mathrm{d}x$, for $0<x<\frac{\pi}{2}$

#### Definite Integrals

24. ★★ $\lim\limits_{n\to\infty}\frac{(n!)^{1/n}}{n}$
25. ★★ $\int\limits_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\mathrm{d}x$
26. ★★★ $\int\limits_0^{\pi}\frac{x\sin x}{1+\cos^2x}\mathrm{d}x$
27. ★★ $\int\limits_{-\pi}^{\pi}\frac{\sin^2x}{1+e^x}\mathrm{d}x$
28. ★★ $\int\limits_{37}^{37+4\pi}\sin^2x\,\mathrm{d}x$
29. ★ $\frac{\mathrm{d}}{\mathrm{d}x}\int\limits_x^{x^2}e^{-t^2}\mathrm{d}t$
30. ★★★ $\int\limits_0^1\frac{x^b-1}{\ln x}\mathrm{d}x$, for $b>-1$

### Answer Key

1. $x\arctan x-\frac{1}{2}\ln(1+x^2)+C$. Parts with $u=\arctan x$, $\mathrm{d}v=\mathrm{d}x$.
2. $2\sin\sqrt{x}-2\sqrt{x}\cos\sqrt{x}+C$. Substitute $t=\sqrt{x}$, then parts on $2\int t\sin t\,\mathrm{d}t$.
3. $\frac{x^2}{2}+\frac{1}{2}\ln\left|x^2-1\right|+C$. Polynomial division gives $x+\frac{x}{x^2-1}$.
4. $\frac{1}{9}\ln\left|\frac{x+2}{x-1}\right|-\frac{1}{3(x-1)}+C$. Partial fractions: $-\frac{1/9}{x-1}+\frac{1/3}{(x-1)^2}+\frac{1/9}{x+2}$.
5. $\ln|x|-\frac{1}{2}\ln(x^2+1)+\frac{1}{2(x^2+1)}+C$. Partial fractions: $\frac{1}{x}-\frac{x}{x^2+1}-\frac{x}{(x^2+1)^2}$.
6. $\ln(x^2+2x+5)+\frac{1}{2}\arctan\frac{x+1}{2}+C$. Write $2x+3=(2x+2)+1$, i.e. $L=pQ'+q$.
7. $\sqrt{x^2+4x+7}-\ln\left(x+2+\sqrt{x^2+4x+7}\right)+C$. Write $x+1=\frac{1}{2}(2x+4)-1$.
8. $-\frac{1}{\sqrt{2}}\ln\frac{1-x+\sqrt{2}\sqrt{x^2+1}}{x+1}+C$. Substitute $L(x)=x+1=1/t$, which gives $-\int\frac{\mathrm{d}t}{\sqrt{2t^2-2t+1}}$.
9. $\frac{3x}{2}+\frac{1}{2}\ln|\sin x+\cos x|+C$. Here $N=pD+qD'$ with $p=\frac{3}{2}$, $q=\frac{1}{2}$.
10. $2\tan\frac{x}{2}-\ln(1+\cos x)+C$. Here $N=qD'+r$ with $q=-1$, $r=2$. The $r$ part needs $\int\frac{\mathrm{d}x}{1+\cos x}=\tan\frac{x}{2}$.
11. $-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C$. Peel off one $\sin x$, write $\sin^2x=1-\cos^2x$, and set $u=\cos x$.
12. $\frac{x}{8}-\frac{\sin4x}{32}+C$. Use $\sin^2x\cos^2x=\frac{1}{4}\sin^22x=\frac{1-\cos4x}{8}$.
13. $\frac{2}{3}(x+1)^{3/2}-2\sqrt{x+1}+C$. Rationalise with $t^2=x+1$.
14. $\frac{4}{3}\left(\frac{x-1}{x+2}\right)^{1/4}+C$. Möbius with $t=\frac{x-1}{x+2}$, $\mathrm{d}t=\frac{3\,\mathrm{d}x}{(x+2)^2}$, so the integrand becomes $\frac{1}{3}t^{-3/4}\mathrm{d}t$.
15. $-\frac{\sqrt{x^2+9}}{9x}+C$. Substitute $x=3\tan\theta$, which gives $\frac{1}{9}\int\frac{\cos\theta}{\sin^2\theta}\mathrm{d}\theta$.
16. $\sqrt{1-x^2}-\arccos x+C$. Substitute $x=\cos2\theta$, which gives $-4\int\sin^2\theta\,\mathrm{d}\theta$.
17. $\pi$, independent of $a$ and $b$. Substitute $x=a\cos^2\theta+b\sin^2\theta$, which turns the integrand into $2\,\mathrm{d}\theta$ over $\left[0,\frac{\pi}{2}\right]$.
18. $\frac{1}{2}x\sqrt{x^2+1}+\frac{1}{2}\ln\left(x+\sqrt{x^2+1}\right)-\frac{x^2}{2}+C$. Euler substitution $t=x+\sqrt{x^2+1}$, giving $\frac{1}{2}\int\left(\frac{1}{t}+\frac{1}{t^3}\right)\mathrm{d}t$. Equivalently, $\frac{1}{x+\sqrt{x^2+1}}=\sqrt{x^2+1}-x$. The two forms differ by a constant.
19. $\frac{2}{\sqrt{3}}\arctan\left(\frac{1}{\sqrt{3}}\tan\frac{x}{2}\right)+C$. Weierstrass: the integrand becomes $\frac{2\,\mathrm{d}t}{3+t^2}$.
20. $\frac{2\pi}{\sqrt{3}}$. Naively, $t=\tan\frac{x}{2}$ runs from $0$ to $\tan\pi=0$ and gives $0$, which is wrong because the substitution is discontinuous at $x=\pi$. Split at $\pi$ (or use symmetry): $2\int\limits_0^\pi=2\cdot\frac{2}{\sqrt{3}}\cdot\frac{\pi}{2}$.
21. $\frac{1}{\sqrt{2}}\arctan\frac{x^2-1}{\sqrt{2}\,x}+C$, on $x>0$ or $x<0$ separately. Divide by $x^2$ and set $u=x-\frac{1}{x}$, giving $\int\frac{\mathrm{d}u}{u^2+2}$.
22. $\frac{1}{2\sqrt{2}}\ln\left|\frac{x^2-\sqrt{2}x+1}{x^2+\sqrt{2}x+1}\right|+C$. Divide by $x^2$ and set $u=x+\frac{1}{x}$, giving $\int\frac{\mathrm{d}u}{u^2-2}$.
23. $\frac{1}{\sqrt{2}}\arctan\frac{\tan x-1}{\sqrt{2\tan x}}+\frac{1}{2\sqrt{2}}\ln\left|\frac{\tan x-\sqrt{2\tan x}+1}{\tan x+\sqrt{2\tan x}+1}\right|+C$. Substitute $t^2=\tan x$, so the integral is $\int\frac{2t^2}{t^4+1}\mathrm{d}t$. Then split $2t^2=(t^2+1)+(t^2-1)$ and use 21 and 22.
24. $\frac{1}{e}$. Take the log: $\frac{1}{n}\sum\limits_{r=1}^n\ln\frac{r}{n}\to\int\limits_0^1\ln x\,\mathrm{d}x=-1$.
25. $\frac{\pi}{4}$. King's formula gives $2I=\int\limits_0^{\pi/2}1\,\mathrm{d}x$.
26. $\frac{\pi^2}{4}$. King's formula gives $2I=\pi\int\limits_0^\pi\frac{\sin x}{1+\cos^2x}\mathrm{d}x=\pi\left[-\arctan(\cos x)\right]_0^\pi=\frac{\pi^2}{2}$.
27. $\frac{\pi}{2}$. Use $\int\limits_{-b}^b f=\int\limits_0^b\left(f(x)+f(-x)\right)$. Here $\frac{1}{1+e^x}+\frac{1}{1+e^{-x}}=1$, leaving $\int\limits_0^\pi\sin^2x\,\mathrm{d}x$.
28. $2\pi$. The period of $\sin^2x$ is $\pi$, so the interval is four full periods and the offset $37$ is irrelevant: $4\int\limits_0^\pi\sin^2x\,\mathrm{d}x$.
29. $2xe^{-x^4}-e^{-x^2}$. Leibniz rule with $a(x)=x$, $b(x)=x^2$ and no $x$ inside $f$.
30. $\ln(1+b)$. Call the integral $I(b)$. Then $I'(b)=\int\limits_0^1x^b\,\mathrm{d}x=\frac{1}{b+1}$ and $I(0)=0$.
