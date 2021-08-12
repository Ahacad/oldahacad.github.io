---
title: "(WIP) Make Vim An IDE"
date: "2021-04-19 23:45:58"
author: ahacad
category: "linux"
tags: ["vim"]
description: "Make neovim IDE powerful."
language: en
mainpanel: true
published: true
---

This post teaches you how to turn neovim into powerful IDE like editors. I'v
been using neovim to hack for two years! Vim is by far the best editor I
ever find, because itself is actually not just an editor but **a model**
for editors, it's like a philosophy, editing based on modes and a great
many keyboard maps. Someone just like VSCode, the popular open source
editor by Microsoft based on electron. I think it's fine, and GUI do
have advantages over terminals in a few cases, but I need my editor to
be **fast and accessible anywhere**, this can only be done with vim,
where I have access to even on remote servers. But can vim be as
powerful as VSCode? My experiences give a positive answer, and this post
tells you how I make neovim (the new-vim) as powerful as VSCode, I've
been using it to develop large code projects, and I have a better time
using neovim than VSCode.

Main panel plugins are what you see when opening the editor (they are
essential build blocks), operational plugins are those that save you
tons of time, visual plugins make vim more awesome (visually), language
specific plugins are designed specifically for different programming languages.

plugins:
- main panel:
  - [coc.nvim](https://github.com/neoclide/coc.nvim) and related language supports
  - [coc-explorer](https://github.com/weirongxu/coc-explorer)
  - [vim-airline](https://github.com/vim-airline/vim-airline)
  - [vim-xtabline](https://github.com/mg979/vim-xtabline)
  - [indentLine](https://github.com/Yggdroot/indentLine): display indent level with thin lines
- operational:
  - [undotree](https://github.com/mbbill/undotree)       : see undos in tree
  - [ultisnips](https://github.com/SirVer/ultisnips)      : snippets at your command, I now use coc-snippets than this
  - [vim-table-mode](https://github.com/dhruvasagar/vim-table-mode) : create table easily
  - [vim-easy-align](https://github.com/junegunn/vim-easy-align): align easily
  - [fzf.vim](https://github.com/junegunn/fzf.vim): fzf in vim, search files quickly
  - [vim-surround](https://github.com/tpope/vim-surround): add and change surrounds easily
  - [vista.vim](https://github.com/liuchengxu/vista.vim): LSP symbols and tags
  - [nerdcommenter](https://github.com/preservim/nerdcommenter): comment easily
  - [auto-pairs](https://github.com/jiangmiao/auto-pairs): auto pair brackets
  - [suda.vim](https://github.com/lambdalisue/suda.vim): sudo write vim file
  - [vim-gitgutter](https://github.com/airblade/vim-gitgutter): show git diff marks
  - [vim-bookmarks](https://github.com/MattesGroeger/vim-bookmarks): bookmarks for vim
  - [vim-visual-increment](https://github.com/triglav/vim-visual-increment): incre/decrease numbers easily with one key
  - [vim-doge](https://github.com/kkoomen/vim-doge): generate docs quickly
  - [wildfire.vim](https://github.com/gcmt/wildfire.vim): select closest code quickly
  - [gv.vim](https://github.com/junegunn/gv.vim): view git graph history in vim
  - [vim-todo-lists](https://github.com/aserebryakov/vim-todo-lists): manipulate todo lists quickly in markdown
  - [vim-wakatime]((https://github.com/wakatime/vim-wakatime)): integrate with *wakatime* to count programming time
  - [editorconfig-vim](https://github.com/editorconfig/editorconfig-vim): *EditorConfig* plugin for vim, ensure same editor config in the team
  - [vim-illuminate](https://github.com/RRethy/vim-illuminate): highlight same words under cursor
- visuals:
  - [rainbow](https://github.com/luochen1990/rainbow): parentheses with colors
  - [vim-devicons](https://github.com/ryanoasis/vim-devicons): file type icons for vim
- language specifics:
  - [vim-startify](https://github.com/mhinz/vim-startify): awesome vim start page
