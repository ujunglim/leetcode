/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// copy each nodes and make connection
// dfs
var cloneGraph = function(node) {
    const visited = {};
    
    function dfs(node) {
        if(!node) return node;
        if(visited[node.val]) return visited[node.val];
        
        let newNode = new Node(node.val);
        visited[newNode.val] = newNode;
        
        for(neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }
        return newNode;
    }
    
    return dfs(node);
};