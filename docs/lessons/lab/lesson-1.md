---
title: The Developer Environment
sidebar: auto
---

# The Developer Environment

## Getting Set Up

1. Download a free text editor. I recommend [VS Code](https://code.visualstudio.com/).
1. Open the Terminal on your Mac

   - talk to me if you have a Windows PC instead; we will work through any Windows specific operations

1. Create a Github Account (if you don't already have one) and create a new repository for this course
1. Install [Git version control](https://git-scm.com/downloads)
1. Generate an SSH Key to add to your Github following [these instructions](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
   ::: warning
   Follow Directions Carefully
   :::

## Navigating the Terminal

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

## Basic Git Commands

```git

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

```
