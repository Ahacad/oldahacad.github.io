---
title: "JavaScript 仓库源码阅读"
date: 2021-05-14 10:31:43
author: Ahacad
summary: ""
category: "developing"
tags: ["source code", "JavaScript"]
description: ""
language: zh
mainpanel: true
published: false
---

来整理一下平时阅读的 JavaScript 源码。


### [snapdrop](https://github.com/RobinLinus/snapdrop)

类似 airdrop，快速在不同设备间传输，用到了 WebSockets、Node 后端、Docker、PWA。

这个仓库比较简单，总代码量 2k LoC 左右，四个主文件夹分别放不同模块：
- client: 前端，没有任何框架，手撸的
- server: 后端
- docker: 启动 docker 的一些文件
- doc: 文档

