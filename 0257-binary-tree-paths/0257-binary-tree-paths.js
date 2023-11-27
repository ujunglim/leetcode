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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const answer = [];
    function traversal(currNode, currPath) {
        // leaf
        if (!currNode.left && !currNode.right) {
            answer.push(currPath.join('->'));
            return;
        }
        if (currNode.left) {
            traversal(currNode.left, [...currPath, currNode.left.val]);
        }
         if (currNode.right) {
            traversal(currNode.right, [...currPath, currNode.right.val]);
        }
    }
    traversal(root, [root.val]);
    return answer;
};