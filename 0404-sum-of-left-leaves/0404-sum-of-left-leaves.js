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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root.left && !root.right) {
        return 0;
    }
    let answer = 0;
    
    function traversal(currNode, dir) {
        if (!currNode.left && !currNode.right) {
            if (dir === 'left') {
                answer += currNode.val;
            }
            return;
        }
        if (currNode.left) {
            traversal(currNode.left, 'left');
        }
        if (currNode.right) {
            traversal(currNode.right, 'right');
        }
    }
    traversal(root, '');
    return answer;
};