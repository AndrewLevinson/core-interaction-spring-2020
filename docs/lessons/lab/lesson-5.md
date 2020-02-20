---
title: CSS Lecture
sidebar: auto
---

# CSS Fun: animation, transforms, variables, and more

## CSS Animation

[Here's a full list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) of animiatable properties. There's a lot on here but basically, stick to opacity, transforms, and color transitions.

There's two ways to animate with css properties—`transition` and `animation` with `@keyframes`

```css
/* 1. by using the transition property */
.my-element {
  transition: 0.3s opacity ease-in-out;
}

/* 2. or by using the animation property paired with a keyframe animation */
.my-element {
  animation: pulse 0.3s linear forwards infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
}
```
