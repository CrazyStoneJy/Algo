import { TreeNode } from "./common/entity";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return root;
    }
    const left = root.left;
    const right = root.right;
    root.left = invertTree(right);
    root.right = invertTree(left);
    return root;
};