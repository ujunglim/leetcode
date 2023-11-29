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
// bfs
// var zigzagLevelOrder = function(root) {
//     if (!root) return [];
//     const answer = [];
//     const queue = [root];
//     let depth = 0;
    
//     while(queue.length) {
//         const levelSize = queue.length;
//         const level = [];
//         for (let i = 0; i < levelSize; ++i) {
//             const currNode = queue.shift();
//             if (depth % 2 === 0) {
//                 level.push(currNode.val);
//             } else {
//                 level.unshift(currNode.val);
//             }
//             currNode.left && queue.push(currNode.left);
//             currNode.right && queue.push(currNode.right);
//         }
//         answer.push(level);
//         depth++;
//     }
//     return answer;
// };


// dfs
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    const answer = [];
    
    function dfs(currNode, depth) {
        if (!currNode) {
            return;
        }
        if (!answer[depth]) {
            answer[depth] = [];
        }
        
        if (depth % 2 === 0) {
            answer[depth].push(currNode.val);
        } else {
            answer[depth].unshift(currNode.val);
        }
        
        dfs(currNode.left, depth+1);
        dfs(currNode.right, depth+1);
    }
    
    dfs(root, 0);
    return answer;
};