/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 사이클을 갖는 조건
// 방문한 적 있고, 나간 적이 이미 있는 경우
// 다시 방문했다고 사이클을 갖는게 아니라, arr는 있는데 dept한 적이 없으면 사이클을 갖지 않음
function buildAdjList(n, edges) {
    const adjList = Array.from({length: n}, () => []);

    for(const edge of edges) {
        const [src, dest] = edge;
        adjList[src].push(dest);
    }
    return adjList;
}

function hasCycleDFS(vertex, adjList, visited, depart) {
    visited[vertex] = true;
    
    for(let adj of adjList[vertex]) {
        if(!visited[adj]) {
            if(hasCycleDFS(adj, adjList, visited, depart)) return true;
        }
        else {
            if(depart[adj] === 0) return true; // 
        }
    }
    depart[vertex]++;
    return false;
}

var canFinish = function(numCourses, prerequisites) {
    const adjList = buildAdjList(numCourses, prerequisites);
    const visited = {};
    const depart = Array.from({length: numCourses}, () => 0);
        
    for(let vertex = 0; vertex < adjList.length; vertex++) {
        if(!visited[vertex]) {
            if(hasCycleDFS(vertex, adjList, visited, depart)) return false;
        }
    }
    return true;
};