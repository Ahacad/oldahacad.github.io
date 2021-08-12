---
title: "Linux Rices"
date: "2021-03-14 20:43:32"
author: ahacad
category: "linux"
tags: ["config"]
description: ""
language: zh
mainpanel: true
published: false
---

这篇文章不是一个强操作性的文章，请留出 10 余分钟的时间慢慢品尝，同时也不需要一次性读完，尝试一点、再回来读一点。

### Intro

Reddit 上有一个分区叫做 r/unixporn，上面是各路牛鬼蛇神分享自己的 Linux setup，当然如果你使用的是 Ubuntu 可能并没有遇到很多需要自己设置的地方，当你开始使用 WM (Windows Manager) 的时候，大概算是一只脚迈入了这个领域（大坑）。

据说疫情宅家的时候，很多人做的第一件事情是先折腾自己的工作台，而不是开始好好工作；类似的，Linux Users 在接手一台机器之后，不是想着怎么编程，而是先要把它做的漂亮。这当然没什么错，漂亮的机器有助于工作时的心情，良好的 shortcut setup 也能够节省下成吨的时间，问题是 setup 好了为啥还要上 unixporn 去看别人的配置呢？总归是人外有人天外有天，可惜精力有限，花上过多的时间折腾配置，不如多花点时间写写代码，学习学习；也许这就是 Linux User 的执念，既然选择了 Linux (并且折腾了 WM 很可能不是新手 Linux 用户)，那就要好好地造出属于自己的机器，也算是 Linux User 的一种浪漫吧。（当然，也是学习 C 语言的好机会，大部分 tools 都还是用 C 写的，小部分 cool tools 会用上更加有趣的语言，比如 Haskell 写的 Xmonad。）

之前学着 [TheCW](https://space.bilibili.com/13081489?from=search&seid=10510039626072481997) 和 [Luke Smith](https://www.youtube.com/channel/UC2eYFnH61tmytImy1mTYvhA) 入了 Arch 的坑，一直用着 dwm 以及配套工具，预计马上要换电脑了，特意再来折腾折腾 Arch，重新整理一下自己的配置和思绪。因为用到的工具实在是太多了，vim 等一些东西又自成体系，大概会写上好几篇文章。同时我也想设计设计能够多活几年的文章，GitHub 上还能够找到 78 年前的 WM 配置（对于快速发展的软件业来说已经算是不短的时间了），但是我有更大的野心，希望能够抽象出一些共通的东西，适用于无论哪个时代的 Linux Windows 配置，即使那个时候的操作系统已经不是 Linux。

### WM

如果你使用的是 Microsoft Windows 的话（2021 年是 Windows 10，或者更早的版本），你可能有着还算不错的电脑使用体验，很多人留在了 Windows 7 就是因为他长得好看；抑或是你使用的还是 Ubuntu、CentOS 自带的桌面环境(GNOME)，如果是这样的话，你就错过了 Linux 桌面的无限风景。Windows Manager TODO: WM history

为什么要使用 WM？一个实际的考虑是它会占用更少的资源，对于一个职业开发者来说这是非常关键的，能少用一点内存或者 CPU 都能够帮助到自己开发；更重要的是 WM 的灵活性允许你自由地配置它的长相，自由地设置自己的热键来达到最适合自己、尽可能高效的工作体验（当然一开始的话还是先抄作业比较好）。

必要的功能：对于一个 WM 来说，必要的功能是什么？细数一下：切换工作台（或者说桌面，对应一般桌面环境的虚拟桌面）、同时显示所有的窗口。在每一个工作台上时：打开一个新的窗口（通常是终端模拟器，比如 st、或者浏览器）、关闭一个新的窗口、调整窗口的大小、调整窗口排布方式（全屏、块状、浮动、等等）、

浮动时候：移动、调整窗口大小


不同的 WM 又有自己的设计哲学，比如 dwm 基于栈实现窗口管理，bspwm 基于二叉树实现窗口管理

dwm 的问题：更改起来太麻烦了，每次都需要重新编译安装，虽然 dwm 是 suckless 官方出品的轻量级；但是在热插拔上面实在是太难受了；相应的，著名的 st 也有这个问题，不过相对好些，毕竟终端模拟器重启起来还算比较容易，整个 WM 关掉就必须同时关掉其它重要的窗口（比如浏览器），最近 rust 写的 alacritty 在热插拔上做得就比 st 好得多。 


可移植性: sxhkd。sxhkd 提供了通用的热键接入接口，从此你不需要再忙于各个 WM 自己的热键，而是可以专心使用一套热键对付未来可能的所有变化。只要人类与机器的交互方式没有发生革命性的改变，以键盘为媒介的热键就不会消失，而即使是真的产生了革命性的交互方式，热键背后的意义依旧会以新的方式保留下来—— DRY，Don't Repeat Yourself，任何重复性的工作都值得你去为其提供快速既定的解决方案，这样的思想在计算机科学里面比比皆是，从算法到软件工程。


|                      |                          |                                                               |
| ---                  | ---                      | ---                                                           |
| windows manager      | bspwm/dwm/xmonad/...     |                                                               |
| application launcher | rofi/dmenu               |                                                               |
| shell                | zsh/nushell/bash         |                                                               |
| terminal emulator    | st/alacritty/urxvt/...   |                                                               |
| hotkey daemon        | sxhkd                    |                                                               |
| notification daemon  | dunst                    |                                                               |
| editor               | neovim/vim               |                                                               |
| status bar           | polybar                  |                                                               |
| browser              | chrome/brave/firefox/... |                                                               |
| pdf reader           | zathura/evince/...       |                                                               |
| screen locker        |                          |                                                               |
| file explorer        | lf/ranger                |                                                               |
| CJK 编辑器           | ibus                     | ibus 著名的开源编辑器，非常好用，扩展性很强，Android 版本也有 |
|                      |                          |                                                               |

|                      |                          |                                                               |
| ---                  | ---                      | ---                                                           |
| display manager      |                          |                                                               |
|                      | redshift                 | 保护眼睛                                                      |
| compositor           | compton/picom            |                                                               |
| network manager      |                          |                                                               |
| wallpaper            |                          |                                                               |
|                      | ueberzug                 |                                                               |
|                      |                          |                                                               |
|                      |                          |                                                               |

### Polybar

对于一个 WM，其灵魂之一就是一个好的 bar 了，来自普通桌面环境的你可能

### Reference


