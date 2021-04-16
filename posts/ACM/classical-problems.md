---
title: "经典算法题"
date: "2021-04-11 23:18:09"
author: ahacad
category: "acm"
tags: [""]
description: ""
language: zh
mainpanel: true
published: false
---

经典算法题，也就是那些你睡觉突然被叫醒来做这道题也可以立刻做出来的题目。


### DP
#### 两字符串最长公共字串 

画一个两字符串矩阵就看得很清楚了

DP,  注意边界取 0
```cpp
if (a[i] == b[j]) { 
  res[i][j] = res[i-1][j-1] + 1; 
} else { 
res[i][j] = 0;
}
```
### 树
#### 树上最近公共祖先
