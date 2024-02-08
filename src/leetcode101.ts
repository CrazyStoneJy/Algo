import { TreeNode } from "./common/entity";

function check(left: TreeNode | null, right: TreeNode | null) {
    if (left != null && right != null) {
        const isSame = left.val === right.val;
        return isSame && check(left.left, right.right) && check(left.right, right.left);
    }
    return left == null && right == null;
}

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    return check(root.left, root.right);
};