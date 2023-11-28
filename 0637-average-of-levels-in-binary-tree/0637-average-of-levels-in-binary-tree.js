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
// // 레벨별로 정리 bfs
// var averageOfLevels = function(root) {
//     const answer = []
//     const queue = [{currNode: root, level: 0}];
    
//     while(queue.length) {
//         const {currNode, level} = queue.shift();
//         answer[level]
        
//     }
    
// };
// 레벨별로 정리 dfs
var averageOfLevels = function(root) {
    const answer = [];
    
    function getLevel(currNode, index) {
        if (!currNode) {
            return;
        }
        if (!answer[index]) {
            answer[index] = [];
        }
        answer[index].push(currNode.val);
        getLevel(currNode.left, index+1);
        getLevel(currNode.right, index+1);
    }
    getLevel(root, 0);
    return answer.map((arr) => arr.reduce((acc, curr) => acc + curr, 0) / arr.length)
    
};