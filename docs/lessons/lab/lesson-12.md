---
title: CSS & JS Lecture
sidebar: auto
---

# Responsive Design, Part 2

This week we'll cover remaining pieces of responsive design, along with some guidence on working with media in HTML/CSS/JS

:::tip REMINDER
You should be coding with the dev tools inspector panel ALWAYS. If not, you are coding in the dark. You will not see console errors with your code. You will also not see how Chrome is building your HTML, which is a huge clue as to why your code is broken.
:::

## Responsive Tips

- You might want to `overflow-x: hidden` on your `body` tag in CSS
- You MUST have your `meta` tag in HTML so that you can view at the correct scale in Chrome responsive views
  ```HTML
  <head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ...
  </head>
  ```
  - You've probably noticed it's harder to `position: absolute` something in a responsive world. Remember, `margin` and `padding` are your friends! Let the elements flow as they would, and only adjust when needed (i.e, an element should sit on top of something, etc)

## How to see your code on your phone?

- [Using IP address](https://medium.com/@claire.ristow/how-to-test-your-localhost-on-an-iphone-54e7b11439b7)
- [iOS Simulator (build in to xCode)](https://medium.com/@ali.dev/how-to-use-xcode-ios-simulator-for-responsive-web-testing-on-mac-7870ee4fc22b)

## @media query, for touch

Last week we covered using `@media` for testing how big a user's browser is, but we can also style based on device-type. Interaction design on touch devices is much different than a desktop computer—this will help craft a better experience for your users.

Take a look at [this CSS tricks article](https://css-tricks.com/touch-devices-not-judged-size/) for the full story, but here's the basics that will get you most of the way there in detecting a touch device:

```css
/* The primary input mechanism of the device includes an accurate pointing device. */
/* this is good for hover event that you only want to run with a mouse */
@media (pointer: fine) {
  /* write code in here that you want to run only when user is on a device with a mouse*/
  .item:hover {
    opacity: 1;
  }
}

/* The primary input mechanism of the device includes a pointing device of limited accuracy. */
@media (pointer: coarse) {
  /* write code in here that you want to run only when user is on a TOUCH device */
  .item:hover {
    opacity: 0;
  }
}
```

## Working with images, advanced

### Object-Fit

```css
object-fit: cover;
object-position: 0 62.5%;
```

### `<picture>` tag

```HTML
<picture>
    <source srcset="/media/examples/surfer-240-200.jpg"
            media="(min-width: 800px)">
    <img src="/media/examples/painted-hand-298-332.jpg" />
</picture>
```

### Hosting Images on a CDN

- [Cloudinary](https://cloudinary.com/)
- [imgix](https://www.imgix.com/)
- <i>there are many more, I'll add some more here and to our resources page</i>

<!-- * object-fit stuff
* Working with video and audio
* CDN links?
* position: sticky (and other positions) -->
  <!--
  show students how to document work by recording video via quicktime. Compression too? also, using markup to document work. Show examples of documentation on github? -->
