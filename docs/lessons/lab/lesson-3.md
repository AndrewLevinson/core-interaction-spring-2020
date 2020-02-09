---
title: CSS Lecture
sidebar: auto
---

# Let's Talk Style

## First, let's review [CSS box-sizing](https://css-tricks.com/box-sizing/)

<br><br>

::: tip Activate!
In groups of 3, recreate Andrew's styled sample class site.

1. Downloading the [starter code here](../../week-3-inclass-starter-lab.zip)
2. Review the design mock and discuss the css properties needed to achieve this design.
3. Write the CSS in the `style.css` provided
   DO NOT TOUCH THE HTML. You may only edit the CSS

- _Bonus_: if you finish early, try to implement the interactive `:hover` elements on the page (Ask Andrew to show you the interactions)
  :::

---

<b>Let's take a break? :sweat_smile:</b>

---

## Review [The CSS Cascade](https://wattenberger.com/blog/css-cascade)

## Talk about [default browser styles](https://browserdefaultstyles.com/) and resets/defaults to begin a project

```css
/* Set box-sizing to border-box for all elements */
html {
  box-sizing: border-box;
  font-size: 62.5%;
  /* I set font-size to 62.5% so default font-size is 10px so 1.6rem = 16px 
  it also responds to user's base browser text size because it's a percentage */
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Reset margins and paddings on most elements */
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
}

/* Reset forms and buttons */
input,
textarea,
select,
button {
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
}
```

## Layout with Flexbox `display: flex`

```css
.parent-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ... and a ton of other possibilities;
}
```

- [An animated guide to flexbox](https://www.freecodecamp.org/news/an-animated-guide-to-flexbox-d280cf6afc35/)

---

Get started on the [homework](../../agendas/week-3.html#homework-3)
