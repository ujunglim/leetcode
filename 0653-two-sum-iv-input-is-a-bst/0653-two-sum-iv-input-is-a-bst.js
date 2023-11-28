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
 * @param {number} k
 * @return {boolean}
 */
// 배열로 정리하고 sum을 찾을지
// BST순회하면서 찾을지
// inorder
var findTarget = function(root, k) {
    const arr = [];
    
    function dfs(currNode) {
        if (!currNode) {
            return;
        }
        dfs(currNode.left);
        arr.push(currNode.val);
        dfs(currNode.right);
    }
    dfs(root);
    let left = 0;
    let right = arr.length-1;
    
    while(left < right) {
        const sum = arr[left] + arr[right];
        if (sum === k) {
            return true;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};