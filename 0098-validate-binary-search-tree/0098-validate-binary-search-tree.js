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
// // 다 정리해놓고 비교
// var isValidBST = function(root) {
//     const arr = [];
    
//     function dfs(currNode) {
//         // if (!currNode) return;
//         if (!currNode.left && !currNode.right) {
//             arr.push(currNode.val);
//             return;
//         }
//         currNode.left && dfs(currNode.left);
//         arr.push(currNode.val)
//         currNode.right && dfs(currNode.right);
//     }
//     dfs(root);
//     for (let i = 0; i < arr.length-1; ++i) {
//         if (arr[i] >= arr[i+1]) {
//             return false;
//         }
//     }
//     return true;
// };

// 순회하면서 바로 비교 
var isValidBST = function(root) {
    
    function isValid(currNode, min, max) {
        if (!currNode) return true;  // 노드가 없으면 BST와 상관없으므로 true
        
        if (min < currNode.val && currNode.val < max) {
            return isValid(currNode.left, min, currNode.val) && isValid(currNode.right, currNode.val, max);
        } else {
            return false;
        }
    }
    
    return isValid(root, -Infinity, Infinity);
}