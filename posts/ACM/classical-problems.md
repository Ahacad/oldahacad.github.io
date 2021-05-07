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

经典算法题，也就是那些你睡觉突然被叫醒来做这道题也可以立刻做出来的题目。不少用了
leetcode，“大神”们可能觉得太 low 了配不上 ACM
的名号，但是作为基础训练我认为 leetcode 是不错的平台

#### 二分
我知道你会想：“二分我还不会写！？”
然而你可能真的不会，二分虽然思想很简单但是边界处理上还是有不少魔鬼细节的，这篇文章总结的比较全面
[详解二分查找算法](https://www.cnblogs.com/kyoner/p/11080078.html)
。当然标准库 `<algorithm>` 里面已经包含了 `std::binary_search`, 
`std::upper_bound`, `std::lower_bound`
模板题目刷好了之后可以直接调用，但是一定要去弄清楚原理，因为你不知道哪一天会需要自己魔改二分



- 基础二分模板：[leetcode 704.binary search](http://localhost:8090/)
- 找不存在的数的二分：[leetcode 35.search insert position](https://leetcode-cn.com/problems/search-insert-position/): 其实只要在基础模板上稍微改动一点点末端处理即可
- 带重复区间的二分模板：[leetcode 34.find first and last position of element in sorted array](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

扩展一下，二分作为基础算法使用范围非常广:
- 求平方根：[leetcode 69.sqrtx](https://leetcode-cn.com/problems/sqrtx/)
- 判断是不是平方根：[leetcode 367.valid perfect square](https://leetcode-cn.com/problems/valid-perfect-square/)

来上水题:
- [luogu P1873 砍树](https://www.luogu.com.cn/problem/P1873): 找右边界

#### 滑动窗口

著名的滑动窗口

- 滑动窗口模板 [leetcode 209.minimum size subarray sum](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)
- 需要计数的滑动窗口 [leetcode 904.fruit into baskets](https://leetcode-cn.com/problems/fruit-into-baskets/submissions/)
- 需要计数的滑动窗口 [leetcode 76.minimum window substring](https://leetcode-cn.com/problems/fruit-into-baskets/submissions/)

#### 快慢指针 

快慢指针也很常见的。

- 删除特定元素 [leetcode 27.remove element](https://leetcode-cn.com/problems/remove-element/)
- 删除重复元素 [leetcode 26.remove duplicates from sorted array](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
- 把特定元素移到末尾（本质就是删除） [leetcode 283.move zeroes](https://leetcode-cn.com/problems/move-zeroes/)
- 变成两个数组的指针了，此题需稍稍转弯 [leetcode 844.backspace string compare](https://leetcode-cn.com/problems/backspace-string-compare/)
- 也是双指针，头尾 [leetcode 977.squares of a sorted array](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)

#### Topk

这个很经典了，求数组里第 k
大的数字。要是排序再取的话面试官会揍死你（bushi)。各种刷题论坛流传甚广的方法是所谓快速选择算法，类似魔改快速排序。

```cpp
```

或者也可以用线段树/树状数组，尤其是树状数组写起来很简单，比起上面快速选择的算法也更容易理解（前提是你已经会了树状数组）

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
