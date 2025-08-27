# Newsletter sign-up

## Table of contents

- [Overview](#overview)
  - [Screenshot and live site URL](#screenshot-and-live-site-url)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Inspired by](#inspired-by)

## Overview

### Screenshot and live site URL

| Desktop                                    | Mobile                                   |
| ------------------------------------------ | ---------------------------------------- |
| ![desktop](/assets/desktop-screenshot.png) | ![Mobile](/assets/mobile-screenshot.png) |

[Live Site URL](https://newzletter-sign-up.netlify.app/)

## My process

### Built with

- JavaScript 😀

### What I Learned

1. How to style an input placeholder using the `::placeholder` pseudo-element and understanding its purpose.
2. The `<form>` element triggers a `submit` event, which we can intercept and control using the `submit` event listener.
3. The second parameter of `element.classList.toggle` can be used to force a class to be added or removed based on a boolean condition — making code cleaner than a traditional `if/else` statement.
4. JavaScript regular expression syntax, the `RegExp.test(string)` method, and how to use regex for validating form inputs.
5. Why `event.preventDefault()` is necessary on a form’s `submit` event — to stop the default page reload and allow frontend validation before submission.
6. The `innerHTML` property, what it does, and when to use it for inserting HTML content dynamically.
7. In a flex container with two items in a row, setting `justify-content: space-between` pushes them to the far left and far right sides of the container — a very useful layout trick.
8. How disabling the `list-style` property and setting `li` elements to `position: relative`, combined with a `::before` pseudo-element, allows complete control over custom list item markers — which isn’t possible with the default `list-style`.

## Author

- Github - [@AminForouzan](https://github.com/AminForouzan)
- Frontend Mentor - [@AminForouzan](https://www.frontendmentor.io/profile/AminForouzan)

## Inspired by

- [Newsletter sign-up form with success message challenge on Frontend Mentor](link).
