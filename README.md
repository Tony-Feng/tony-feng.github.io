# My Portfolio

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/tony-feng/tony-feng.github.io/main)
![GitHub](https://img.shields.io/github/license/tony-feng/tony-feng.github.io)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tony-feng/tony-feng.github.io)
![Lines of code](https://img.shields.io/tokei/lines/github/tony-feng/tony-feng.github.io)

[![SemVer Release](https://github.com/Tony-Feng/tony-feng.github.io/actions/workflows/semver-release.yaml/badge.svg?branch=main)](https://github.com/Tony-Feng/tony-feng.github.io/actions/workflows/semver-release.yaml)
[![Release GitHub Pages](https://github.com/Tony-Feng/tony-feng.github.io/actions/workflows/release-github-pages.yaml/badge.svg?branch=main)](https://github.com/Tony-Feng/tony-feng.github.io/actions/workflows/release-github-pages.yaml)

A portfolio page developed using React and Redux. It's based on one of my previous projects.
The link is here: [tony-feng.github.io](http://tony-feng.github.io/).

The portfolio page is a responsive React app, which is designed to display self-introduction and projects.
It has some great features:
1. It supports persistent dark mode and can switch to light/dark mode automatically when browsing this site for the first time.
2. It's easy to manage the content to display, allowing users to add/update/delete personal info and projects.
3. It owns the flexibility to customize the theme of the portfolio page.

## Installation

1. Make sure [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) are installed already.
2. After cloning this project to the local machine, run `npm i` in project folder to install dependencies.
3. When all dependencies are available, run `npm start` to boot up this project in development mode, and view it here: [http://localhost:3000](http://localhost:3000).
4. Enjoy! :rocket:

For those who would like to know how I progressively built this project, here are the dependencies I used step by step:
```
npm i -g create-react-app --use-npm
create-react-app . --use-npm
npm i react-router-dom prop-types @loadable/component \
  @mui/material @mui/icons-material @emotion/react @emotion/styled @mui/system \
  react-countdown react-lines-ellipsis
npm i @reduxjs/toolkit react-redux redux-thunk redux-persist
npm i gh-pages --save-dev
npm i @semantic-release/git @semantic-release/changelog @saithodev/semantic-release-backmerge --save-dev
```
