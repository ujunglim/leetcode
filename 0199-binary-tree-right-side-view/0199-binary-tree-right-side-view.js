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
// 레벨별 정리
// var rightSideView = function(root) {
//     const levels = [];
    
//     function dfs(currNode, level) {
//         if (currNode)
            
//         currNode.left && dfs(currNode.left, level+1);
//         currNode.right && dfs(currNode.right, level+1);
//     }
    
//     dfs(root, 0);
// };

// bfs
var rightSideView = function(root) {
    if (!root) return [];
    const queue = [root];
    const levels = [];
    
    while(queue.length) {
        const levelSize = queue.length;
        const level = [];
        for (let i = 0; i < levelSize; ++i) {
            const currNode = queue.shift();
            level.push(currNode.val);
            currNode.left && queue.push(currNode.left);
            currNode.right && queue.push(currNode.right);
        }
        levels.push(level);
    }
    return levels.map(level => level[level.length-1]);
};