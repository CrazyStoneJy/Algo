
class TNode {
    val: number
    children: TNode[]
    constructor(val?: number) {
        this.val = (val===undefined ? 0 : val)
        this.children = []
    }
}

function preorder(root: TNode | null): number[] {
    const arr: number[] = [];
    pre(root, arr);
    return arr;
};

function pre(root: TNode | null, arr: number[]) {
    if (!root) {
        return;
    }
    arr.push(root.val);
    // traverse children
    if (root.children && root.children.length > 0) {
        root.children.forEach((node: TNode | null) => {
            pre(node, arr);
        });
    }
}