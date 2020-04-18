---
title: CSS & JS Lecture
sidebar: auto
---

# Responsive Design, Part 2

This week we'll cover remaining pieces of responsive design, along with some guidence on working with media in HTML/CSS/JS

:::tip REMINDER
You should be coding with the dev tools inspector panel ALWAYS. If not, you are coding in the dark. You will not see console errors with your code. You will also not see how Chrome is building your HTML, which is a huge clue as to why your code is broken.
:::

## Responsive Randon Tips

- You MUST have your `meta` tag in HTML so that you can view at the correct scale in Chrome responsive views
  ```HTML
  <head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ...
  </head>
  ```
- You might want to `overflow-x: hidden` on your `body` tag in CSS to prevent unintended horizontal scrolling, especially on a mobile device
- You've probably noticed it's harder to `position: absolute` something in a responsive world. Remember, `margin` and `padding` are your friends! Let the elements flow as they would, and only adjust when needed (i.e, an element should sit on top of something, etc)

## How to see your code on your physical phone when developing?

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
  .items:hover > .item {
    opacity: 1;
  }
}

/* The primary input mechanism of the device includes a pointing device of limited accuracy. */
@media (pointer: coarse) {
  /* write code in here that you want to run only when user is on a TOUCH device */
  .item {
    opacity: 1;
    position: static;
  }
}
```

## Working with images, advanced

### Object-Fit

When working with images, if you define only the `width` or only the `height` propery, the image will resize with respect to its aspect ratio. But what if you need to size both width and height to fit a specific size? Without doing anything else, it will destroy the aspect ratio and ruin your image.

So, your image must be cropped. In CSS, we have the ability to use `object-fit: cover` and `object-position` to crop our image so it doesn't destroy the aspect ratio.

```css
img {
  width: 500px;
  height: 250px;
  object-fit: cover;
  object-position: 0 62.5%;
}
```

### `<picture>` tag

Instead of simply using an `<img/>` tag to serve the same image everywhere, we can use the `<picture>` tag to serve different images based on a media query. This is helpful since we probably want to load smaller images that load faster on mobile devices

```HTML
<picture>
    <source srcset="/assets/images/small.jpg"
            media="(max-width: 750px)">
    <source srcset="/assets/images/medium.jpg"
            media="(max-width: 1400px)">
    <img src="/assets/images/large.jpg" />
</picture>
```

### Hosting Images on a CDN

But why? Well, this might seem a bit complex, but instead of hosting our images at different sizes and crops directly in our code repository, we can use a CDN image delivery service to request a URL to get manipulated versions of our original image. This way we can use `code` in our HTML img source instead of having to work with Photoshop to resize and crop images in advanced. It also loads our images MUCH faster 👍

```html
<!-- using local image -->
<img src="assets/images/dog-large.jpg" />

<!-- using remote CDN image with croping and sizing info inside the URL -->
<img src="https://res.cloudinary.com/alevinson/image/upload/c_fill,g_face,h_600,w_1100,y_0/v1587147567/dog-large_hnpsax.jpg" />
```

Below are a few examples, I use Cloudinary in the recorded Zoom lesson if you'd like to follow along. It's free to start using and you only need to pay once you hit a large number of requests. No credit card required to sign up.

- [Cloudinary](https://cloudinary.com/)
- [imgix](https://www.imgix.com/)
- [sirv](https://sirv.com/)

### Other Resources

- Here's a [pretty good blog post](https://ishadeed.com/article/image-techniques/) on working with images
- [My zoom lesson](https://NewSchool.zoom.us/rec/share/_-dHBpDX5FFLSYXC4mPQX4QsEov9eaa81SdIrPUKnxlFNQd5FQOivF2qwptnPcpb?startTime=1587153598000) walks through a lot of this too, don't forget to watch!
  - Check out the [in-class code](https://github.com/AndrewLevinson/symmetrical-octo-potato/tree/master/lab/week-12/in-class-example) too

<!-- Working with video and audio
position: sticky (and other positions) -->

  <!--
  show students how to document work by recording video via quicktime. Compression too? also, using markup to document work. Show examples of documentation on github? -->
