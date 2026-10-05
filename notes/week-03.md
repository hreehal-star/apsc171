---
title: Week 3 Notes
---

# Week 3 - Velocity & Acceleration with Vector-Valued Functions

This section applies derivatives to vector-valued functions to extract kinematic data (motion) from geometric curves.

## The Derivative of a Vector-Valued Function

The **displacement** between two times is the end position minus the start position, $\vec{r}(a + h) - \vec{r}(a)$. Dividing by the time interval $h$ gives the **average velocity**. As $h \to 0$, the average velocity approaches the **instantaneous velocity**, which is the derivative:

$$
\vec{r}'(a) = \lim_{h \to 0} \frac{\vec{r}(a + h) - \vec{r}(a)}{h}
$$

This is the same limit definition as for a regular function $f(t)$, except the scalar $f$ is replaced by the vector $\vec{r}$. In practice, you never need the limit: just differentiate each component.

## Calculating Velocity

Velocity is the rate of change of position. To find the velocity vector of a curve, take the derivative of each component individually. For a position curve $\vec{r}(t)$, the velocity is $\vec{v}(t)$.

$$
\vec{v}(t) = \vec{r}'(t) = \langle x'(t), y'(t), z'(t) \rangle
$$

- **Direction:** The velocity vector is always tangent to the curve at any given point.
- **Speed:** The magnitude of the velocity vector, $\|\vec{v}(t)\|$, gives the scalar speed of the object. For example, if $\vec{v} = \langle 1, 3 \rangle$ m/s, the speed is $\sqrt{1^2 + 3^2} = \sqrt{10}$ m/s.
- **Vertical or Horizontal Motion:** The object moves straight up or down when the horizontal velocity is zero ($x'(t) = 0$), and straight left or right when the vertical velocity is zero ($y'(t) = 0$).

**Example:** For $\vec{r}(t) = \langle \frac{1}{3}t^3 - t, \ t \rangle$, the velocity is $\vec{v}(t) = \langle t^2 - 1, 1 \rangle$. The particle moves perfectly vertically when $t^2 - 1 = 0$, so at $t = \pm 1$, where $\vec{v} = \langle 0, 1 \rangle$.

## Calculating Acceleration

Acceleration is the rate of change of velocity. Take the derivative of the velocity vector, or the second derivative of the position vector.

$$
\vec{a}(t) = \vec{v}'(t) = \vec{r}''(t) = \langle x''(t), y''(t), z''(t) \rangle
$$

Whenever the curve is bending, the acceleration vector points "inward" toward the concave side of the curve. If the object is also speeding up or slowing down, the acceleration vector tilts forward or backward along the curve as well.

Using Newton's second law, $\vec{F} = m\vec{a}$, the acceleration tells us the force acting on an object (or a passenger) at any moment.

## Circular Motion

Uniform circular motion with radius $R$, centered at $(x_0, y_0)$, can be written as

$$
\vec{r}(t) = \langle R\cos(ωt) + x_0, \ R\sin(ωt) + y_0 \rangle
$$

- $R$ is the radius and $(x_0, y_0)$ shifts the center.
- $ω$ controls how fast it goes around. The speed is $\|\vec{v}\| = Rω$, and one revolution takes $\frac{2\pi}{ω}$ seconds.
- Swapping $\sin$ and $\cos$ or changing their signs changes the starting point and the direction (clockwise vs. counter-clockwise). Check $t = 0$ and a second time to confirm.

**Acceleration always points toward the center.** Centered at the origin, differentiating twice gives

$$
\vec{a}(t) = \langle -Rω^2\cos(ωt), -Rω^2\sin(ωt) \rangle = -ω^2\,\vec{r}(t)
$$

so $\vec{a}$ points opposite to the position (toward the center) and has constant magnitude $Rω^2$. Only its direction changes.

**Example:** Design a circle of radius 8 m, centered at $(4, 7)$, with constant speed 15 m/s, starting at the bottom and moving clockwise.

$$
\vec{r}(t) = \left\langle -8\sin\left(\tfrac{15}{8}t\right) + 4, \ -8\cos\left(\tfrac{15}{8}t\right) + 7 \right\rangle
$$

At $t = 0$ this gives $(4, -1)$, the bottom of the circle. The speed is $8ω = 15$, so $ω = \frac{15}{8}$. The velocity at $t = 0$ is $\langle -15, 0 \rangle$, so it moves left from the bottom, which is clockwise.

## Straight Line Trajectories

If an object leaves a curved path at time $t = a$ (and no forces act on it), Newton's first law says it continues in a straight line with the velocity it had at that moment:

$$
\vec{L}(t) = \vec{r}(a) + \vec{v}(a)(t - a)
$$

**Example:** A cart follows $\vec{r}(t) = \langle 2 + t, \ t^3 - t \rangle$. When should a rider jump off to land on the point $(5, -3)$?

At launch, $\vec{r}(a) = \langle 2 + a, a^3 - a \rangle$ and $\vec{v}(a) = \langle 1, 3a^2 - 1 \rangle$. Setting $\vec{L}(t) = \langle 5, -3 \rangle$:

$$
x: \ 5 = (2 + a) + (t - a) \implies t = 3
$$

$$
y: \ -3 = (a^3 - a) + (3a^2 - 1)(3 - a) \implies 2a^3 - 9a^2 = 0 \implies a^2(2a - 9) = 0
$$

So $a = 0$ or $a = \frac{9}{2}$. Since $a = \frac{9}{2}$ would require $t - a < 0$ (travelling backward in time), the rider must jump at $a = 0$. Check: $\langle 2, 0 \rangle + \langle 1, -1 \rangle(3) = \langle 5, -3 \rangle$.

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
