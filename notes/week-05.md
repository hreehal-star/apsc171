---
title: Week 5 Notes
---

# Week 5 - Implicit Derivatives, Related Rates and Optimization

We learn how to find slopes on curves that aren't functions, use derivatives to connect rates of change, classify critical points, and solve optimization word problems.

## Implicit Differentiation

Some curves can't be written as $y = f(x)$. The circle $x^2 + y^2 = 16$ fails the vertical line test (some $x$ values have two $y$ values), but it still has a tangent line at every point.

To find slopes, take $\frac{d}{dx}$ of both sides and treat $y$ as a function of $x$. Every time you differentiate a $y$ term, the chain rule gives an extra $\frac{dy}{dx}$:

$$
\frac{d}{dx}\left(x^2\right) = 2x \qquad \text{but} \qquad \frac{d}{dx}\left(y^2\right) = 2y\frac{dy}{dx}
$$

Then solve for $\frac{dy}{dx}$. Unlike regular derivatives, the slope formula usually contains **both** $x$ and $y$, so you need the full point $(x, y)$ to get a slope.

**Example (circle):** For $x^2 + y^2 = 16$,

$$
2x + 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{x}{y}
$$

At $(2, \sqrt{12})$ the slope is $-\frac{2}{\sqrt{12}} \approx -0.577$. At $(2, -\sqrt{12})$ (same $x$), the slope is $+0.577$.

**Example (sideways parabola):** Find the tangent line to $x = y^2$ at $(4, 2)$.

$$
1 = 2y\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{2y} = \frac{1}{4} \text{ at } (4,2)
$$

Using $y = (\text{slope})(x - x_0) + y_0$, the tangent line is $y = \frac{1}{4}(x - 4) + 2$.

**Example (messier relation):** Find $\frac{dy}{dx}$ for $x^3 + 2x^2y + \sin(xy) = 1$. Use the product rule on $x^2y$ and the chain + product rule on $\sin(xy)$:

$$
3x^2 + 4xy + 2x^2\frac{dy}{dx} + \cos(xy)\left(y + x\frac{dy}{dx}\right) = 0
$$

Gather the $\frac{dy}{dx}$ terms and solve:

$$
\frac{dy}{dx} = \frac{-3x^2 - 4xy - y\cos(xy)}{2x^2 + x\cos(xy)}
$$

The point $(1, 0)$ is on the curve since $1 + 0 + \sin(0) = 1$. There, $\frac{dy}{dx} = \frac{-3}{2 + 1} = -1$, so the tangent line is $y = -(x - 1) = 1 - x$. We can use it to estimate nearby points: at $x = 0.95$, $y \approx 0.05$.

## Related Rates

When several quantities change over time and an equation links them, differentiating that equation with respect to $t$ links their **rates**.

**General method:**

1. Draw a picture and label the variables.
2. Identify which variables and rates are known.
3. Identify the rate you want.
4. Write an equation relating the **quantities** (not the rates) that is always true.
5. Differentiate with respect to $t$ **before** substituting any values.
6. Substitute the known values and rates, then solve for the rate you want.

**Example (car):** A car starts 150 m east of an observer and drives north at 20 m/s. How fast is the distance between them changing after 10 s?

Let $y$ be the car's distance north of its start and $x$ its distance from the observer. Always $150^2 + y^2 = x^2$, so

$$
2y\frac{dy}{dt} = 2x\frac{dx}{dt} \implies \frac{dx}{dt} = \frac{y}{x}\frac{dy}{dt}
$$

At $t = 10$: $y = 200$ m, so $x = \sqrt{150^2 + 200^2} = 250$ m, and $\frac{dx}{dt} = \frac{200}{250}(20) = 16$ m/s.

**Example (conical tank):** A conical tank (top radius 2 m, height 4 m) leaks water at 0.5 L/s. How fast is the water level falling when $h = 2$ m?

By similar triangles $\frac{r}{h} = \frac{2}{4}$, so $r = \frac{h}{2}$ and the volume becomes a function of $h$ alone:

$$
V = \frac{1}{3}\pi r^2 h = \frac{\pi}{12}h^3 \implies \frac{dV}{dt} = \frac{\pi}{4}h^2\frac{dh}{dt}
$$

Convert units: $\frac{dV}{dt} = -0.5 \text{ L/s} = -0.0005 \text{ m}^3/\text{s}$. Then

$$
\frac{dh}{dt} = \frac{4}{\pi h^2}\frac{dV}{dt} = \frac{4}{\pi(2)^2}(-0.0005) \approx -1.59 \times 10^{-4} \text{ m/s}
$$

When the water is higher than 2 m, $\frac{1}{h^2}$ is smaller, so the level falls **more slowly**.

**Example (sliding ladder):** A 5 m ladder slides down a wall, with its top moving down at 1 m/s. How fast does the bottom slide out when it is 3 m from the wall?

Let $x$ be the distance from the wall to the bottom of the ladder and $y$ the height of the top. Then

$$
x^2 + y^2 = 25 \implies 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0 \implies \frac{dx}{dt} = -\frac{y}{x}\frac{dy}{dt}
$$

At $x = 3$, $y = 4$, so $\frac{dx}{dt} = -\frac{4}{3}(-1) = \frac{4}{3}$ m/s (moving away from the wall). Just as the top hits the ground ($y = 0$), $\frac{dx}{dt} = 0$.

**Example (ideal gas law):** $PV = nRT$ with $n = 0.1$ mol and $T = 273$ K held constant. The volume drops from 3 L to 1 L over 60 s, so $\frac{dV}{dt} = -\frac{1}{30}$ L/s. Halfway through the process, $V = 2$ L and

$$
P = \frac{nRT}{V} = \frac{(0.1)(8.31)(273)}{2} \approx 113.4 \text{ kPa}
$$

Since $nRT$ is constant, the product rule gives

$$
\frac{dP}{dt}V + P\frac{dV}{dt} = 0 \implies \frac{dP}{dt} = -\frac{P}{V}\frac{dV}{dt} = -\frac{113.4}{2}\left(-\frac{1}{30}\right) \approx 1.89 \text{ kPa/s}
$$

**Example (radar):** A plane flies in a straight line at 600 km/h, passing 150 km from a radar station at its closest approach. How fast is the radar rotating at that moment?

Let $y$ be the plane's distance along its path from the closest point, and $\theta$ the radar angle. Then

$$
\tan\theta = \frac{y}{150} \implies \sec^2\theta\,\frac{d\theta}{dt} = \frac{1}{150}\frac{dy}{dt} \implies \frac{d\theta}{dt} = \frac{\cos^2\theta}{150}\frac{dy}{dt}
$$

At the closest point $\theta = 0$, so $\frac{d\theta}{dt} = \frac{1}{150}(-600) = -4$ rad/h. As the plane moves away, $\theta$ grows, $\cos^2\theta$ shrinks, and the radar turns **more slowly**.

## Critical Points and Classifying Them

Engineers often want to **optimize** a design, for example by choosing the truss angle that maximizes strength. Maxima and minima of a function can only happen at **critical points**, where either

- $f'(x) = 0$ (a flat tangent), or
- $f'(x)$ is undefined but $f(x)$ is defined (for example a cusp or corner).

Not every critical point is a max or min. For example, $y = x^3$ has $f'(0) = 0$ but flattens out and keeps increasing.

### First Derivative Test

Check the sign of $f'$ on each side of the critical point $c$:

| | $f'$ left of $c$ | $f'$ right of $c$ |
|---|---|---|
| local minimum | $-$ | $+$ |
| local maximum | $+$ | $-$ |
| neither | same sign on both sides | same sign on both sides |

**Example:** For $f(x) = 2x^3 - 9x^2 + 12x + 3$,

$$
f'(x) = 6x^2 - 18x + 12 = 6(x - 1)(x - 2) = 0 \implies x = 1, \ x = 2
$$

A sign chart gives $f'$: $(+)$ for $x < 1$, $(-)$ for $1 < x < 2$, $(+)$ for $x > 2$. So $x = 1$ is a local max ($f(1) = 8$) and $x = 2$ is a local min ($f(2) = 7$).

This also tells us that $f(x) = 0$ has exactly **one** real solution. The function increases to 8, dips to 7, then increases forever, so it only crosses the $x$-axis once (somewhere left of $x = 1$).

### Second Derivative Test

This test uses the second derivative **at** the critical point (instead of the first derivative **around** it). If $f'(c) = 0$:

- $f''(c) > 0$ means concave up, so a **local min**.
- $f''(c) < 0$ means concave down, so a **local max**.
- $f''(c) = 0$ means the test is **inconclusive** (for example both $x^3$ and $x^4$ have this at $0$).

**Example:** Let $f'(x) = \cos(x^2) + 2x - 1$. Then $f'(0) = 1 + 0 - 1 = 0$, so $x = 0$ is a critical point.

$$
f''(x) = -2x\sin(x^2) + 2 \implies f''(0) = 2 > 0
$$

So $x = 0$ is a local min.

## Global vs. Local Extrema

- A **local max** is at $x = c$ if $f(c) > f(x)$ for $x$ values **near** $c$.
- A **global max** is at $x = c$ if $f(c) \geq f(x)$ for **all** $x$ in the domain.

The definitions for minima are the same with the inequalities flipped. A function can have several global maxima if it reaches the same peak value more than once. Some examples:

- Multiple global maxima: $\sin(x)$ or $\cos(x)$.
- One global max but no global min: $y = -x^2$.
- No global max or min: $y = x^3$ or $y = \tan(x)$.

### Closed Intervals

A **continuous** function on a **closed** interval $[a, b]$ always has a global max and a global min. They occur at either a critical point or an endpoint. To find them, evaluate $f$ at every critical point and both endpoints, then pick the largest and smallest values.

**Example:** For $f(x) = 2x^3 - 9x^2 + 12x + 3$ on $[0, 2.5]$:

$$
f(0) = 3, \quad f(1) = 8, \quad f(2) = 7, \quad f(2.5) = 8
$$

The global min is $3$ at $x = 0$. The global max is $8$, reached at both $x = 1$ and $x = 2.5$.

### Open Intervals

On an open interval, including $(-\infty, \infty)$, a global max or min may not exist, so you need an argument. Either:

- look at what $f$ does as $x$ approaches the ends of the interval (or $\pm\infty$), or
- if there is only one critical point, use the sign of $f'$ on each side of it.

**Examples:**

- $f(x) = 2x^3 - 9x^2 + 12x + 3$ on all real numbers has **no** global max, since $f \to \infty$ as $x \to \infty$. It also has **no** global min, since $f \to -\infty$ as $x \to -\infty$.
- $g(x) = (x - 2)^4$ has **no** global max, since $g \to \infty$. It **does** have a global min at $x = 2$: this is its only critical point, with $g' < 0$ to the left and $g' > 0$ to the right.

## Optimization Word Problems

The calculus is usually the easy part. The hard part is turning the words into a function. The steps are:

1. Identify the quantity to optimize.
2. Draw a picture and name the variables.
3. Use the given constraint to write the quantity in terms of **one** variable.
4. Find the domain where that variable makes physical sense.
5. Find the critical points, then justify that your answer is the **global** max/min (closed interval check, or sign chart).

**Example (fencing):** A farmer has 120 m of fence to build a rectangular pen against an existing wall (no fence is needed on the wall side). What dimensions maximize the area?

Let $h$ be the two sides perpendicular to the wall and $w$ the side parallel to it. The constraint is $2h + w = 120$, so $w = 120 - 2h$ and

$$
A(h) = h(120 - 2h) = 120h - 2h^2, \qquad 0 \leq h \leq 60
$$

$$
A'(h) = 120 - 4h = 0 \implies h = 30
$$

Since $A$ is continuous on a closed interval, compare: $A(0) = 0$, $A(30) = 1800$, $A(60) = 0$. The max area is $1800 \text{ m}^2$ with $h = 30$ m and $w = 60$ m.

**Example (storage container):** An open-top box must hold $10 \text{ m}^3$, with base length twice its width. Base material costs \$10/m² and side material costs \$6/m². Find the cheapest cost.

Let the width be $w$, the length $2w$, and the height $h$. The base costs $10(2w^2)$, the two short sides cost $6(2wh)$, and the two long sides cost $6(2 \cdot 2w \cdot h)$:

$$
C = 20w^2 + 36wh
$$

The volume constraint $2w^2h = 10$ gives $h = \frac{5}{w^2}$, so

$$
C(w) = 20w^2 + \frac{180}{w}, \qquad w > 0
$$

$$
C'(w) = 40w - \frac{180}{w^2} = 0 \implies w^3 = \frac{9}{2} \implies w = \sqrt[3]{4.5} \approx 1.65 \text{ m}
$$

$C'$ is negative to the left of this point and positive to the right, and it is the only critical point on $(0, \infty)$, so it is the **global** min. The dimensions are $w \approx 1.65$ m, length $\approx 3.30$ m, $h \approx 1.83$ m, and the minimum cost is $C \approx \$163.55$.
