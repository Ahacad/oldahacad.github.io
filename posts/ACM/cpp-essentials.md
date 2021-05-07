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

TODO: 数组初始化 

### 1. 读入
```cpp
// 读入数字,
inline ll read(){
    char ch = getchar(); ll x = 0, f = 1;
    while(ch < '0' || ch > '9') {if(ch == '-') f = -1; ch = getchar();}
    while('0' <= ch && ch <= '9') {x = x * 10 + ch - '0'; ch = getchar();}
    return x * f;
}

// 更通用的模板写法
template <typename T> 
inline T read(){
    char ch = getchar(); T x = 0, f = 1;
    while(ch < '0' || ch > '9') {if(ch == '-') f = -1; ch = getchar();}
    while('0' <= ch && ch <= '9') {x = x * 10 + ch - '0'; ch = getchar();}
    return x * f;
}
```

```cpp
inline viod write(ll x) {
  static int st[35];
  int top = 0;
  do {
    st[top++] = x % 10, x /= 10;
  } while (x);
  while(top)
    putchar(sta[--top] + 48);
}

template <class T>
inline void write(T x) {
  if (x < 0) x = -x, push('-');  // 负数输出
  static T sta[35]; T top = 0;
  do {
    sta[top++] = x % 10, x /= 10;
  } while (x);
  while (top) push(sta[--top] + '0');
}
```

### 文件操作

### 宏与常数

```cpp
#define ll long long // 长整型

const int INF = 0x3f3f3f3f;
const ll INF_LL = 9223372036854775807LL;

```
### 类型转换

string to int:
```cpp
string str1 = "123"; // string
int a = stoi(str1);
char str2[] = "123"; // char array
int b = atoi(str2);
```

int to string:
```cpp
int num = 2;
string str1 = to_string(num);
stringstream ss << num; // before c++11
string str2 = ss.str();
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

### 数据结构


#### map

#### set



