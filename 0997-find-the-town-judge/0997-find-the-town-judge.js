/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// n-1 of people trustv judge && judge trust no one && 1 and only judge 
// difference btw array, map: array's index is ordered number, map's key can be more complex.

function buildGraph(n, edges) {
    // data structure of graph is [[count of that i trust, count of ppl that trust i], [ , ]...]
    const graph = Array.from({length: n+1}, () => [0, 0]);
    
    for(let i = 0; i < edges.length; i++) {
        const [start, end] = edges[i];
        graph[start][0]++;
        graph[end][1]++;
    }
    return graph;
}

var findJudge = function(n, trust) {
    const graph = buildGraph(n, trust);
    let judges = [];
    
    for(let i = 1; i < graph.length; i++) {
        if(graph[i][0] === 0 && graph[i][1] === n-1) {
            judges.push(i);
        }
    }
    return judges.length === 1 ? judges[0] : -1;
};