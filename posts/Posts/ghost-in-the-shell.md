---
title: "'Ghost' in the 'shell'"
date: "2020-11-25 19:41:36"
author: ahacad
category: "efficiency"
tags: ["terminal"]
description: "您的终端生活指南"
mainpanel: true
published: false
---

## Introduction

无论是否看过黑客帝国，你一定或多或少对“黑客”有所希冀，想象之中的他们是戴着黑兜帽和 V 字面具，坐在电脑前，疯狂地敲击键盘，过了一会整个城市的电力就瘫痪了……当然，如果你真的让城市的电力瘫痪了、恐怕得进局子，现实中的程序员也有不少还使用着 Windows 和鼠标，成天做着 `Ctrl+c`, `Ctrl+v` 的事情，实在与想象的场景大相径庭。

本文不会教你怎么成为一个真正的“黑客”——无论是实际上被曲解的“骇客”还是长久流传的黑客精神，但是本文会让你成为一个更加有效率的电脑使用者。没错，不仅是程序员，任何人都可以从接下来介绍的 terminal tools 受益，即使你不会与工程打交道，让电脑能真正为你工作、而不是你为它工作，是一个现代人必须的能力。

**DO NOT USE WINDOWS!** 除非为了一些必须的软件，比如 Adobe 旗下的创意工具和一些仅提供 windows 使用的程序，你没有理由使用 Windows，这样一个不尊重你隐私、难以自定义又错漏百出的操作系统，使用 mac，或者 linux。本文介绍的大部分工具都是为 unix 系统而生的(linux & macintosh 属于其派生)，虽然在 windows 上也能够使用 windows terminal 达到同样的效果，但是体验实在不尽如人意。

接下来本文将基于 linux 系统，介绍终端生活全副装备，实际上俺本人就是使用这些工具，除了浏览器之外几乎已经完全抛弃了 GUI (graphical user interface，图形界面)。

## The toolkit

### Must needed

#### suckless st + dwm: 基础设施

要生活在终端下，首先需要终端模拟器(只要使用到了图形界面就已经不是真正的终端，但是实际操作的区别不大[^1])。如果是新手，一个 linux distro 自带的终端模拟器足以先上手使用，但是如果需要更多的定制（比如颜色、透明度等等）寻找一些其它的终端模拟器是有必要的。

#### tmux: 多面手

#### neovim: 上古神器再生

#### lf: 飞一般的文件管理器

#### newsboat: 信息之源

#### colemak: 私货，不要使用 qwer 键盘

[Xah keyboard blog](http://xahlee.info/kbd/keyboard_blog.html)

### Optinal

#### rg: 全局代码搜索

#### khal: 日历 

#### musicbox: 终端网抑云:)

#### mpv: 你只需要这个视频播放器

### Final thoughts

美剧《硅谷》中的主人公 Richard Hendricks 说，电脑是他能接触到的唯一靠近~~档部~~并且发热的东西。有点悲哀，但是对 machine 的热爱还是体现得淋漓尽致。能够自己定制电脑（至少在软件层面），拥有某种意义上属于自己的“电脑”并与它建立联系，也算是符合一点黑客精神吧……








## Footnotes

[^1]: [Stackoverflow: terminal vs teminal emulator](https://unix.stackexchange.com/questions/254359/terminal-vs-terminal-emulator#:~:text=Terminal%20is%20actually%20a%20device,and%20also%20displayed%20on%20monitor.&text=The%20terminal%20emulator%20program%20will,the%20shell%20using%20pseudo%2Dterminal.)
