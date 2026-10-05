---
title: Week 1 Notes
---

# Week 1 - Derivatives and Vectors

We cover the rules and properties for derivatives and vectors.

## Derivatives

**Definition:** The derivative represents the rate of change of a function with respect to an independent variable. Some common ways to denote the derivative of a function $f(x)$ are:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = \frac{d}{dx}f(x) = \frac{d f(x)}{dx}
$$

These are the main rules to know:

- **Power Rule:** $\frac{d}{dx}[x^n] = n x^{n-1}$
- **Product Rule:** $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Quotient Rule:** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
- **Chain Rule:** $\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$

### Common Derivatives

These come up constantly, so it's worth memorizing them. Here $c$ and $a$ are constants (with $a > 0$, $a \neq 1$).

**Constants and Exponentials:**

- $\frac{d}{dx}[c] = 0$
- $\frac{d}{dx}[e^x] = e^x$
- $\frac{d}{dx}[a^x] = a^x \ln(a)$

**Logarithms:**

- $\frac{d}{dx}[\ln(x)] = \frac{1}{x}$
- $\frac{d}{dx}[\log_a(x)] = \frac{1}{x \ln(a)}$

**Trigonometric Functions:**

- $\frac{d}{dx}[\sin(x)] = \cos(x)$
- $\frac{d}{dx}[\cos(x)] = -\sin(x)$
- $\frac{d}{dx}[\tan(x)] = \sec^2(x)$

When the inside is a function of $x$ instead of just $x$, combine these with the chain rule. For example, $\frac{d}{dx}[\sin(3x^2)] = \cos(3x^2) \cdot 6x$.

## Vectors

**Definition:** A vector is a mathematical object that has both a magnitude (length) and a direction. In 2D space, a vector is written as $\vec{v} = \langle v_1, v_2 \rangle$. In 3D space, we just add an extra component (another dimension or axis) so the vector becomes $\vec{v} = \langle v_1, v_2, v_3 \rangle$.

Important Properties of Vector Operations:

Let $\vec{u}$, $\vec{v}$ and $\vec{w}$ be vectors and let $c$ be a constant value.

- **Commutativity:** $\vec{u} + \vec{v} = \vec{v} + \vec{u}$
- **Associativity:** $(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})$
- **Distributivity:** $c(\vec{u} + \vec{v}) = c\vec{u} + c\vec{v}$

## The Dot Product

The dot product multiplies two vectors to return a scalar (a single number), representing how much one vector points in the same direction as another.

Let $\vec{u} = \langle u_1, u_2 \rangle$ and $\vec{v} = \langle v_1, v_2 \rangle$.

$$
\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 = \|\vec{u}\|\|\vec{v}\|\cos(\theta)
$$

For 3D vectors, just add the third components: $\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3$.

Special Cases:

- **Orthogonal:** If $\vec{u} \cdot \vec{v} = 0$, the vectors are at a $90^\circ$ angle.
- **Parallel**: If $\vec{u} \cdot \vec{v} = \pm \|\vec{u}\|\|\vec{v}\|$, then the vectors point in either the same or opposite direction. This follows from $\cos(0^\circ)=1$ and $\cos(180^\circ)=-1$.

## Worked Example

We want to determine if two specific vectors are perpendicular to each other. Let $\vec{u} = \langle 3, 4, 0 \rangle$ and $\vec{v} = \langle -4, 3, 0 \rangle$.

$$
\vec{u} \cdot \vec{v} = (3)(-4) + (4)(3) + (0)(0) = -12 + 12 = 0
$$

Because the dot product is $0$, we know vectors $\vec{u}$ and $\vec{v}$ are exactly orthogonal.

## Why Do We Care?

Derivatives and vectors are literally everywhere. How fast things are moving, population growth, how machine learning models are developed and pricing models in finance are all described with derivatives. Similarly, video games, 3D graphics, weather patterns and airflow over an aeroplane wing all use the concept of vectors (you will learn WAY more about vectors in APSC 174 next semester).
