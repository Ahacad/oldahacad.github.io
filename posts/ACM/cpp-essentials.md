---
title: "常用 C++ 操作整理 (WIP)"
date: "2021-03-21 14:41:30"
author: ahacad
category: "acm"
tags: ["cpp"]
description: ""
language: zh
mainpanel: true
published: true
---

整理一些常用的 C++ 使用场景。本页面会时常更新。

### 1. 读入
```cpp
inline ll read(){
    char ch = getchar(); ll x = 0, f = 1;
    while(ch < '0' || ch > '9') {if(ch == '-') f = -1; ch = getchar();}
    while('0' <= ch && ch <= '9') {x = x * 10 + ch - '0'; ch = getchar();}
    return x * f;
}
```

```cpp
inline viod write(ll x) {
    if (x < 0) {
        putchar('-');
        x = -x;
    }
    if (x > 9) write(x / 10);
    putchar(x % 10 + '0');
}
```

### 文件操作

### 宏与常数

```cpp
#define ll long long // 长整型

const int INF = 0x3f3f3f3f;
const ll INF_LL = 9223372036854775807LL;

```

### 常用算法模板

#### gcd
TODO: explaining 
```cpp
ll gcd(ll a,ll b){while(b^=a^=b^=a%=b);return a;}
ll lcd(ll a , ll b){return a * b / gcd(a,b);}
```

TODO: sort for structs

TODO: prettier for c++
