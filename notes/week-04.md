---
title: Week 4 Notes
---

# Week 4 - Inverse Trig Functions and Linear Tangent Lines

We use vectors to model projectile motion, review the inverse trig functions and their derivatives, and use tangent lines to approximate functions.

## Projectile Motion problems

We can model projectile motion using position, velocity and acceleration vector functions. The best way to approach these problems (in my opinion) is the sketch the object before it is launched. 

Then, split your motions into horizontal and vertical. 

If the only force is gravity, the acceleration is $\vec{a}(t) = \langle 0, -g \rangle$ with $g = 9.8$ m/s². Work backwards (undo the derivative) and use the launch conditions to fill in the constants. For a launch from the origin with speed $v_0$ at angle $\alpha$:

$$
\vec{v}(t) = \langle v_0\cos(\alpha), \ -gt + v_0\sin(\alpha) \rangle
$$

$$
\vec{r}(t) = \left\langle v_0\cos(\alpha)\,t, \ -\tfrac{g}{2}t^2 + v_0\sin(\alpha)\,t \right\rangle
$$

**Example:** A projectile is launched at 60 m/s. At what angle should it be launched to land 300 m away?

It lands when $y = 0$, so $t\left(-4.9t + 60\sin(\alpha)\right) = 0$, giving $t = \frac{60\sin(\alpha)}{4.9}$. Plugging into $x(t)$ and using $\sin(2\alpha) = 2\sin(\alpha)\cos(\alpha)$:

$$
x = \frac{3600}{9.8}\sin(2\alpha) = 300 \implies \sin(2\alpha) \approx 0.817
$$

A calculator gives $2\alpha = \arcsin(0.817) \approx 0.956$, so $\alpha \approx 0.478$ rad $\approx 27.4^\circ$. But $\pi - 0.956$ also has the same sine, which gives a second answer, $\alpha \approx 1.093$ rad $\approx 62.6^\circ$. Both a low and a high launch land at 300 m. The calculator only gives one of them, which is why we need to understand inverse trig functions.

## What are inverse trig functions and what do they look like? 

The three inverse trig functions we focus on are $\arcsin(x), \arccos(x)$ and $\arctan(x)$

Trig functions repeat, so they fail the horizontal line test and don't have inverses. To fix this, we only use one piece of each function that passes the test, and invert that piece:

| Function | Restricted to | Inverse | Domain of inverse | Range of inverse |
| --- | --- | --- | --- | --- |
| $\sin(x)$ | $-\frac{\pi}{2} \leq x \leq \frac{\pi}{2}$ | $\arcsin(x)$ | $[-1, 1]$ | $[-\frac{\pi}{2}, \frac{\pi}{2}]$ |
| $\cos(x)$ | $0 \leq x \leq \pi$ | $\arccos(x)$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan(x)$ | $-\frac{\pi}{2} < x < \frac{\pi}{2}$ | $\arctan(x)$ | all real numbers | $(-\frac{\pi}{2}, \frac{\pi}{2})$ |

- **Notation:** $\sin^{-1}(x)$ means $\arcsin(x)$, **not** $\frac{1}{\sin(x)}$.
- **Inputs are ratios, outputs are angles.** For example, $\arccos(2)$ is undefined because $2$ is outside the domain $[-1, 1]$.

### Inverses Only Cancel on the Restricted Domain

$$
\sin(\arcsin(x)) = x \ \text{ for } -1 \leq x \leq 1, \qquad \arcsin(\sin(x)) = x \ \text{ for } -\frac{\pi}{2} \leq x \leq \frac{\pi}{2}
$$

For example, $\arcsin\left(\sin\left(\frac{8\pi}{3}\right)\right) \neq \frac{8\pi}{3}$. Since $\sin\left(\frac{8\pi}{3}\right) = \sin\left(\frac{2\pi}{3}\right) = \frac{\sqrt{3}}{2}$, the answer must be the angle in $[-\frac{\pi}{2}, \frac{\pi}{2}]$ with that sine, which is $\frac{\pi}{3}$.

### Using Triangles

Exact values and simplifications can often be found by drawing a right triangle.

- $\arccos\left(-\frac{\sqrt{3}}{2}\right) = \frac{5\pi}{6}$, since the answer must be in $[0, \pi]$ and $\cos\left(\frac{5\pi}{6}\right) = -\frac{\sqrt{3}}{2}$.
- **Simplify $\cos(\arctan(x))$:** Let $\theta = \arctan(x)$, so $\tan(\theta) = \frac{x}{1}$ (opposite $x$, adjacent $1$). The hypotenuse is $\sqrt{1 + x^2}$, so

$$
\cos(\arctan(x)) = \frac{1}{\sqrt{1 + x^2}}
$$

Similarly, $\cos(\arcsin(r)) = \sqrt{1 - r^2}$.

**Inverse Trigonometric Functions:**

- $\frac{d}{dx}[\arcsin(x)] = \frac{1}{\sqrt{1 - x^2}}$
- $\frac{d}{dx}[\arccos(x)] = -\frac{1}{\sqrt{1 - x^2}}$
- $\frac{d}{dx}[\arctan(x)] = \frac{1}{1 + x^2}$

These come from differentiating $\sin(\arcsin(x)) = x$ with the chain rule. This gives $\cos(\arcsin(x)) \cdot \frac{d}{dx}[\arcsin(x)] = 1$, and since $\cos(\arcsin(x)) = \sqrt{1 - x^2}$, we get the formula above.

## Linear Tangent Lines
A tangent line touches a curve at a point and has the same slope as the curve at that point. The image below shows the tangent lines geometrically.

### Local Linearity

If a function is differentiable at a point, then zooming in close enough makes the graph look like a straight line (its tangent line). This means that for small changes in $x$:

$$
f'(a) \approx \frac{\Delta y}{\Delta x} \implies \Delta y \approx f'(a)\,\Delta x
$$

The larger $\Delta x$ is, the worse the approximation will generally be.

**Interpreting the derivative:** $f'(a)$ is the change in output per one unit of input, so its units are (units of $f$) / (units of $x$). For example, if $R = f(A)$ is revenue for advertising spending $A$ (both in thousands of dollars), then $f'(200) = 1.8$ means that, at $A = 200$, each extra \$1 thousand of advertising brings in about \$1.8 thousand more revenue.

### The Linearization Formula

Near a reference point $x = a$, a function can be approximated by its tangent line:

$$
f(x) \approx L(x) = f(a) + f'(a)(x - a)
$$

This is just point-slope form, with slope $f'(a)$ through the point $(a, f(a))$.

**Example:** Suppose $f(200) = 1500$ and $f'(200) = 1.8$ for the revenue function above. Then

$$
R(A) \approx 1500 + 1.8(A - 200)
$$

If advertising drops to $A = 190$: $R \approx 1500 + 1.8(-10) = 1482$, so revenue is about \$1.482 million.

**Over or underestimate?** If the curve is concave up, the tangent line lies below it, so the linearization **underestimates**. If it is concave down, it **overestimates**. For example, a population growing exponentially is concave up, so a linear prediction will be too low.

### Geometric Example

Find all lines through the origin that are tangent to $y = x^2 - 2x + 4$.

The tangent line at $x = a$ is $y = f'(a)(x - a) + f(a)$, with $f(a) = a^2 - 2a + 4$ and $f'(a) = 2a - 2$. For it to pass through $(0, 0)$:

$$
0 = (2a - 2)(0 - a) + a^2 - 2a + 4 = -a^2 + 4 \implies a = \pm 2
$$

At $a = 2$ the tangent line is $y = 2x$, and at $a = -2$ it is $y = -6x$.
