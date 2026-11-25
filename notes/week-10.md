---
title: Week 10 Notes
---

# Week 10 - Differential Equations and Complex Numbers (Part 1)

We model a spring system with a differential equation, see that complex exponentials appear in its solutions, and learn complex numbers (arithmetic, polar form, conjugates).

## Differential Equations

A **differential equation** is an equation with an unknown **function** and its derivatives. A function is a solution if substituting it makes both sides equal.

**Example:** $x'' = -36x$. Try $x = \cos(6t)$: $x'' = -36\cos(6t) = -36x$ ✓. Try $x = -6t^3$: $x'' = -36t \neq -36x$ ✗.

## The Mass/Spring System

For a mass $m$ on a spring with constant $k$ ($x$ measured from the equilibrium position), Hooke's law gives $F_{spring} = -kx$. A stiffer spring has larger $k$.

With $F = ma$ and $a = x''$:

$$
m x'' = -kx \quad\Longrightarrow\quad x'' = -\frac{k}{m}x
$$

We need a function whose second derivative is a negative multiple of itself. Both $\cos\left(\sqrt{k/m}\,t\right)$ and $\sin\left(\sqrt{k/m}\,t\right)$ work, and so does any linear combination. The **general solution** is

$$
x(t) = A\cos\left(\sqrt{\tfrac{k}{m}}\,t\right) + B\sin\left(\sqrt{\tfrac{k}{m}}\,t\right)
$$

The period is $2\pi\sqrt{m/k}$: a stiffer spring (larger $k$) oscillates faster, and a heavier mass (larger $m$) oscillates slower.

### Adding friction

Friction proportional to velocity adds the force $-cx'$:

$$
m x'' + c x' + k x = 0
$$

| Friction | Behaviour of $x(t)$ |
|---|---|
| None ($c = 0$) | Pure oscillation, $\cos$ and $\sin$ |
| Light | Still oscillates, with decreasing amplitude |
| High | No oscillation, decays toward $0$ |

All three can be built from a simple exponential $e^{rt}$ if we allow $i = \sqrt{-1}$. Check with $x'' = -x$:

$$
x = e^{it} \Rightarrow x' = ie^{it},\; x'' = i^2e^{it} = -e^{it} = -x \;\checkmark
$$

So $e^{it}$ is related to $\sin t$ and $\cos t$ (see Euler's formula in the note on complex numbers in the tutorial solutions).

## Complex Numbers

A complex number is $z = a + bi$ with $a, b$ real and $i^2 = -1$. The real numbers are the subset with $b = 0$.

**Addition and subtraction** work like vectors (add components):

$$
(3 + 2i) + (-1 + 5i) = 2 + 7i \qquad (1 + 2i) - (2 + i) = -1 + i
$$

On the **complex plane**, $a$ is the horizontal (real) coordinate and $b$ is the vertical (imaginary) coordinate. Addition is vector addition.

**Multiplication:** expand and use $i^2 = -1$.

$$
(3 + 2i)(-1 + 5i) = -3 + 15i - 2i + 10i^2 = -13 + 13i
$$

This is not a dot or cross product. Multiplying by a real number scales, and multiplying by $i$ rotates by $90^\circ$ (e.g. $6i(2 + 4i) = -24 + 12i$).

## Polar Form

$$
z = a + bi = |z| \angle \arg(z)
$$

- $|z| = \sqrt{a^2 + b^2}$ is the length.
- $\arg(z)$ is the angle in radians, counter-clockwise from the positive real axis. Check the quadrant, since $\arctan(b/a)$ only gives the reference angle. Angles differing by $2\pi$ are the same.

**Example:**

- $-2 + 2i = \sqrt{8}\angle\frac{3\pi}{4}$
- $-i = 1\angle\frac{3\pi}{2}$ (or $1\angle\left(-\frac{\pi}{2}\right)$)
- $-2 = 2\angle\pi$

### Multiplying in polar form

> Multiply the magnitudes and **add** the angles.

$$
(r_1\angle\theta_1)(r_2\angle\theta_2) = r_1r_2\angle(\theta_1 + \theta_2)
$$

**Example:** $(-2 + 2i)(-i) = \sqrt{8}\angle\left(\frac{3\pi}{4} - \frac{\pi}{2}\right) = \sqrt{8}\angle\frac{\pi}{4}$, and $(-2 + 2i)(-2) = 2\sqrt{8}\angle\frac{7\pi}{4}$.

Multiplication turning into addition is like $e^2 \cdot e^3 = e^{2+3}$. It foreshadows the exponential form $re^{i\theta}$.

## Complex Conjugates

For $z = a + bi$, the conjugate is $\bar{z} = a - bi$. Real problems often have solutions built from conjugate pairs, so the final answer is real.

| Property | Result |
|---|---|
| Cartesian | $a + bi$ and $a - bi$ |
| Polar | $r\angle\theta$ and $r\angle(-\theta)$ |
| Geometry | Reflection across the real axis |
| Sum | $(a + bi) + (a - bi) = 2a$, real |
| Product | $(a + bi)(a - bi) = a^2 + b^2 = \lvert z\rvert^2$, real |
| Difference | $2bi$, purely imaginary |

**Example:** $z = 4\angle\frac{\pi}{4}$ has $\bar{z} = 4\angle\left(-\frac{\pi}{4}\right)$.

**Quadratic formula:** $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ gives

- $b^2 - 4ac > 0$: two distinct real roots.
- $b^2 - 4ac = 0$: one repeated real root.
- $b^2 - 4ac < 0$: a complex conjugate pair, $-\frac{b}{2a} \pm i\frac{\sqrt{4ac - b^2}}{2a}$.
