---
title: Week 3 Notes
---

# Week 3 - Velocity & Acceleration with Vector-Valued Functions

This section applies derivatives to vector-valued functions to extract kinematic data (motion) from geometric curves.

## Calculating Velocity

Velocity is the rate of change of position. To find the velocity vector of a curve, take the derivative of each component individually. For a position curve $\vec{r}(t)$, the velocity is $\vec{v}(t)$.

$$
\vec{v}(t) = \vec{r}'(t) = \langle x'(t), y'(t), z'(t) \rangle
$$

- **Direction:** The velocity vector is always tangent to the curve at any given point.
- **Speed:** The magnitude of the velocity vector, $\|\vec{v}(t)\|$, gives the scalar speed of the object.

## Calculating Acceleration

Acceleration is the rate of change of velocity. Take the derivative of the velocity vector, or the second derivative of the position vector.

$$
\vec{a}(t) = \vec{v}'(t) = \vec{r}''(t) = \langle x''(t), y''(t), z''(t) \rangle
$$

Whenever the curve is bending, the acceleration vector points "inward" toward the concave side of the curve. If the object is also speeding up or slowing down, the acceleration vector tilts forward or backward along the curve as well.

## Worked Example

Find the velocity and acceleration of an object moving along a curved path at a specific time.

Let the path be $\vec{r}(t) = \langle \cos(t), \sin(t), t \rangle$ evaluated at $t = \pi$.

First, find the velocity vector:

$$
\vec{v}(t) = \langle -\sin(t), \cos(t), 1 \rangle \implies \vec{v}(\pi) = \langle 0, -1, 1 \rangle
$$

Next, find the acceleration vector:

$$
\vec{a}(t) = \langle -\cos(t), -\sin(t), 0 \rangle \implies \vec{a}(\pi) = \langle 1, 0, 0 \rangle
$$
