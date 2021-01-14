---
title: "Building My Blog"
date: "2020-11-04 09:29"
tags: ["javascript", "building wheels"]
published: true
description: "The process of building my gatsby blog. It will always be updated while I am improving the website."
---

## Configurations
### Root import plugins

```bash
yarn add --dev gatsby-plugin-root-import
```

Add this line to `gatsby-config.js`: 'gatsby-plugin-root-import'.

### Scss plugin

```bash
yarn add gatsby-plugin-sass node-sass@4.14.1
```

Don't just use `yarn add node-sass`, the version is in conflict with other modules by now (2020-11-04). Add this line to `gatsby-config.js`: 'gatsby-plugin-root-import'. Then I can use import scss file as a module.

## Building

### Remove defaults

Remove `bio.js` and modify the rest, making it more customized.

### NavBar

Add `navbar.js` to `/src/components`, `<ul><li><Link>` should be your friend. Import navbar in files you like (`index.js` or `layout.js` or more)


