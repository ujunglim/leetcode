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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    
    function isMatchTarget(currNode, currSum) {
        if (!currNode.left && !currNode.right) {
            return currSum === targetSum;
        }
        if (currNode.left && isMatchTarget(currNode.left, currSum + currNode.left.val)) {
            return true;
        }
        if (currNode.right && isMatchTarget(currNode.right, currSum + currNode.right.val)) {
            return true;
        }
        return false;
    }
    return isMatchTarget(root, root.val);
    
};