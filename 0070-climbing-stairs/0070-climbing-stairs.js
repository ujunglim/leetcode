/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(target) {
    const dp = [0, 1, 2];
    if (dp[target]) {
        return dp[target];
    }
    for (let i = 3; i <= target; i++) {
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[target];
};
// var climbStairs = function(target) {
//     const memory = new Array();
    
//     function dfs(currSteps) {
//         if(currSteps > target) return 0;
//         if(currSteps === target) return 1;
        
//         if(!memory[currSteps]) {
//             memory[currSteps] = dfs(currSteps+1) + dfs(currSteps+2);
//         }
//         return memory[currSteps];
//     }
    
//     return dfs(0);
// };

// var climbStairs = function(n) {
//     const memory = new Array(n);
//     const recursFunc = (curStep) => {
//         if (curStep > n) {
//           return 0;
//         }
//         // arrived already
//         else if (curStep === n) {
//           return 1;
//         } 
//         if (!memory[curStep]) {
//             memory[curStep] =  recursFunc(curStep + 1, n) + recursFunc(curStep + 2, n)
//         }
//         return memory[curStep];  
//     };
//     return recursFunc(0);
// };