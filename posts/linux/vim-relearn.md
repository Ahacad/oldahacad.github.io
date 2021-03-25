---
title: "重学 Vim (WIP)"
date: "2021-03-25 18:54:06"
author: ahacad
category: "linux"
tags: ["vim"]
description: "用了 vim 已经很久了，却总是自己压根用好这个“神之编辑器”，特此重学。"
language: zh
mainpanel: true
published: true
---

### 前言

用人说用 vim 装逼，我想说确实装逼，但是更重要的是，客观上来说手指不离开键盘去弄鼠标和触摸板的确就是效率更高的，每次省下的这一两秒时间通过累计效应放大最后会有相当可观的效果；现代 vim (neovim) 在 coc 和 lsp (language support protocol) 的帮助下完全可以胜任日常开发，vim 对各种语言实现插件的支持(vimscript, TypeScript, python, rust, etc.) 也意味着被很多人吹捧的 VSCode 插件可以通过一些转化被 neovim 完全吸收使用，我不否认有一些事情是现代 GUI 才能做到的，但是考虑到VSCode 跑起来的 cpu 和 RAM 消耗以及带来的微小收益，我仍然会使用 neovim 作为自己的主力编辑器。

但是！在用了 vim -> neovim 约莫两年后，配了几十个插件后，我还是发现自己竟然平时只使用一些及其常见的操作("w", "q", "a", "i", etc. 差不多就是入门时候学得)，完全没有发挥出 vim 的能力。特此重新学习，释放 vim (neovim) 的威力。

---

```vim
zz: 将光标所在行拉到屏幕中央，以显示上下文
zt: 将光标所在行拉到屏幕最上方
zb: 将光标所在行拉到屏幕下方
```


### References

- [neovim.io user manual](https://neovim.io/doc/user/): 你也可以在 Unix 系统的 `/usr/share/nvim/runtime/doc` 找到所有的文档
- 
