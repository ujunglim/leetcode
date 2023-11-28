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
 * @return {number}
 */
var findTilt = function(root) {
    if (!root) {
        return 0;
    }
    let answer = 0;
    
    function dfs(currNode) {
        if (!currNode) {
            return 0;
        }
        
        const left = dfs(currNode.left);
        const right = dfs(currNode.right);
        answer += Math.abs(left - right);
        return left + right + currNode.val;
    }
    
    dfs(root);
    return answer;
};

// 갱신하는 값, 다음 외부 dfs로 리턴하는 값
