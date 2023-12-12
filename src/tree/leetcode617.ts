import { TreeNode } from "../common/entity";

function getVal(root: TreeNode | null) {
    return root ? root.val : 0;
}

function getLeft(root: TreeNode | null) {
    return root ? root.left : null;
}

function getRight(root: TreeNode | null) {
    return root ? root.right : null;
}

function merge(root1: TreeNode | null, root2: TreeNode | null): TreeNode {
    // base case
    if (root1 === null && root2 === null) {
        return null;
    }
    const val = getVal(root1) + getVal(root2);
    const root = new TreeNode(val);
    root.left = merge(getLeft(root1), getLeft(root2));
    root.right = merge(getRight(root1), getRight(root2));
    return root;
}

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (root1 === null) {
        return root2;
    }
    if (root2 === null) {
        return root1;
    }
    if (root1 === null && root2 === null) {
        return null;
    }
    return merge(root1, root2);
};