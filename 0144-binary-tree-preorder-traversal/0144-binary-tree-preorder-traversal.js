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
var preorderTraversal = function(root) {
    const arr = [];
    function read(currNode) {
        if (!currNode) {
            return;
        }
        arr.push(currNode.val);
        read(currNode.left);
        read(currNode.right);
    }
    read(root);
    return arr;
};

// var preorderTraversal = function(root) {
    
//     function read(currNode, arr) {
        
//         if (!currNode) {
            
//         }
//         arr.push(currNode.val);
//         read(currNode.left, arr);
//         read(currNode.right, arr);
//     }
    
//     return read(root, []);
// };