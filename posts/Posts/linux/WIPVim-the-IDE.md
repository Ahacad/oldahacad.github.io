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

## The update

I've recently moved to lua for vim, and have many updates to the list before.

  - [coc.nvim](https://github.com/neoclide/coc.nvim) and related language supports
- [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim): visual indentation guides
- [nvim-web-devicons](https://github.com/kyazdani42/nvim-web-devicons): vim-devicons in lua
- [bufferline.nvim](https://github.com/akinsho/bufferline.nvim): a better buffeline 
- [nvim-autopairs](https://github.com/windwp/nvim-autopairs): autopair
- [nvim-dap](https://github.com/mfussenegger/nvim-dap): debug in nvim
- [nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui): ui for nvim-dap
- [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim): symbols tree view
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter): treesitter and better word coloring for nvim
- [gitsigns.vim](https://github.com/lewis6991/gitsigns.nvim): git decorations on the left
- [neogit](https://github.com/TimUntersberger/neogit): neogit in vim
- [vim-clang-format](https://github.com/rhysd/vim-clang-format): format code by language and style
- [vim-go](https://github.com/fatih/vim-go): go support for vim
- [vim-markdown-toc](https://github.com/mzlogin/vim-markdown-toc): generate markdown toc
- [FTerm.nvim](https://github.com/numToStr/FTerm.nvim): floating terminals
- [markdown-preivew.nvim](https://github.com/iamcco/markdown-preview.nvim): markdown preview
- [hop.nvim](https://github.com/phaazon/hop.nvim): neovim motions at speed!
- [neoterm](https://github.com/kassio/neoterm): terminals in vim
- [vim-hexokinase](https://github.com/RRethy/vim-hexokinase): display colors by rgb(a)
- [nerdcommenter](https://github.com/preservim/nerdcommenter): comment functions
- [vim-visual-multi](https://github.com/mg979/vim-visual-multi): multiple cursors for nvim
- [suda.vim](https://github.com/lambdalisue/suda.vim): sudo write for nvim
- [dashboard-nvim](https://github.com/glepnir/dashboard-nvim): vim dashboard
- [vim-rooter](https://github.com/airblade/vim-rooter): change working directory
- [any-jump.vim](https://github.com/pechorin/any-jump.vim): code jump to definitions and references
- [nvim-neoclip.lua](https://github.com/AckslD/nvim-neoclip.lua): clip menu
- [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim): fuzzy finder
- [wildfire.vim](https://github.com/gcmt/wildfire.vim): select the closest text objects quickly
- [vim-surround](https://github.com/tpope/vim-surround): modify surroundings easily
- [vim-easy-align](https://github.com/junegunn/vim-easy-align): speed up aligning
- [filetype.nvim](https://github.com/nathom/filetype.nvim): speed up neovim startup by recognizing filetypes
- [vim-fugitive](https://github.com/tpope/vim-fugitive): git plugin for vim
- [focus.nvim](https://github.com/beauwilliams/focus.nvim): auto resize split window
- [vim-illuminate](https://github.com/RRethy/vim-illuminate): highlight same words under cursor


TODO:
    - copilot
  - [undotree](https://github.com/mbbill/undotree)       : see undos in tree
  - [ultisnips](https://github.com/SirVer/ultisnips)      : snippets at your command, I now use coc-snippets than this
  - [vim-table-mode](https://github.com/dhruvasagar/vim-table-mode) : create table easily
  - [vim-visual-increment](https://github.com/triglav/vim-visual-increment): incre/decrease numbers easily with one key
  - [vim-todo-lists](https://github.com/aserebryakov/vim-todo-lists): manipulate todo lists quickly in markdown
  - [vim-wakatime]((https://github.com/wakatime/vim-wakatime)): integrate with *wakatime* to count programming time
  - [editorconfig-vim](https://github.com/editorconfig/editorconfig-vim): *EditorConfig* plugin for vim, ensure same editor config in the team
- visuals:
  - [rainbow](https://github.com/luochen1990/rainbow): parentheses with colors


NOT USED: 
- [nvim-tree.lua](https://github.com/kyazdani42/nvim-tree.lua): file explore in lua
