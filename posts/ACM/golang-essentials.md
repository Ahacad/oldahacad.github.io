---
title: ""
date: "2021-03-21 18:42:50"
author: ahacad
category: ""
tags: [""]
description: ""
language: en
mainpanel: true
published: false
---

### 读入

直接使用 Scanf 因为缺少缓存的原因会有很严重的效率问题，我一开始用 Golang 写 OJ 的时候没有意识到，结果连 50 个 tests 的点都跑不过。。参考这篇[帖子](https://www.reddit.com/r/golang/comments/b3v3ud/alternatives_to_scanf/)
```
in := bufio.NewReader(os.Stdin)
fmt.Fscanf(in, "%d", &n)
```



注意 Golang 的 `Scanf` 会把 newline 当成 0，所以你需要手动加上 `\n`
