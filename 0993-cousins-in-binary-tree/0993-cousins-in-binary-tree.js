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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
// 노드별로 parent, depth정리
// unique => hash써도 될듯
var isCousins = function(root, x, y) {
    const hash = {};
    
    function dfs(currNode, parentNode, depth) {
        if (!currNode) return;
        
        hash[currNode.val] = {parent: parentNode ? parentNode.val : null, depth};
        
        dfs(currNode.left, currNode, depth+1);
        dfs(currNode.right, currNode, depth+1);
    }
    
    dfs(root, null, 0);
    
    if (
        hash[x].parent === hash[y].parent 
        || hash[x].depth !== hash[y].depth) {
        return false;
    }
    return true;
};