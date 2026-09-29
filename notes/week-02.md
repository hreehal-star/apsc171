---
title: Week 2 Notes
---

# Week 2 - Vector-Valued Functions

We introduce the idea of a parameter and how we can make a function that outputs vectors.

## Definition

A vector-valued function is a function whose domain is a set of real numbers (scalars, like time) and whose range is a set of vectors. The parameter can be represented by $t$ (because of physics problems).

$$
\vec{r}(t) = \langle x(t), y(t), z(t) \rangle
$$

Instead of plotting one variable against another in the xy-plane or xyz-plane, you are plotting a sequence of vectors tracing out a curve in space as time progresses.

## Sketching Vector-Valued Functions

To sketch a parametric curve, there are two main ways:

1. **Plot Points:** Plug in values for the parameter to find specific coordinates, and connect them with directional arrows indicating the flow of time.
2. **Eliminate the Parameter:** Isolate the parameter in one component and substitute it into another to find the Cartesian equation.

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


## Collisions vs. Intersections

When comparing two vector-valued functions, we must distinguish between the paths crossing and the objects occupying the same space at the same time. Let our two functions be $\vec{r}_1(t)$ and $\vec{r}_2(s)$:

- **Intersection:** The curves cross paths at the same physical coordinate in space, but not necessarily at the same time ($\vec{r}_1(t) = \vec{r}_2(s)$ for some $t$ and $s$).
- **Collision:** The curves reach the exact same coordinate at the exact same time ($\vec{r}_1(t) = \vec{r}_2(t)$ for the same $t$).

Think of a train track crossing a road. An intersection means the tracks and the road cross (which is fine). A collision means a train and a car arrive at that crossing at the exact same moment (which is bad).

## Worked Example

We need to determine if two curves intersect or collide.

Does $\vec{r}_1(t) = \langle t, t^2 \rangle$ and $\vec{r}_2(s) = \langle s+2, s+6 \rangle$ intersect or collide?

First, set the components equal: $t = s + 2$ and $t^2 = s + 6$.

Next, substitute for the parameter:

$$
(s+2)^2 = s + 6 \implies s^2 + 4s + 4 = s + 6 \implies s^2 + 3s - 2 = 0
$$

Solving yields valid times, meaning there is an intersection. However, if we force $t=s$, then $t = t+2 \implies 0 = 2$, which is impossible. Therefore, there is no collision.

## Why Do We Care?

Vector-valued functions are useful because they let us describe motion by where something is and when. We can pretty much model any (continuous) motion in 2D or 3D using these functions. In real life, they’re used to track spacecraft and satellites and navigate autonomous vehicles.
