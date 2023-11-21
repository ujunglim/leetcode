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

// left -> mid -> right
var inorderTraversal = function(root) {
    const result = [];
    dfs(root);
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    return result;
};

// var inorderTraversal = function (root) {
//   const result = [];

//   function dfs(curr) {
//     if (curr === null) return;
//     dfs(curr.left);
//     result.push(curr.val);
//     dfs(curr.right);
//   }
//   dfs(root);
//   return result;
// };