// 3319. K-th Largest Perfect Subtree Size in Binary Tree

import { TreeNode } from "./common/entity";


function isPerfectTree(root: TreeNode | null): boolean {
    if (root === null) { return true }
    const result = (root.left == null) === (root.right == null)
    return result && isPerfectTree(root.left) && isPerfectTree(root.right)
}


function kthLargestPerfectSubtree(root: TreeNode | null, k: number): number {
    
};