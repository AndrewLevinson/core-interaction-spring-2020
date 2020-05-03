---
title: API Lecture
sidebar: auto
---

# Intro to using an API!

## API?

:::tip What is an API?
API stands for Application Programming Interface and it's basically a way for code to interact between multiple software intermediaries. For example, between different domains on the web. Instead of full web pages, API's just return data—usually in the form of JSON (JavaScript Object Notation). Then, we build HTML content driven by that data.
:::

## Why do APIs exist?

APIs are great for accessing third-party content, especially database content. It's particularly useful if the data often changes or updates. For example, we could use an API to get the current weather. If we didn't use an API for this, we would need to manually change our code every day, or every hour (which is no fun). An API will keep our weather content up to date at all times because it performs a new request every time a user loads our website.

APIs are also great for posting content. For example, we could use the Twitter API to post a tweet from a website we've created, instead of having to go to twitter.com to do it.

## Terminology

When using an API, there's a request for data/action and then a response from the server.

We have `GET`, `POST`, `DELETE`, and `PUT` as requests we can make with an API.

- `GET`: This reads existing data, like a list of movies to display
- `POST`: This creates new content, posting a new tweet, or adding a review
- `PUT`: This updates content, like editing a social media post or a yelp review
- `DELETE`: As you'd expect, this deletes a piece of content, like deleting a post or review

## How do I use an API?

There's two ways. We can use an API that exists from a third party or we can make our own. We will focus on using an API that's already out there.

Let's use the [The Movie Database's API](https://www.themoviedb.org/documentation/api) to learn. Follow along in our [recorded zoom lesson](https://newschool.zoom.us/rec/play/75Qld-v7rGg3H9yctASDVP8oW9S8L_is1ydM8vdbmR7hBXEGNFOiYLETZuDBe7eex8f7ZJZWn8yjRYRZ?startTime=1588363353000&_x_zm_rtaid=gmASYeq_TpeI_5vKhQZU-w.1588546080440.784337999a9389764f2bf943867db753&_x_zm_rhtaid=907). Take a look at the final [github code](https://github.com/AndrewLevinson/symmetrical-octo-potato/tree/master/lab/week-14/in-class-example) and our [live website](https://andrewlevinson.github.io/symmetrical-octo-potato/lab/week-14/in-class-example/)

### We'll learn how to:

- Sign up for an API key (password)
  :::danger API Key Warning
  <b>NEVER</b> commit code to github that has a secret key. For this class, our TMDB key doesn't contain sensitive data so we will put it on GitHub. But if you have an API key connected to one of your internet accounts, databases, hosting platforms, etc. you need to keep it private and <b>cannot use GitHub Pages to host your site</b>. You would need a more advanced platform like Heroku or Netlify
  :::
- Walk through [the documentation](https://developers.themoviedb.org/3) to know how to get started and navigate the API
- Show [JSON response in browser](https://api.themoviedb.org/3/movie/popular?api_key=94a83d421d79431debf81630227da2ff&language=en-US&page=1) using [this endpoint for popular movies](https://developers.themoviedb.org/3/movies/get-popular-movies)
  - Make sure to install a JSON formatter broswer extension so you can see parsed JSON, that isn't a mess! I use one called [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) in the Chrome webstore
- Learn `fetch` and `async/await` JavaScript methods to load data to our website
  - Remember, you must use a local development server when working with an API. I prefer the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code Extension.
    - You can alse run a simple server with python by typing `python -m SimpleHTTPServer` in your terminal (make sure you're in the correct directory). It will automatically output the contents of the directory to `http://localhost:8000` in your browser

## Resources

- [A good explaination of APIs](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)
- A pretty decent [list of public APIs](https://github.com/public-apis/public-apis)
