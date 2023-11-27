/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 나무가 full binary tree 인지
var invertTree = function(root) {
    if (!root) {
        return root;
    }
    invertTree(root.left);
    invertTree(root.right);
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};