---
title: CSS Lecture
sidebar: auto
---

# CSS Fun with Animation

## CSS Animation

[Here's a full list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) of animiatable properties. There's a lot on here (some are actually misleading, and come with poor performance) but basically, stick to <b>opacity</b> and <b>transform</b> whenever possible.

<i>New to css transforms? This is how we move elements by their X and Y position, as well as Scale and Rotate. Read up more in the MDN docs on [transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)</i>

There's two ways to animate with css properties—`transition` and `animation` (`@keyframes`)

### 1. Transition

This is the easiest way to get started with css animation

```css
/* establish initial value of property, like opacity */
.my-element {
  opacity: 0.25;
}
/* using the short-hand transition property */
.my-element:hover {
  opacity: 1;
  transform: rotate(45deg) scale(1.25);
  transition: all 0.3s ease-in-out;
}
```

Here's a table of the different transition properties you can apply

| Property                     | Definition                                                                                       | Examples                |
| ---------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| `transition-property`        | CSS properties to which a transition effect should be applied                                    | `opacity`, `all`        |
| `transition-duration`        | Length of time a transition animation should take to complete                                    | `2s`, `500ms`           |
| `transition-timing-function` | How intermediate values are calculated for CSS properties being affected by a transition effect. | `ease-in-out`, `linear` |
| `transition-delay`           | Duration to wait before starting a property's transition effect                                  | `2s`                    |

::: tip Activate!
Individual Challenges—will be graded for completion—make sure it makes it to your repository so I can find it. Codepen's are ok

1. Create a 200px x 200px box with a background color of black

Using `transition`, animate the following on `:hover`:

2. Rotate the box 360 degrees
3. Scale the box from 0.5 to 3
4. Choose a `transition-timing-function` and a `transition-duration`
5. Change the color from black to a different color
6. Animate 2 more properties of your choosing
7. Add a 1 second delay

<i>Next, Make 4 copies of the box in the html and place them inside a container div</i>

8. Bonus: Animate all the boxes simultaneously when hovering anywhere on the parent container

Need help? [Check out the MDN web docs for transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

:::

<b>Let's Review!</b>

---

### 2. Animation / @keyframes

We define our animation using `@keyframes`

```css
/* defining the animation */

/* 1. using 'from' and 'to' */
@keyframes pulse {
  from {
    transform: scale(0.5);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
/* 2. using percentages */
@keyframes pulse {
  0% {
    transform: scale(0.25);
    opacity: 0.5;
  }
  25% {
    transform: scale(0.5);
    opacity: 0.75;
  }
  75% {
    transform: scale(0.75);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

We use our animation by including the `animation` property on a selected id, class, or tag

```css
/* using your animation */
.my-element {
  /*  here I use: name | duration | timing-function | direction | count*/
  animation: pulse 0.3s linear forwards infinite;
}
```

Here's a good reference for all the [Animation Properties](https://www.sitepoint.com/how-to-get-started-with-css-animation/#animation-properties) available in the `animation` property shorthand

And here's the official [MDN animation docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

::: tip Quick Activity!
Add a keyframe animation to your in-class work for today

Challenge: Using a @keyframes animation, create a 200px x 200px circle that bounces up and down 10 times as smoothly as possible
:::

---

<b>Next</b>: [CSS Variables →](./lesson-5b)
