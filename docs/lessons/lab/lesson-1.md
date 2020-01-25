---
title: The Developer Environment
sidebar: auto
---

# The Developer Environment

## Getting Set Up

1. Download Google Chrome. We will use it the entire semester. Mozilla Firefox is also acceptable. Don't even think about Safari though. We will talk about why later in the semester.
1. Download a free text editor. I recommend [VS Code](https://code.visualstudio.com/).
1. Create a [Github Account](https://github.com/) (if you don't already have one) and create a new repository for this course. Accept the option to initialize your repository with a `README.md` file :white_check_mark:

1. Open the Terminal on your Mac or Command Line on your Windows
1. Install [Git version control](https://git-scm.com/downloads)

## Using the Terminal and Git

If you wanted to, you could do just about anything you can imagine in the terminal without ever using a GUI. However, we're going to keep it simple. The below commands for the Terminal and for Git are likely all you will need in this course...and likely in life.

### Top Terminal Commands

```shell
# Go Home
~

## Current Directory
pwd

# Change Directory
cd path/to/directory

# Listing Directory
ls

# Open current folder in terminal
open .
# Open file
open ./path/to/filename

# Create a Directory (folder)
mkdir directory-name

# Create an empty file
touch index.html
```

### Top Git Commands

```git
# What to do when you're ready save your work and update your remote Github Repo:

#0. always check the status of your work in between EVERY step.
git status
# 1. Add all your work to stage it.
git add .
# 2. Commit your work.
git commit -m"a great message about what you did"
# 3. Push to your Github (it will automatically update your website too!)
git push origin master
```

```git
# here's a bunch of helpful stuff in no particular order
# initialize Git tracking on folder (and children)
git init

# clone repo
git clone git@github.com:repo-name

# check status - use this between ALL commands (seriously!)
git status

# add file
git add file-name
# add all files
git add .

# commit
git commit -m"custom commit message describing your changes"

# Push your changes to remote repository (your github repo)
git push origin branch-name

# Stash changes
git stash

# see local branches
git branch

# switch to another branch
git checkout branch-name

# create and go to new branch
git checkout -b branch-name

# Merge another branch into your current branch
git merge branch-name

# help!
git help

```

## README.md

- Let's edit, commit and push your `README.md` file to your new repository :tada:
- But first, what is [`Markdown`](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

::: tip Don't want to type in your password every time you push to Github?
Generate an SSH Key on your machine to add to your Github following [these instructions](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
:::

## Start on Homework

- Create an `index.html` file and add as much structure and style as you'd like.
- Push to Github
- Turn on [Github Pages](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site#creating-your-site)

<!-- ## Next: [HTML Lesson & Setting up Github Pages →](lesson-2.md-disabled) -->
