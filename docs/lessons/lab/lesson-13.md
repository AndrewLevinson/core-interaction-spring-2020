---
title: SVG Lecture
sidebar: auto
---

# Intro to SVG!

:::tip What is SVG?
<i>"Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics. As such, it's a text-based, open Web standard for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including CSS, DOM, JavaScript, and SMIL. SVG is, essentially, to graphics what HTML is to text.</i>

<i>SVG images and their related behaviors are defined in XML text files, which means they can be searched, indexed, scripted, and compressed. Additionally, this means they can be created and edited with any text editor or with drawing software.</i>

<i>Compared to classic bitmapped image formats such as JPEG or PNG, SVG-format vector images can be rendered at any size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so. With proper libraries, SVG files can even be localized on-the-fly."</i>

--[MDN](https://developer.mozilla.org/en-US/docs/Web/SVG)
:::

SVG is essentially just text that describes basic 2-D shapes. And that 'text' content can be used in HTML, CSS, and JavaScript. That's why it's lossless. It's always why it's awesome for illustration, interactivity, and animation.

## The Basics of SVG

1. #### How do we get our hands on an svg?
   - We can make them in design software (just export your design as an SVG)
   - We can write svg code by hand
   - We can use open-source resources to download and use them
   - We can use JavaScript libraries to generate svg code
2. #### How do we use svg?
   - There's actually a lot of ways, we'll cover two:
     1. inside an `<img/>` tag
     2. Paste the `<svg>` tag inline in our HTML
3. #### How do we interact with an svg element?
   - CSS and JavaScript, of course! :smile:
     - ...but only if it's added inline in your HTML, not in an `<img>` tag
4. #### How do we animate with svg?

   - CSS transitions and keyframes
   - JavaScript Libraries
   - [SMIL - built-into SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL)

## Suggested Workflow if Exporting from Design Tool

1. Export design as SVG from Illustrator, Sketch, etc.
2. Use [SVGOMG](https://jakearchibald.github.io/svgomg/), an optimizer to clean up exported code <i>(there are a lot of options, but the defaults generally work well)</i>
3. Copy the code and paste it inline into your HTML

```HTML
<!-- it will look something like this...  -->
<svg class="coding-svg" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
  <path
    class="type"
    d="M40.263 88.975c6.162..."
    fill-rule="nonzero"
    fill="transparent"
    stroke="#000"
  />
  <rect class="box" x="12" y="19" width="376" height="112" rx="2" fill="none" stroke="#000" stroke-width="1px" />
</svg>
```

4. Get to styling and animating with CSS and then JS

   - [Here's every SVG Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)
   - Animate using transitions and keyframes (get started with [stroke animation](https://css-tricks.com/svg-line-animation-works/))
   - Use a JavaScript library for more complex animations (some listed below)

:::warning SVG vs. CSS Attributes
Not every attribute in SVG can be used as a CSS property.

Use [this list of Presentation Attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) to know what you can target with CSS
:::

## Resources

- Getting started:
  - [MASSIVE guide to all things SVG](https://css-tricks.com/mega-list-svg-information/)
  - [SVG Usage Basics](https://svgontheweb.com/)
- Three great people to follow that produce a lot of SVG content
  - [Sara Soueidan](https://www.sarasoueidan.com/tags/svg/)
  - [Sarah Drasner](https://sarahdrasnerdesign.com/)
  - [Chris Coyier](https://chriscoyier.net/)
- Helpful things
  - [Free SVG Icons](https://iconsvg.xyz/)
  - [Product Illustrations](https://undraw.co/illustrations)
  - [Path animation tutorial w/ CSS](https://css-tricks.com/svg-line-animation-works/)
  - [SVG Optimizer](https://jakearchibald.github.io/svgomg/)
  - [Path generator tool](https://jxnblk.github.io/paths/)
  - [Animation code generator](https://svgartista.net/)
- Libraries
  - [Two.js - good one to get started with](https://two.js.org/examples/)
  - [GSAP - major pro library, very advanced](https://greensock.com/)
  - [Snap](http://snapsvg.io/)
  - Data Visualization
    - [Chartjs - the easiest charting library](https://www.chartjs.org/)
    - [High Charts](https://www.highcharts.com/)
    - [D3 - for pro-level data viz](https://d3js.org/)
