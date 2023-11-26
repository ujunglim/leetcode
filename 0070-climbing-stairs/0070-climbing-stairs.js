/**
 * @param {number} n
 * @return {number}
 */

const memory = [0, 1, 2];
// iteration
var climbStairs = function(n) {
    if (!memory[n]) {
        memory[n] = climbStairs(n-1) + climbStairs(n-2); 
    }
    return memory[n];
};