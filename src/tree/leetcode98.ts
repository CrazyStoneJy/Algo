import { TreeNode } from "../common/entity";

function isValid(root: TreeNode, minValue: number, maxValue: number): boolean {
    // check root val is range in (minValue, maxValue)
    if (root == null) {
        return true;
    }
    const valid = root.val > minValue && root.val < maxValue;
    return valid && isValid(root.left, minValue, root.val) && isValid(root.right, root.val, maxValue);
}

function isValidBST(root: TreeNode | null): boolean {
    return isValid(root, -Infinity, Infinity);
};