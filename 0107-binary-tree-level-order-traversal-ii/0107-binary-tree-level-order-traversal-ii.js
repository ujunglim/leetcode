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
// 먼저 dfs하고 처리는 못 할듯 bfs를 써야함
// bfs하고 answer.unshift()

var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    const answer = [];
    let queue = [root];
    
    while(queue.length) {
        const level = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; ++i) {
            const currNode = queue.shift();
            level.push(currNode.val);
            currNode.left && queue.push(currNode.left);
            currNode.right && queue.push(currNode.right);
        }
        answer.unshift(level);
    } 
    return answer;
};