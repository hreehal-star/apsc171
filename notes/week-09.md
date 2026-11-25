---
title: Week 9 Notes
---

# Week 9 - Integrals for Volume and Work; Partial Fractions

We use slicing to build integrals for volumes and work, then learn partial fractions for integrating rational functions.

## Volumes by Slicing

$$
\text{volume of slice} = (\text{cross-section area})(\text{thickness})
$$

Write the slice's size in terms of its position, add up the slices, and take the limit to get an integral.

**Pyramid** (equilateral triangle base of side $3$, height $5$). A slice at depth $h$ below the tip has:

- side $a = \frac{3}{5}h$ (similar triangles)
- area $\frac{\sqrt{3}}{4}a^2$

So

$$
V = \int_0^5 \frac{\sqrt{3}}{4}\left(\frac{3}{5}h\right)^2 dh = \frac{9\sqrt{3}}{100}\cdot\frac{5^3}{3} = \frac{15\sqrt{3}}{4} \approx 6.495
$$

**Cone** (height $h$, base radius $r$). At depth $y$ the radius is

$$
R = \frac{r}{h}\,y
$$

So

$$
V = \int_0^h \pi\left(\frac{r}{h}y\right)^2 dy = \frac{\pi r^2}{h^2}\cdot\frac{h^3}{3} = \frac{\pi r^2 h}{3}
$$

## Volumes of Revolution

Spinning a region around an axis gives slices that are **circles** (disks) when cut perpendicular to the axis. Choose slices perpendicular to the axis of rotation.

**Around the $x$-axis:** $y = e^{-x}$ for $0 \le x \le 3$. The radius is $e^{-x}$, so

$$
V = \int_0^3 \pi\left(e^{-x}\right)^2 dx = \pi\int_0^3 e^{-2x}\,dx = \frac{\pi}{2}\left(1 - e^{-6}\right) \approx 1.57
$$

**Around the $y$-axis:** $y = e^{-x}$ for $0.1 \le y \le 1$. Slice perpendicular to $y$. The radius is $x = -\ln y$, so

$$
V = \int_{0.1}^1 \pi(-\ln y)^2\,dy = \pi\int_{0.1}^1 (\ln y)^2\,dy
$$

By parts twice, an anti-derivative is $y(\ln y)^2 - 2y\ln y + 2y$, giving $V \approx 2.54$.

### Rings (washers)

If the slice has a hole, it is a ring:

$$
\text{ring area} = \pi r_{out}^2 - \pi r_{in}^2 \qquad (\text{not } \pi(r_{out} - r_{in})^2)
$$

**Example:** The region bounded by $y = \sqrt{x}$, $y = 0$ and $x = 4$, rotated about the $y$-axis.

Slicing perpendicular to $y$:

- $r_{out} = 4$
- $r_{in} = x = y^2$
- $y$ runs from $0$ to $2$

So

$$
V = \pi\int_0^2 \left(16 - y^4\right)dy = \pi\left(32 - \frac{32}{5}\right) = \frac{128\pi}{5} \approx 80.42
$$

## Partial Fractions

A purely algebraic method to integrate $\dfrac{P(x)}{Q(x)}$ (polynomials), when substitution and by parts don't work.

### Step 1: make it proper

A rational function is **proper** if $\deg P < \deg Q$. If not, use long division (or an algebra shortcut):

$$
\frac{P}{Q} = S(x) + \frac{R(x)}{Q(x)}
$$

where $S$ is a polynomial (easy to integrate) and $R/Q$ is proper.

**Example:**

$$
\frac{x^2 - 4x + 3}{x - 5} = (x + 1) + \frac{8}{x - 5}
$$

**Example:** (add and subtract $2$ in the numerator)

$$
\frac{x^2 + 1}{x^2 - 1} = 1 + \frac{2}{x^2 - 1}
$$

### Step 2: decompose by the factors of $Q$

**Case I (distinct linear factors):** one term per factor.

$$
\frac{R(x)}{(a_1x + b_1)(a_2x + b_2)\cdots} = \frac{A_1}{a_1x + b_1} + \frac{A_2}{a_2x + b_2} + \cdots
$$

**Case II (repeated linear factors):** if $(ax + b)$ appears to the power $r$, use $r$ terms:

$$
\frac{A_1}{ax + b} + \frac{A_2}{(ax + b)^2} + \cdots + \frac{A_r}{(ax + b)^r}
$$

Skipping terms makes the system of equations unsolvable. Cases III and IV (quadratic factors) were only covered if time remained.

### Finding the constants

Combine over a common denominator and compare **numerators**, which must be equal for all $x$. Two ways, and you can mix them:

- **Plug in convenient $x$** (the roots of the factors) to make most terms vanish.
- **Equate coefficients** of each power of $x$ (needed for the leftover constants).

**Example (Case I):**

$$
\int \frac{x}{(x + 2)(x + 1)}\,dx
$$

We need $x = A(x + 1) + B(x + 2)$. Equating coefficients:

- $A + B = 1$
- $A + 2B = 0$

So $A = 2$ and $B = -1$, and

$$
\int \frac{2}{x + 2} - \frac{1}{x + 1}\,dx = 2\ln\lvert x + 2\rvert - \ln\lvert x + 1\rvert + C
$$

**Example (three factors):**

$$
\int \frac{3x^2 - 2}{(x - 1)(x - 2)(x + 1)}\,dx
$$

Plugging in $x = 1, 2, -1$ gives

$$
A = -\frac{1}{2}, \qquad B = \frac{10}{3}, \qquad C = \frac{1}{6}
$$

So

$$
-\frac{1}{2}\ln\lvert x - 1\rvert + \frac{10}{3}\ln\lvert x - 2\rvert + \frac{1}{6}\ln\lvert x + 1\rvert + D
$$

**Example (Case II):**

$$
\int \frac{dx}{x^2(x - 1)^2}
$$

Use

$$
\frac{A}{x} + \frac{B}{x^2} + \frac{C}{x - 1} + \frac{D}{(x - 1)^2}
$$

Plugging in $x = 0$ gives $B = 1$, and $x = 1$ gives $D = 1$. Equating coefficients gives $A = 2$ and $C = -2$. So

$$
2\ln\lvert x\rvert - \frac{1}{x} - 2\ln\lvert x - 1\rvert - \frac{1}{x - 1} + E
$$

**Example:**

$$
\int \frac{dx}{(x - 1)(x + 2)^2}
$$

Use

$$
\frac{A}{x - 1} + \frac{B}{x + 2} + \frac{C}{(x + 2)^2}
$$

This gives

$$
A = \frac{1}{9}, \qquad B = -\frac{1}{9}, \qquad C = -\frac{1}{3}
$$

So

$$
\frac{1}{9}\ln\lvert x - 1\rvert - \frac{1}{9}\ln\lvert x + 2\rvert + \frac{1}{3(x + 2)} + D
$$

Partial fractions reappear in MTHE 225 (Laplace transforms).

## Work

$$
W = (\text{force})(\text{distance}) \qquad \text{(N} \cdot \text{m} = \text{J)}
$$

If force or distance varies, use small pieces where the other is roughly constant, then integrate.

**Variable force:** $F = (5 - 0.1x)$ N from $x = 0$ to $15$ m.

$$
W = \int_0^{15} (5 - 0.1x)\,dx = \left(5x - 0.05x^2\right)\Big|_0^{15} = 63.75 \text{ J}
$$

**Example:** $F = \cos\left(\frac{\pi x}{3}\right)$ N from $x = 1$ to $2$.

$$
W = \int_1^2 \cos\left(\frac{\pi x}{3}\right)dx = \frac{3}{\pi}\left[\sin\frac{2\pi}{3} - \sin\frac{\pi}{3}\right] = 0
$$

The force pushes forward then backward, so the work cancels.

### Pumping problems (variable distance)

Slice the liquid into **horizontal slabs** of thickness $\Delta y$, since every point in a slab is lifted the same distance. For each slab:

$$
W_{slab} = (\text{volume})(\text{density})\,g\,(\text{lift distance})
$$

Water density is $1000$ kg/m$^3$ and $g = 9.8$ m/s$^2$. Add the slabs with an integral.

**Aquarium** ($2 \times 1 \times 1$ m, pump out the top half). With $y$ measured up from the bottom, a slab at height $y$ is lifted $(1 - y)$, so

$$
W = \int_{1/2}^{1} 2(1000)(9.8)(1 - y)\,dy = 2450 \text{ J}
$$

(Measuring depth $y$ down from the top instead, the lift is just $y$ and the limits are $0$ to $\frac{1}{2}$.)

**Parabolic tank** ($y = x^2$ rotated about the $y$-axis, filled to $y = 3$, pumped out of a hole at $y = 4$). A slab at height $y$ has:

- radius $\sqrt{y}$, so volume $\pi y\,\Delta y$
- lift distance $4 - y$

So

$$
W = \int_0^3 \pi y(1000)(9.8)(4 - y)\,dy = 9800\pi\left(2y^2 - \frac{y^3}{3}\right)\Big|_0^3 = 88200\pi \approx 2.77\times 10^5 \text{ J}
$$

**Notes:**

- Energy is conserved, so the work done equals the gain in potential energy of the slabs. This gives the **minimum** work (pumping slowly, no kinetic energy).
- For the lake problem (tank draining through a hose), the same slab idea applies: horizontal slabs, because all points in a slab fall the same distance.
