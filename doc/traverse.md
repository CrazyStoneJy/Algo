#### 算法

算法的核心思路：穷举

#### 遍历的方式

`DFS`（深度遍历）&`BFS`(广度遍历)

#### 遍历

遍历的数学原理，基于归纳法。

##### 链表的遍历

链表的数据结构:

```js
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}
```

迭代法遍历

```js
function traverse(root) {
  	while(root !== null) {
      console.log('current root node:', root.val);
      root = root.next;
    }
}
```

基于DFS的遍历

```js
function dfs(root) {
  if (root === null) {
    return;
  }
  console.log('current root node:', root.val);
  dfs(root.next);
}
```



##### 二叉树的遍历

二叉树的数据结构：

```js
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
```



二叉树的迭代法

```js
function traverse(root) {
  
}
```

基于`DFS`的遍历

```js
function dfs(root) {
  if (root === null) {
    return;
  }
  // preOrder
  // console.log('current tree node:', root.val);
  dfs(root.left);
  // inOrder
  // console.log('current tree node:', root.val);
  dfs(root.right);
  // postOrder
  // console.log('current tree node:', root.val);
}
```

基于`BFS`的遍历

```js
function bfs(root) {
  let queue = [];
  queue.push(root);
  while (!queue.isEmpty()) {
    const element = queue.poll();
    // console.log('current tree node:', element.val);
    if (element.left !== null) {
      queue.offer(element.left);
    }
    if (element.right != null) {
      queue.offer(element.right);
    }
  }
}
```

##### 多叉树的遍历

多叉树的数据结构定义:

```js
function MultiTreeNode(val, children) {
  this.val = val;
  this.children = children;
}
```

迭代法

```js

```

基于`DFS`

```js
function dfs(root) {
  if (root === null) {
    return;
  }
  for (let treeNode of root.children) {
    dfs(treeNode);
  }
}

```





##### 图的遍历（基于邻接链表）







