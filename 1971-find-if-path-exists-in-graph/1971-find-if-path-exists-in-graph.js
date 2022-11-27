/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// map (get set)
// set (add)
// has delete clear size
// graph {
//  0：[1,2],
//  1: [0,2],
//  2: [0,1],
// }
var validPath = function(n, edges, source, destination) {
    const adjList = new Map();
    const visited = new Set();

    // build adjList （undirected two way binding）
    for(const [v1, v2] of edges) {
        if(!adjList.has(v1)) adjList.set(v1, [v2]);
        else adjList.get(v1).push(v2);
        
        if(!adjList.has(v2)) adjList.set(v2, [v1]);
        else adjList.get(v2).push(v1);
    }
    
    // dfs
    function dfs(vertex) {
        if(!visited.has(vertex)) {
            visited.add(vertex);
            
            const neighbors = adjList.get(vertex);
            if(neighbors) {
               for(const neighbor of neighbors) {
                    if(!visited.has(neighbor)) {
                        dfs(neighbor);
                    }
                }
               
           }
        }
    }
    
    dfs(source);
    return visited.has(destination);
    
};