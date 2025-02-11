import { TreeNode } from "./common/entity";


function find(root: TreeNode | null, val: number): boolean {
    if (root == null) {
        return false
    }
    if (root.val === val) {
        return true
    }
    return find(root.left, val) || find(root.right, val)
}

function lca(root: TreeNode | null, p: number, q: number): TreeNode | null {
    if (root === null) {
        return null
    }
    let isInLeft = find(root.left, p) && find(root.left, q)
    let isInRight = find(root.right, p) && find(root.right, q)
    if (isInLeft) {
        return lca(root.left, p, q)
    }
    if (isInRight) {
        return lca(root.right, p, q)
    }
    if (!isInLeft && !isInRight) {
        return root
    }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null) {
        return null
    }
    return lca(root, p.val, q.val)
};