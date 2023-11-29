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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// 전부 dfs
// var rangeSumBST = function(root, low, high) {
//     let answer = 0;
    
//     function dfs(currNode) {
//         if (!currNode) {
//             return;
//         }
//         dfs(currNode.left);
//         dfs(currNode.right);
//         const currVal = currNode.val;
//         if (currVal >= low && currVal <= high) {
//             answer += currVal;
//         }
//     }
//     dfs(root);
//     return answer;
// };

//현재 노드의 값이 범위 안이면 dfs, 아니면 return
var rangeSumBST = function(root, low, high) {
    let answer = 0;
    
    function dfs(currNode) {
        if (!currNode) {
            return;
        }
        const currVal = currNode.val;
        if (currVal >= low && currVal <= high) {
            answer += currVal;
            dfs(currNode.left);
            dfs(currNode.right);
        }
        
        if (currVal < low) {
            dfs(currNode.right);
        } else if (currVal > high) {
            dfs(currNode.left);
        }
    }
    dfs(root);
    return answer;
};