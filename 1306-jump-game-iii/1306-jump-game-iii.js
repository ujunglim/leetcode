/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

function isInside(currIndex, maxLen) {
    return currIndex >= 0 && currIndex < maxLen;
}

// 방문했던곳 또 방문하면 return
var canReach = function(arr, start) {
    const visited = Array.from({length: arr.length}, () => false);
    const len = arr.length;
   
    function foundTarget(currIndex, visited) {
        // 0을 찾았을떄
        if (arr[currIndex] === 0) {
            return true;
        }
        // 재방문했을때
        if (visited[currIndex]) {
            return false;
        }
        // arr범위를 초과했을 때
        if (!isInside(currIndex, len)) {
            return false;
        }
        visited[currIndex] = true;
        const nextIndex1 = currIndex + arr[currIndex];
        const nextIndex2 = currIndex - arr[currIndex];
    
        return foundTarget(nextIndex1, visited) || foundTarget(nextIndex2, visited);
    }
    
    return foundTarget(start, visited);
};