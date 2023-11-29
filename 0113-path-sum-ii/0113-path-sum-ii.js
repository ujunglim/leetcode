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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) {
        return [];
    }
    const answer = [];
    
    function getSum(currNode, acc, arr) {
        if (!currNode.left && !currNode.right) {
            if (acc + currNode.val === targetSum) {
                const newArr = [...arr];
                newArr.push(currNode.val);
                answer.push(newArr);
            }
            return;
        }
                    
        // // 이미 target을 초과하면 더 탐색할 필요 없다.
        // if (acc + currNode.val >= targetSum) {
        //     return;
        // }

        const newArr = [...arr];
        newArr.push(currNode.val);
        currNode.left && getSum(currNode.left, acc + currNode.val, newArr);
        currNode.right && getSum(currNode.right, acc + currNode.val, newArr);
    }
    getSum(root, 0, []);
    return answer;
};