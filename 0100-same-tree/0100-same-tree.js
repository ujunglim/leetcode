/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// dfs
// var isSameTree = function(p, q) {
//     function checkIsSame(i, j) {
//         // 둘 다 존재하지 않음
//         if (!i && !j) {
//             return true;
//         }
//         // 둘 중 하나가 존재하지 않거나 둘 다 존재하는데 값이 다름
//         if (i && !j || !i && j || i.val !== j.val) {
//             return false;
//         }
//         // 같음
//         return checkIsSame(i.left, j.left) && checkIsSame(i.right, j.right);
//     }
//     return checkIsSame(p, q);
// };

// bfs
var isSameTree = function(p, q) {
    const queue = [p, q];
    
    while(queue.length) {
        const first = queue.shift();
        const second = queue.shift();
        
        if (!first && !second) continue;
        if (!first || !second || first.val !== second.val) {
            return false;
        }
        queue.push(first.left);
        queue.push(second.left);
        queue.push(first.right);
        queue.push(second.right);
    }
    return true;
};