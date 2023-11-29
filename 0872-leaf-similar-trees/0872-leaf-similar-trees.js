/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// 모든 leaf를 정리한다음 아님 
// leaf비교하다 다르면 바로 false
var leafSimilar = function(root1, root2) {
    const arr1 = [];
    const arr2 = [];
    
    function dfs(currNode, arr) {
        if (!currNode) {
            return;
        }
        if (!currNode.left && !currNode.right) {
            arr.push(currNode.val);
        }
        dfs(currNode.left, arr);
        dfs(currNode.right, arr);
    }
    
    dfs(root1, arr1);
    dfs(root2, arr2);
    
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};