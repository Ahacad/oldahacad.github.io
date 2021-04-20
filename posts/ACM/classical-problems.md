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

#### Topk

这个很经典了，求数组里第 k
大的数字。要是排序再取的话面试官会揍死你（bushi)。各种刷题论坛流传甚广的方法是所谓快速选择算法，类似魔改快速排序。

```cpp

```

或者也可以用线段树/树状数组

### DP #### 两字符串最长公共字串 

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
#### 树上最近公共祖先 (LCA)

最简单的递归，O(n)

```cpp
TreeNode* lowestCommonAncestor(TreeNode *root, TreeNode* p, TreeNode *q)
{
  if (root == NULL) return NULL;
  if (root == p || root == q) return root;
  TreeNode* left = lowestCommonAncestor(root->left, p, q);
  TreeNode* right = lowestCommonAncestor(root->right, p, q);
  if (left == NULL) return right;
  if (right == NULL) return left;
  if (left && right) return root;
  return NULL;
}
```

LCA 是一个经典问题，还有倍增、ST-RMQ，Tarjan
算法有更好的效率，这里暂时只写倍增，其它留待之后。
倍增的思想就是利用二的倍数的性质，分别将 pq
两个节点往上跳，直到跳到一起结束，跳的时候利用预先 cache 的 2
倍数数组加速。核心有两步：
- 第一步：将 pq 跳到同一层，如果两者重叠则可直接返回
- 第二步：如果没有跳到同一层，两者再往上跳找到重叠的位置。


#### 
