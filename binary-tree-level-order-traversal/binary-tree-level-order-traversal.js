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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];

  function preorder(node, level) {
    if (!node) return;
    if (!result[level]) {
      result.push([]);
    }
    result[level].push(node.val);
    preorder(node.left, level + 1);
    preorder(node.right, level + 1);
  }

  preorder(root, 0);
  return result;
};