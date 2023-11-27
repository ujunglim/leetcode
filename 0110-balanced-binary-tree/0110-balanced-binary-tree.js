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
// 맨 밑의 left, right 두 레벨의 차이가 2이상이면 height balanced하지 않고 바로 false를 리턴한다.
var isBalanced = function(root) {
    
    function getLevel(node) {
        if (!node) {
            return 1;
        }
        const leftLevel = getLevel(node.left);
        const rightLevel = getLevel(node.right);
        
        // 둘중 하나가 이미 불균형하다
        if (leftLevel === false || rightLevel === false) {
            return false;
        }
        if (Math.abs(leftLevel - rightLevel) > 1) {
            return false;
        }
        return Math.max(leftLevel, rightLevel) + 1;
    }
    return getLevel(root);
    
};