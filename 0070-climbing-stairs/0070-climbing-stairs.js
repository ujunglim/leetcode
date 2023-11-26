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

// iteration
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    const memory = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        memory[i] = memory[i-1] + memory[i-2];
    }
    
    return memory[n];
};