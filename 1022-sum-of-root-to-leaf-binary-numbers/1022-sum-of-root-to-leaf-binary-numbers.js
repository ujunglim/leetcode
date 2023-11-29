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
var sumRootToLeaf = function(root) {
    let answer = 0;
    
    function dfs(currNode, accStr) {
        if (!currNode.left && !currNode.right) {
            answer += Number(parseInt(accStr+currNode.val, 2));
            return;
        }
        currNode.left && dfs(currNode.left, accStr + currNode.val);
        currNode.right && dfs(currNode.right, accStr + currNode.val);
    }
    
    dfs(root, '');
    return answer;
};