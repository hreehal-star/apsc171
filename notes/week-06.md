---
title: Week 6 Notes
---

# Week 6 - Defining and Estimating Integrals as Areas

We learn how to find the area under a curve by adding up thin rectangles, define the definite integral as the limit of those sums, and look at more efficient ways to estimate it (midpoint and trapezoidal rules).

## Distance and Area

If velocity is constant, then distance $=$ velocity $\times$ time, which is the **area of a rectangle** under the velocity vs. time graph. For example, $4$ m/s for $8$ s gives $32$ m.

If velocity is changing, we can't use this directly, but over a short time the velocity is roughly constant. Adding up many of these small rectangles estimates the total distance. So:

> **Distance traveled = area under the velocity graph**, even when the velocity changes.

Whenever the region is a shape we recognize (triangle, rectangle, circle), we can find the area exactly with geometry.

**Example:** The area between the $x$-axis and $y = x + 1$ from $x = -1$ to $x = 1$ is a triangle with base $2$ and height $2$:

$$
A = \tfrac{1}{2}(2)(2) = 2 \text{ square units}
$$

**Example:** $y = \sqrt{1 - x^2}$ is equivalent to $x^2 + y^2 = 1$ with $y \geq 0$, the top half of a circle of radius $1$. So

$$
A = \tfrac{1}{2}\pi(1)^2 = \frac{\pi}{2}
$$

Most curves aren't made of simple shapes, so we need a way to **estimate** area.

## Estimating Area with Rectangles

A crude estimate uses one rectangle: the area is **less** than a rectangle that contains the region (overestimate) and **more** than a rectangle inside it (underestimate). We improve this by splitting $[a, b]$ into $n$ intervals of equal width

$$
\Delta x = \frac{b - a}{n}
$$

with endpoints $a = x_0 < x_1 < \cdots < x_n = b$, and using one rectangle (height $\times$ width) on each interval.

| Sum | Height of each rectangle | Formula |
|---|---|---|
| **Left hand sum** $LEFT(n)$ | $f$ at the **left** endpoint | $\displaystyle\sum_{i=1}^{n} f(x_{i-1})\,\Delta x$ |
| **Right hand sum** $RIGHT(n)$ | $f$ at the **right** endpoint | $\displaystyle\sum_{i=1}^{n} f(x_{i})\,\Delta x$ |

**Example:** From a graph, $f(1) \approx 1$, $f(2) \approx 3$, $f(3) \approx 4$. With $n = 3$ and $\Delta x = 1$ on $[1, 4]$,

$$
LEFT(3) = 1(1) + 3(1) + 4(1) = 8
$$

**Over vs. under estimates:**

- If $f$ is **increasing**: $LEFT(n)$ is an **underestimate**, $RIGHT(n)$ is an **overestimate**, and $LEFT(n) < RIGHT(n)$.
- If $f$ is **decreasing**: $LEFT(n)$ is an **overestimate**, $RIGHT(n)$ is an **underestimate**, and $LEFT(n) > RIGHT(n)$.

### Riemann Sums

$LEFT(n)$ and $RIGHT(n)$ are both **Riemann sums**. The general form is

$$
\sum_{i=1}^{n} f(x_i^*)\,\Delta x
$$

where $x_i^*$ is **any** point in the interval $[x_{i-1}, x_i]$. Every Riemann sum is a sum of rectangle areas: **heights** $f(x_i^*)$ times **widths** $\Delta x$.

## The Definite Integral

More rectangles give a better estimate, so the **exact** area comes from a limit as the number of rectangles goes to infinity (equivalently $\Delta x \to 0$):

$$
\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_{i-1})\,\Delta x
$$

This limit is the **definite integral** of $f$ from $a$ to $b$. It equals the area under the curve when $f$ is continuous and non-negative.

- $a$ and $b$ are the **limits of integration**, and $f(x)$ is the **integrand**.
- $dx$ says which variable we are integrating over.
- The notation mirrors a Riemann sum: $\int$ is the sum, $f(x)$ the heights, $dx$ the widths.

**Example:** The area under $f(x) = x + \cos x$ from $x = 2$ to $x = 4$ is $\displaystyle\int_2^4 (x + \cos x)\,dx$.

### Does it matter which sum we use?

No. Any Riemann sum gives the same limit. For $f(x) = 2^x$ on $[1, 3]$ (an increasing function):

$$
RIGHT(2) - LEFT(2) = 12 - 6 = 6, \qquad RIGHT(4) - LEFT(4) = 10.243 - 7.243 = 3
$$

In general the two sums differ by only the end rectangles, because everything else cancels:

$$
RIGHT(n) - LEFT(n) = \big(f(b) - f(a)\big)\Delta x = 6\,\Delta x \to 0 \text{ as } n \to \infty
$$

So $\lim LEFT(n) = \lim RIGHT(n)$. The only thing that matters is that the number of intervals goes to infinity.

## Area Between Two Curves

To find the area between two curves, each rectangle has

$$
\text{height} = y_{\text{upper}} - y_{\text{lower}}
$$

**Example:** The region between $y = 2 - x$ (upper) and $y = x^2$ (lower). The curves meet when $x^2 = 2 - x$, i.e. $x = -2$ and $x = 1$. Here $\Delta x = \frac{1 - (-2)}{n} = \frac{3}{n}$, and

$$
\text{Area} = \int_{-2}^{1} \Big[(2 - x) - x^2\Big]\,dx
$$

## Negative Values: Signed Area

If $f$ is negative, then $f(x_i^*)\Delta x$ is negative, so those rectangles **subtract** from the sum. The definite integral is a **signed area**: area above the $x$-axis counts positive, area below counts negative.

For a graph with positive regions $A, C, E$ above the axis and $B, D$ below it (where $A, B, C, D, E$ are all positive areas):

$$
\int_a^b f(t)\,dt = A - B + C - D + E
$$

**Velocity interpretation:** if $f$ is velocity, positive area is distance traveled **forward** and the "negative area" is distance traveled **backward**. The integral gives the **net** change in position (displacement), not the total distance.

## Better Estimates: Midpoint and Trapezoid

$LEFT(n)$ and $RIGHT(n)$ are crude, and some integrals (like $\int e^{-x^2}dx$ or $\int \frac{\sin x}{x}dx$) can't be done exactly with the usual techniques. We want estimates that are more **efficient**: more accurate for about the same work.

### Midpoint Rule

Use the **midpoint** of each interval for the height: $x_i^* = \frac{x_{i-1} + x_i}{2}$. This is usually more accurate than left or right because the over- and under-shoot on each rectangle roughly cancel. It is **exact for linear functions**, since the triangle sticking out on one side matches the triangle missing on the other.

### Trapezoidal Rule

Instead of rectangles, use a **trapezoid** on each interval. The area of one trapezoid is the average of its two heights times the width:

$$
\frac{f(x_{i-1}) + f(x_i)}{2}\,\Delta x
$$

Adding them up, the interior points are counted twice (once as a right edge, once as a left edge) so only the endpoints are halved:

$$
TRAP(n) = \Delta x\left[\frac{f(x_0)}{2} + f(x_1) + f(x_2) + \cdots + f(x_{n-1}) + \frac{f(x_n)}{2}\right]
$$

It is also the **average of the left and right sums**:

$$
TRAP(n) = \frac{LEFT(n) + RIGHT(n)}{2}
$$

**Why it works well when $|f''|$ is small:** $f''$ measures curvature. If $|f''|$ is small, the graph is close to a straight line on each interval, and a trapezoid fits a straight line exactly.

**Example:** Estimate $\int_0^{10} f(x)\,dx$ from the table below, with $\Delta x = 2$.

| $x$ | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| $f(x)$ | 1 | 3 | 4 | 5 | 4 | 2 |

$$
TRAP(5) = 2\left[\frac{1}{2} + 3 + 4 + 5 + 4 + \frac{2}{2}\right] = 2(17.5) = 35
$$

## Worked Example: $LEFT(6)$ and $RIGHT(6)$

Estimate the area under the graph on $[1, 4]$ with $n = 6$, so $\Delta x = \frac{4 - 1}{6} = 0.5$. Reading heights from the graph:

$$
LEFT(6) = 0.5\,(1 + 1.6 + 3 + 3.5 + 4 + 4.2) = 8.65
$$

$$
RIGHT(6) = 0.5\,(1.6 + 3 + 3.5 + 4 + 4.2 + 4.5) = 10.4
$$

The function is increasing, so $LEFT(6) < \text{area} < RIGHT(6)$. The trapezoid estimate is the average, $\frac{8.65 + 10.4}{2} \approx 9.5$.
