import { TreeNode } from "./common/entity";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q == null) {
        return true;
    }
    if (p == null && q != null) {
        return false;
    }
    if (p != null && q == null) {
        return false;
    }
    const isSame = p.val === q.val;
    return isSame && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};