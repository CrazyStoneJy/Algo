import { TreeNode } from "../src/common/entity";

describe('tree', () => { 

    test('bst', () => {
        let root = new TreeNode(3);
        root.left = new TreeNode(2);
        root.right = new TreeNode(4);

        let rootII = new TreeNode(3);
        rootII.left = new TreeNode(2);
        rootII.right = new TreeNode(4);

        // console.log(root == rootII, root, rootII);
        
        expect(root).toStrictEqual(rootII);

    });

    // test('101', () => {

    // });

});