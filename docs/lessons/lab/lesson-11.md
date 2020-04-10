---
title: JS Lecture
sidebar: auto
---

# Responsive Design, Part 1

This week, we'll learn the tools we have available to us in CSS and JavaScript when laying out a website that works on different device types and sizes

## A few things, first

- <b>CSS</b>: We'll learn about `@media` queries to write code that only runs when certain conditions are true, like browser width. However, it's important to note that media queries in CSS used to be <b>a lot</b> more important than they are now.
  - Because we have flexbox and css grid, it's much easier to build layouts that respond to screensize <b>without</b> always using a media query (<i>think flex-wrap and grid's autofit/minmax</i>).
  - That said, they are still necessary to learn, since interaction design on an iPhone is much different than a desktop computer, or a TV.
  - And sometimes we may want to craft very different UX based on device type/size rather than just wrapping items to a new row
- <b>JavaScript</b>: We'll learn about using `if` statements to write conditional logic. We'll also learn about the `window` methods to understand our users screen size, scroll position, etc.

## Responsive Layout in CSS

### An Important Note

Although there are ways to determine what device a user is actually on (iPhone with Safari, Desktop with Chrome, etc.), by far the easiest way to make our site responsive is simply by looking at the browser's width.

- Mobile phone: ~350px - 550px with a typical breakpoint at about 375px,
- Tablet: ~550px - 1024px with typical breakpoints at 768px and 1024px,
- Desktop: ~1024px - 1800px with typical breakpoints at 1280px and 1440px,
- Large monitor/TV: ~1800px+

Remember, these are very different for every specific device though. It's best to design for a fluid range, and not target specific devices. At some point, there will be a new iPhone that's a different size, I promise.

### Let's get to @media

When we are building a simple layout and want content to wrap to a new line when the browser width shrinks, we can use `flex-wrap: wrap` in flexbox or our lovely magic CSS grid statement, `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`

However, when we want <b>complete</b> control over <b>all the styling</b> of a website at certain breakpoints, we use media queries in CSS

```css
/* this code will ONLY run when the browser is less than or equal to 550px wide */
@media (max-width: 550px) {
  h1 {
    color: blue;
  }
}
```

:::danger CSS Cascades from Top to Bottom
It's especially important to remember <i>how</i> CSS runs through our code when we use media queries. From <B>TOP TO BOTTOM!</b>
:::

Good Example :white_check_mark:

```css
/* first we set h1 color of organge everywhere */
h1 {
  color: orange;
}
/* then, we override the orange ONLY when the condition below is met, 
changing the  color to blue on a small device */
@media (max-width: 550px) {
  h1 {
    color: blue;
  }
}
```

Bad Example :x:

```css
/* don't do this! */
@media (max-width: 550px) {
  h1 {
    color: blue;
  }
}

h1 {
  color: orange;
}
/* the @media query was overriden by the h1 declaration afterwards... 
...it will never be blue :( */
```

### To `min-width` or to `max-width`?

This is a question of design philosophy. Some people prefer "mobile first" and others prefer "desktop first", either way it's best to define your media queries in acending order or decending order so that override each other in a logical manner.

<i>Basically, effective @media queries are just CSS overrides</i>

[Here's a list](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) of every property you can use in a media query, from MDN. But the most common is `min-width` and `max-width`

### JavaScript Conditionals

Similar to CSS, in JavaScript we can determine how big a user's screen size is. With this information, we can write conditional `if` statements to do things based on screen size

#### `window`

If you `console.log(window)` in JavaScript, you'll see a ton of properties and methods you can call. Here's a few:

```js
// all values returned are in pixels

window.innerWidth; // the width of the viewport
window.innerHeight; // the heigh of the viewport

window.scrollY; // how far you've scrolled down the page
```

#### `if`

Let's say we want to only run some code when someone is looking at our site on their phone

```js
if (window.innerWidth < 550) {
  // do something if condition is true (when the page loads)
  // any code in here will only run when the browser is less than 550px wide
}
```

There's a few ways to extend a standard `if` statement.

We can say `if` this `else` that

```js
if (window.innerWidth < 550) {
  // do something if true
} else {
  // do something if false
}
```

We can also say `if` this, `else if` that, `else` that

```js
if (window.innerWidth < 550) {
  // do something if true
} else if (window.innerWidth > 1440) {
  //  do something if true (and everything before was false)
} else {
  // do something else if everything was false
}
```

An important note: JavaScript will run through your `if` statment only until it finds the FIRST thing that's true.

---

Okay, let's use what we learned and do some coding!
