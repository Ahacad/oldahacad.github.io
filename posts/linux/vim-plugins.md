---
title: "整理一下用到的 vim 插件"
date: "2021-02-18 21:17:37"
author: ahacad
category: "linux"
tags: ["vim", "plugin"]
description: ""
language: zh
mainpanel: true
published: false
---

现代版的 neovim 支持了 coc 驱动的 LSP 从而有了浮窗提示，并且可以使用 TypeScript 编写插件（实际上啥语言都可以，但是 TS 正好和 VS Code 兼容），把 neovim 打造成 IDE 绝对是可行的（并且我正在这么做着）。有人会说 IDE 就交给 IDE，折腾这干啥，然而我想说，即使 VSCode 支持 vim 模式，实际体验还是和 vim 完全比不了的，后者使用的时候真的可以做到双手不离开键盘；而为了尽可能保留原生 vim 体验，我的普通 vim 只配备了一些基本的插件，neovim 在配置后则像是重型战车，配置出来足以满足开发需求。

这篇文章整理一下我用到的插件，梳理一下自己的思路，去掉一些冗余的，深入挖掘一些感兴趣的，分享给各位朋友。

### 
