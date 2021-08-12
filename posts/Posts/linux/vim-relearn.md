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

用人说用 vim 装逼，我想说确实装逼，但是更重要的是，客观上手指不离开键盘去弄鼠标和触摸板的确就是效率更高的，每次省下的这一两秒时间通过累计效应放大最后会有相当可观的效果；现代 vim (neovim) 在 coc 和 lsp (language support protocol) 的帮助下完全可以胜任日常开发，vim 对各种语言实现插件的支持(vimscript, TypeScript, python, rust, etc.) 也意味着被很多人吹捧的 VSCode 插件可以通过一些转化被 neovim 完全吸收使用，我不否认有一些事情是现代 GUI 才能做到的，但是考虑到VSCode 跑起来的 cpu 和 RAM 消耗以及带来的微小收益，我仍然会使用 neovim 作为自己的主力编辑器。

但是！在用了 vim -> neovim 约莫两年后，配了几十个插件后，我还是发现自己竟然平时只使用一些及其常见的操作("w", "q", "a", "i", etc. 差不多就是入门时候学得)，完全没有发挥出 vim 的能力。特此重新学习，释放 vim (neovim) 的威力。

---

### 基础复习

这篇文章重点不是基础，只稍微讲讲，具体可以参考 [MIT Missing semester: Vim](https://missing.csail.mit.edu/2020/editors/), 这个 [up 主的视频: theniceboy](https://www.bilibili.com/video/BV164411P7tw)，以及自带的 vimtutor。



### 重学 vim

##### 调整本行在屏幕中的位置

```vim
zz: 将光标所在行拉到屏幕中央，以显示上下文
zt: 将光标所在行拉到屏幕最上方
zb: 将光标所在行拉到屏幕下方
```
##### 跳跃:

```vim
``: 回跳到上一次的位置 (Vim 中称为 mark, 非本行内的跳跃产生 mark)，比如使用 G 跳到底部，再用 `` 可以在两点之间会跳
CTRL-O: 回跳到上一个 mark
CTRL-I: 跳到下一个 mark
```

```vim
%: 在括号之间来回跳跃，这样可以快速找到一个函数的末尾
```

##### marks: 

```vim
m{a-z}: 创建一个 mark
`{a-z}: 跳到 mark
'{a-z}: 跳到 mark 所在行的开头
'': 快速回调到上一行的开头
:marks : 查看所有的 mark
```

可以看出 `''` 跳到行的开头，跳到 mark。这些用小写字母打上的 mask 都是 local 的，而用大写字母打上的则是 global 的。

##### 删改

```vim
cc: 修改一整行，并进入 Insert Mode，C 是一样的效果
X: 删除前面一个字符
```

Text objects: （详见 vim help `:help text-objects`）

```vim
das：删除 a sentence (包含 sentence 后 whitespace)
dis：删除 inner sentence (不含 sentence 后 whitespace)
```

##### Format

```
gqG: (format)(to the last line)
```

##### Visual mode

在 Visual Mode 中:

```vim
o: 跳到 Visual 选中的行中的另一端
~: 改变选中字符的 case (lower <--> upper)
```

在 Block Visual Mode 中，此时有四个角:

```vim
o: 跳到对角线上的另一个角
O: 跳到同一行的另一个角
```

##### 转换

```vim
:TOhtml: 转化当前文件为 html
```

第一次看到这个功能的我惊了，非常强大。

##### 编辑多个文件

```vim
:file newname: 改当前文件名字
```

##### 分屏

```vim
:only: 关掉除了当前屏幕外的所有屏幕
:qall: 退出所有屏幕
:wall: 写并退出
```

```bash
vim -o file1 file2 file3: split 打开多个文件
vim -O file1 file2 file3: vsplit 打开多个文件
```

```bash
vim -d file1 file2: diff 模式打开文件
```

或者在 vim 中进入 diff

```vim
:vertical diffsplit anotherfile
```

### 




### References

- [neovim.io user manual](https://neovim.io/doc/user/): 你也可以在 Unix 系统的 `/usr/share/nvim/runtime/doc` 找到所有的文档
- 
