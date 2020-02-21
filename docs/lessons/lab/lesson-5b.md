---
title: CSS Lecture
sidebar: auto
---

# CSS Variables

This will be a quick one, but css variables, officially titled `CSS custom properties` are a way to manage reused properties. Think things like your main colors on your website or standard margins or padding.

You define them once, and then use them throughout your style sheets. This is beneficial because if you need to change a value, you only change it once—where it's defined—as oppossed to changing it everywhere it is used.

### Basic Usage

```css
/* first, define your variable. we will use 'global' variables for now */
:root {
  --main-active-color: #9574ae;
}

/* use your variable anywhere you want, for example: */
.element-1 {
  color: var(--main-active-color);
}
#element-2 {
  background-color: var(--main-active-color);
}
section {
  border-color: var(--main-active-color);
}
```

It's as simple as that. In later lessons, we'll learn how to manipulate css variable values using JavaScript.

For more information, google some tutorials and checkout the official MDN docs on [css custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
