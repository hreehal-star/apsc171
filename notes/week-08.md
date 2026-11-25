---
title: Week 8 Notes
---

# Week 8 - Integration by Parts and Substitution

We learn three ways to find anti-derivatives (guess-and-check, substitution, integration by parts) and use slicing to build integrals for areas.

## Guess and Check

Guess an anti-derivative from the derivative rules, differentiate it, and fix any constant factor the chain rule introduces.

$$
\int \cos(3x)\,dx = \frac{1}{3}\sin(3x) + C \qquad \int e^{7x-2}\,dx = \frac{1}{7}e^{7x-2} + C
$$

This works for a non-linear "inside" function only if its derivative appears as a factor:

$$
\int x e^{-x^2}\,dx = -\frac{1}{2}e^{-x^2} + C
$$

Without the factor $x$, $\int e^{-x^2}\,dx$ is **not** $e^{-x^2}/(-2x)$ (that fails the quotient rule check).

## Substitution

Substitution is guess-and-check made systematic. It undoes the **chain rule**.

1. Pick an "inside" function $w(x)$ whose derivative $w'$ also appears as a factor.
2. Differentiate: $\frac{dw}{dx} = w'$, then isolate $dx = \frac{1}{w'}\,dw$.
3. Rewrite the integral using **only** $w$ and $dw$. If $x$'s remain or it got harder, try another substitution.
4. Integrate, then go back to $x$.

**Example:**

$$
\int x^3\sqrt{x^4 + 5}\,dx
$$

Let $w = x^4 + 5$, so

$$
dx = \frac{1}{4x^3}\,dw
$$

Then

$$
\frac{1}{4}\int w^{1/2}\,dw = \frac{1}{6}(x^4 + 5)^{3/2} + C
$$

**Example:**

$$
\int \tan x\,dx = \int \frac{\sin x}{\cos x}\,dx
$$

Let $w = \cos x$, so

$$
dx = \frac{-1}{\sin x}\,dw
$$

Then

$$
-\int \frac{1}{w}\,dw = -\ln\lvert\cos x\rvert + C
$$

**Choosing $w$:** consider

$$
\int \frac{e^x - e^{-x}}{(e^x + e^{-x})^2}\,dx
$$

Use $w = e^x + e^{-x}$. Its derivative is the numerator, which leaves $\int w^{-2}\,dw$. The other choice leaves a mix of $w$'s and $x$'s.

**Example:**

$$
\int \frac{\sin x}{1 + \cos^2 x}\,dx
$$

With $w = \cos x$:

$$
-\int \frac{1}{1 + w^2}\,dw = -\arctan(\cos x) + C
$$

### Definite integrals

Two options:

- **(a)** Convert the limits to $w$ and never return to $x$.
- **(b)** Keep the limits in $x$, integrate, convert back to $x$, then evaluate.

**Example (a):**

$$
\int_0^{\pi/2} \frac{\sin x}{1 + \cos^2 x}\,dx
$$

With $w = \cos x$, the limits change:

- $x = 0 \to w = 1$
- $x = \frac{\pi}{2} \to w = 0$

So

$$
-\int_1^0 \frac{1}{1 + w^2}\,dw = \int_0^1 \frac{1}{1 + w^2}\,dw = \arctan 1 - \arctan 0 = \frac{\pi}{4}
$$

**Example (b):**

$$
\int_9^{64} \frac{\sqrt{1 + \sqrt{x}}}{\sqrt{x}}\,dx
$$

Let $w = 1 + \sqrt{x}$, so $dx = 2\sqrt{x}\,dw$. Then

$$
2\int w^{1/2}\,dw = \frac{4}{3}(1 + \sqrt{x})^{3/2}\Big|_9^{64} = \frac{4}{3}(27) - \frac{4}{3}(8) = \frac{76}{3}
$$

## Integration by Parts

Substitution fails for $\int x e^{4x}\,dx$. By parts comes from the **product rule**: integrate $\frac{d}{dx}(uv) = u'v + uv'$ and rearrange.

$$
\int u\,dv = uv - \int v\,du
$$

Pick $u$, then $dv$ is the rest. Differentiate $u$ to get $du$, integrate $dv$ to get $v$ (skip the $+C$), and hope the new integral is easier.

**Choosing $u$ and $dv$:**

- Pick $u$ so that $u'$ is simpler than $u$ (or so that $\int dv$ is simpler than $dv$).
- You must be able to integrate $dv$ on its own.
- You may need to experiment.

**Example:**

$$
\int x e^{4x}\,dx
$$

Let $u = x$ and $dv = e^{4x}\,dx$. Then

$$
du = dx, \qquad v = \frac{e^{4x}}{4}
$$

So

$$
\frac{x}{4}e^{4x} - \frac{1}{4}\int e^{4x}\,dx = \frac{x}{4}e^{4x} - \frac{1}{16}e^{4x} + C
$$

**Example:**

$$
\int x\cos x\,dx
$$

Let $u = x$ and $dv = \cos x\,dx$. Then

$$
x\sin x - \int \sin x\,dx = x\sin x + \cos x + C
$$

**Example (twice):**

$$
\int x^2\cos x\,dx
$$

Let $u = x^2$ and $dv = \cos x\,dx$. Then

$$
x^2\sin x - 2\int x\sin x\,dx = x^2\sin x + 2x\cos x - 2\sin x + C
$$

The remaining $\int x\sin x\,dx$ is done by parts again.

**Definite integrals:** apply the limits to the **whole** anti-derivative, including the $uv$ term.

$$
\int_0^\pi x\sin(4x)\,dx = -\frac{x}{4}\cos(4x)\Big|_0^\pi + \frac{1}{4}\int_0^\pi \cos(4x)\,dx = -\frac{\pi}{4}
$$

**Single factor:** $dv$ can just be $dx$. For

$$
\int_1^2 \ln x\,dx
$$

let $u = \ln x$ and $dv = dx$. Then

$$
x\ln x\Big|_1^2 - \int_1^2 1\,dx = 2\ln 2 - 1
$$

## Integrals as Sums of Slices

To build an integral for an area:

1. Choose the slicing direction (perpendicular to $x$ or to $y$).
2. Find the area of a generic slice as a function of its position.
3. Write the sum of all slices, then take the limit ($\Delta \to 0$) to get an integral.
4. Evaluate.

The same region can be sliced either way. For the area under $y = x^2$ from $x = 0$ to $2$:

**Vertical slices:**

$$
\int_0^2 x^2\,dx = \frac{8}{3}
$$

**Horizontal slices:** the width is $x_{high} - x_{low} = 2 - \sqrt{y}$, so

$$
\int_0^4 (2 - \sqrt{y})\,dy = \left(2y - \frac{2}{3}y^{3/2}\right)\Big|_0^4 = \frac{8}{3}
$$

**General rule:** (width) $=$ (high $-$ low) of the slice, e.g. $x_{high} - x_{low}$ for horizontal slices.

**Example:** Area between $x = y^2$ and $y = x$. They meet at $(0,0)$ and $(1,1)$.

For a horizontal slice:

- $x_{high} = y$ (on $y = x$)
- $x_{low} = y^2$

So

$$
\int_0^1 (y - y^2)\,dy = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}
$$
