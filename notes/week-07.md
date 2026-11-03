---
title: Week 7 Notes
---

# Week 7 - The Fundamental Theorem of Calculus

We learn the properties of definite integrals, then the Fundamental Theorem of Calculus (F.T.C.), which lets us compute exact areas using anti-derivatives instead of Riemann sums.

## Definite Integrals and Net Change

A key use of integration is turning a known **rate of change** into a **net change** over an interval. Each rectangle in a Riemann sum is (rate) $\times$ (time), so the integral adds up the small changes.

**Example (tank):** Water flows into a tank at $r(t) = 200 - 10t$ L/min (positive means in). The change in volume over the first 30 minutes is

$$
\Delta V = \int_0^{30} (200 - 10t)\,dt
$$

Estimating with $LEFT(3)$ and $\Delta t = 10$:

$$
\Delta V \approx \big[r(0) + r(10) + r(20)\big](10) = (200 + 100 + 0)(10) = 3000 \text{ L}
$$

This gives the **change** in volume, not the volume itself. To know the actual volume after 30 minutes we would also need the starting volume.

**Example (growth):** If $h(t)$ is a child's height in cm, the amount grown between ages 10 and 18 is $\displaystyle\int_{10}^{18} h'(t)\,dt$. We integrate the **rate** $h'$, not $h$. Adding the starting height of $120$ cm would give the height at age 18.

Check units: $\frac{\text{cm}}{\text{year}} \cdot \text{years} = \text{cm}$.

## Properties of Definite Integrals

**Additive interval property:** splitting the interval splits the area.

$$
\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx
$$

**Example:** Given $\displaystyle\int_0^{\pi/3} \cos x\,dx = \frac{\sqrt{3}}{2}$, symmetry of $\cos x$ about the $y$-axis gives

$$
\int_{-\pi/3}^{\pi/3} \cos x\,dx = 2\cdot\frac{\sqrt{3}}{2} = \sqrt{3}
$$

**Reversed interval property:** swapping the limits flips the sign.

$$
\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx
$$

Why: going from $b$ to $a$ makes $\Delta x = \frac{a - b}{n}$ **negative**, so every term in the Riemann sum flips sign. It also follows from the additive property: $\int_0^{\pi/3} + \int_{\pi/3}^0 = \int_0^0 = 0$.

**Linearity:** constants come out front, and sums/differences split.

$$
\int_a^b k f(x)\,dx = k\int_a^b f(x)\,dx
$$

$$
\int_a^b \big(f(x) \pm g(x)\big)\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx
$$

**Example:** If $\int_a^b f = 2$ and $\int_a^b g = 4$, then $\int_a^b (f + g)\,dx = 2 + 4 = 6$. Also, if $\int_a^b f = 10$, then $\int_a^b 5f\,dx = 50$.

## The Fundamental Theorem of Calculus

> If $f$ is continuous on $[a, b]$ and $F'(x) = f(x)$ (so $F$ is an **anti-derivative** of $f$), then
>
> $$\int_a^b f(x)\,dx = F(b) - F(a)$$

- The integral is the hard, conceptual part (a limit of sums). Evaluating $F(b) - F(a)$ is easy **if** we can find $F$.
- Differentiating goes $F \to f$ (slopes). Anti-differentiating goes $f \to F$ (areas).
- The answer is **exact**, not an estimate like a Riemann sum.

**Example:** Area under $y = x^2$ from $0$ to $2$. An anti-derivative is $F(x) = \frac{1}{3}x^3$, so

$$
\int_0^2 x^2\,dx = F(2) - F(0) = \frac{8}{3} - 0 = \frac{8}{3}
$$

**The constant doesn't matter.** Using $F(x) = \frac{1}{3}x^3 + 1$ gives $\left(\frac{8}{3} + 1\right) - (0 + 1) = \frac{8}{3}$, the same answer, because the $C$ cancels in $F(b) - F(a)$. Any anti-derivative of $f$ has the form $F(x) + C$, so we can always drop $C$ when evaluating a definite integral.

## Basic Anti-Derivatives

To check an anti-derivative, differentiate it and see if you get $f(x)$ back.

| $f(x)$ | Anti-derivative $F(x)$ |
|---|---|
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1} + C$ (add one to the power, divide by the new power) |
| $\cos x$ | $\sin x + C$ |
| $\sin x$ | $-\cos x + C$ |
| $e^x$ | $e^x + C$ |
| $2^x$ | $\dfrac{2^x}{\ln 2} + C$ |
| $\dfrac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + C$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x + C$ |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert + C$ |

Anti-derivatives work term by term (linearity). For example:

$$
\int (x^2 + 3x - 2)\,dx = \frac{x^3}{3} + \frac{3x^2}{2} - 2x + C
$$

$$
\int (x + \sin x)\,dx = \frac{x^2}{2} - \cos x + C
$$

**Example:** The area of the triangle under $y = 4x$ from $x = 0$ to $x = 4$.

- Geometry: $\frac{1}{2}(4)(16) = 32$.
- F.T.C.: $\displaystyle\int_0^4 4x\,dx = 2x^2\Big|_0^4 = 32 - 0 = 32$. ✓

**Example:** The area under $y = 6x^2$ from $0$ to $5$:

$$
\int_0^5 6x^2\,dx = 2x^3\Big|_0^5 = 2(125) = 250
$$

### The special case $\frac{1}{x}$

The anti-derivative of $\frac{1}{x}$ is $\ln\lvert x\rvert$, **with absolute value**. Without it, $\ln x$ is undefined for negative $x$, but $\frac{1}{x}$ is defined there. Both $\ln\lvert x\rvert$ and $\frac{1}{x}$ are valid on either side of $x = 0$ (the slopes of $\ln\lvert x\rvert$ are the values of $\frac{1}{x}$).

**Example:**

$$
\int_{-3}^{-1} \frac{1}{x}\,dx = \ln\lvert x\rvert\Big|_{-3}^{-1} = \ln 1 - \ln 3 = -\ln 3 \approx -1.0986
$$

The result is **negative** because $\frac{1}{x} < 0$ on this interval, so the region lies below the $x$-axis.

## Indefinite Integrals and Notation

- The **indefinite integral** $\int f(x)\,dx$ (no limits) means the anti-derivative(s) of $f$. It is a **function** (a family of functions), e.g. $\int x^2\,dx = \frac{x^3}{3} + C$.
- The **definite integral** $\int_a^b f(x)\,dx$ is a **number**.
- Evaluation bar notation: $F(x)\Big|_a^b = F(b) - F(a)$.
- The variable of integration is a dummy variable: $\int_a^b f(x)\,dx = \int_a^b f(u)\,du = \int_a^b f(\theta)\,d\theta$.

**Catch:** finding an anti-derivative can be hard for complicated functions. Later weeks cover techniques for this.

## Net Change Theorem

Since $F' = f$, the integrand is the **rate of accumulation**, and the F.T.C. can be read as

$$
\int_a^b F'(x)\,dx = F(b) - F(a) \qquad \text{(end} - \text{start)}
$$

> **The integral of a rate of change is the net change.**

For example, $\int_a^b v(t)\,dt = s(b) - s(a)$ is the **net change in position** (not the position itself, and not the total distance if the object turns around).

**Example (car):** If $v(t) = 2t$ m/s, then $\int_1^5 v(t)\,dt$ is the net change in position between $t = 1$ and $t = 5$. It equals $t^2\Big|_1^5 = 25 - 1 = 24$ m.

**Example (tank):** With $r(t) = 200 - 10t$ L/min, the change in volume over the first 45 minutes is

$$
\int_0^{45} (200 - 10t)\,dt = \left(200t - 5t^2\right)\Big|_0^{45} = 9000 - 10125 = -1125 \text{ L}
$$

The tank **loses** $1125$ L. For this to make sense, the tank must have started with at least $1125$ L. Compare with the earlier estimate: over the first 30 minutes the exact change is $200(30) - 5(30)^2 = 1500$ L, so $LEFT(3) = 3000$ L was a big overestimate (as expected for a decreasing function, and with only 3 rectangles).
