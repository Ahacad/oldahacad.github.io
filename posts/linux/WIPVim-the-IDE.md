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

This post teaches to turn neovim into powerful IDE like editors. I'v
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
- visuals:
  - [rainbow](https://github.com/luochen1990/rainbow): parentheses with colors
- language specifics:
