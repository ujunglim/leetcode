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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function isSame(leftNode, rightNode) {
        if (!leftNode && !rightNode) return true; // 두 자식 모두 없을때
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false; // 둘 중 하나만 없거나 둘의 값이 다를 떄
        // 둘다 있고 값이 같을때
        return isSame(leftNode.left, rightNode.right) && isSame(leftNode.right, rightNode.left);
    }
    return isSame(root.left, root.right);
};