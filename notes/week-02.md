---
title: Week 2 Notes
---

# Week 2 - Vector-Valued Functions

We introduce the idea of a parameter and how we can make a function that outputs vectors.

## Definition

A function is a rule that assigns to each input exactly one output. Most functions from high school take a single number in and give a single number out (like $f(x) = x^2$), but this doesn't have to be the case:

- **Functions of several variables:** Many inputs, one output. For example, temperature on a map depends on two inputs, $T = f(x, y)$.
- **Vector-valued functions:** One input, many outputs (a vector).

A vector-valued function is a function whose domain is a set of real numbers (scalars, like time) and whose range is a set of vectors. The parameter can be represented by $t$ (because of physics problems).

$$
\vec{r}(t) = \langle x(t), y(t), z(t) \rangle
$$

Instead of plotting one variable against another in the xy-plane or xyz-plane, you are plotting a sequence of vectors tracing out a curve in space as time progresses. This is why vector-valued functions are also called **parametric curves**, since the curve is driven by the parameter $t$.

**Example:** A dot moving counter-clockwise around a circle of radius 1 (one revolution every $2\pi$ seconds) has position

$$
\vec{r}(t) = \langle \cos(t), \sin(t) \rangle
$$

This is really just two regular functions packaged together: $x(t) = \cos(t)$ and $y(t) = \sin(t)$.

## Sketching Vector-Valued Functions

To sketch a parametric curve, there are two main ways:

1. **Plot Points:** Plug in values for the parameter to find specific coordinates, and connect them with directional arrows indicating the flow of time.
2. **Eliminate the Parameter:** Isolate the parameter in one component and substitute it into another to find the Cartesian equation.

When plotting points, check the domain first. For example, $\vec{s}(t) = \langle \sqrt{t}, 1/t \rangle$ is only defined for $t > 0$, since $\sqrt{t}$ needs $t \geq 0$ and $1/t$ needs $t \neq 0$.

### Example of Eliminating the Parameter

Suppose we have the vector-valued function $\vec{r}(t)$:

$$
\vec{r}(t) = \langle t, t^2 \rangle
$$

**First component:** We have $x = t$, so we can isolate the parameter:

$$
t = x
$$

**Substitute:** Replace $t$ with $x$ in the second component:

$$
y = t^2 = x^2
$$

**Cartesian equation:** Therefore,

$$
y = x^2
$$

This tells us that the curve is a parabola.


### Comparing the Two Methods

Eliminating the parameter is often easier to draw because you may recognize the shape (line, parabola, ellipse, etc.). However:

- It can include branches that are not actually part of the trajectory. For example, $\vec{r}(t) = \langle -t^2, t^4 \rangle$ gives $y = x^2$, but since $x = -t^2 \leq 0$, the curve is only the left half of the parabola.

## Collisions vs. Intersections

When comparing two vector-valued functions, we must distinguish between the paths crossing and the objects occupying the same space at the same time. Let our two functions be $\vec{r}_1(t)$ and $\vec{r}_2(s)$:

- **Intersection:** The curves cross paths at the same physical coordinate in space, but not necessarily at the same time ($\vec{r}_1(t) = \vec{r}_2(s)$ for some $t$ and $s$).
- **Collision:** The curves reach the exact same coordinate at the exact same time ($\vec{r}_1(t) = \vec{r}_2(t)$ for the same $t$).

Imagine you and your friend are walking to Jeffrey Hall. Your walking paths may both pass through Jeffrey Hall, even if you arrive at different times. If you arrive at 1:00 PM and your friend arrives at 5:00 PM, your paths intersect at Jeffrey Hall, but you don't collide, because you weren't there at the same time. If you both arrive at Jeffrey Hall at 1:00 PM, then you collide: you're at the same position at the same time.

## Worked Example

We need to determine if two curves intersect or collide.

Do $\vec{r}(t) = \langle t^2, t \rangle$ and $\vec{u}(t) = \langle 3 - 2t, 4t - 3 \rangle$ collide or intersect?

**Collision (same time $t$):** Set the components equal using the same $t$:

$$
x: \ t^2 = 3 - 2t \qquad y: \ t = 4t - 3
$$

The $y$ equation gives $t = 1$. Checking the $x$ equation at $t = 1$: $1^2 = 1$ and $3 - 2(1) = 1$, so both match. The particles **collide** at $(1, 1)$ when $t = 1$.

**Intersection (different times $t$ and $s$):** Use $\vec{r}(t) = \vec{u}(s)$:

$$
x: \ t^2 = 3 - 2s \qquad y: \ t = 4s - 3 \implies s = \frac{t+3}{4}
$$

Substituting into the $x$ equation:

$$
t^2 = 3 - 2\left(\frac{t+3}{4}\right) \implies 2t^2 + t - 3 = 0 \implies (t - 1)(2t + 3) = 0
$$

So $t = 1$ (with $s = 1$, the collision point $(1, 1)$) or $t = -\frac{3}{2}$ (with $s = \frac{3}{8}$). Checking: $\vec{r}(-\frac{3}{2}) = \vec{u}(\frac{3}{8}) = \langle \frac{9}{4}, -\frac{3}{2} \rangle$. The paths **intersect** at $(1, 1)$ and $(\frac{9}{4}, -\frac{3}{2})$.

**In 3D:** The process is the same, but you get three equations instead of two. Solve using two of the components, then check that your solutions also satisfy the third.

## Why Do We Care?

Vector-valued functions are useful because they let us describe motion by where something is and when. We can pretty much model any (continuous) motion in 2D or 3D using these functions. In real life, they’re used to track spacecraft and satellites and navigate autonomous vehicles.
