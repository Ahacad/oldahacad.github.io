---
title: "从零开始配置好一个 centos 服务器"
date: "2021-04-02 11:16:30"
author: ahacad
category: "linux"
tags: [""]
description: ""
language: zh
mainpanel: true
published: false
---

最近换了服务器，乘着这个机会配置一下 centos


#### SSH

```bash
ssh-keygen -t rsa
```

登录上服务器，建立目录 `~/.ssh`，把自己电脑上生成的公钥 `~/.ssh/id_rsa.pub`
复制到服务器上 `~/.ssh/authorized_keys`
即可，或者使用如下命令（意思是一样的）:

```bash
cat .ssh/id_rsa.pub | ssh user@server 'cat >> .ssh/authorized_keys'
```
