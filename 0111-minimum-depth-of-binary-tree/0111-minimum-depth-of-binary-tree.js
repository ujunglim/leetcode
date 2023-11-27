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
// dfs는 leaf까지 내려갔다가 올라오면서 값을 반환
// bfs는 leaf까지 내려가는 중에 값을 반환할 수 있다.
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    const queue = [{currNode: root, currDepth: 1}];
    while(queue.length) {
        const {currNode, currDepth} = queue.shift();
        if (!currNode) continue; ///// 2번째 테케
        if (!currNode.left && !currNode.right) {
            return currDepth;
        }
        queue.push({currNode: currNode.left, currDepth: currDepth+1});
        queue.push({currNode: currNode.right, currDepth: currDepth+1});
    }
};