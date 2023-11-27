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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const arr = [];
    function read(currNode) {
        if (!currNode) {
            return;
        }
        read(currNode.left);
        read(currNode.right);
        arr.push(currNode.val);
    }
    read(root);
    return arr;
};