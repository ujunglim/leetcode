/**
 * @param {number} n
 * @return {number}
 */
// recursive
// const memory = [0, 1, 2];
// var climbStairs = function(n) {
//     if (!memory[n]) {
//         memory[n] = climbStairs(n-1) + climbStairs(n-2); 
//     }
//     return memory[n];
// };

// iteration sliding window
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    const queue = [1, 2];

    for (let i = 3; i <= n; i++) {
        queue.push(queue[0] + queue[1]);
        queue.shift();
    }
    return queue[queue.length-1];
};