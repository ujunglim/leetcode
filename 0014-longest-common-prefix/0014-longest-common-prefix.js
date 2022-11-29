/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    for(let col = 0; col < strs[0].length; col++) {
        const curr = strs[0][col];
        let count = 1;
        
        for(let row = 1; row < strs.length; row++) {
            if(strs[row][col] !== curr) return result; //
            else if(strs[row][col] && strs[row][col] === curr) {
                count++;
            }
        }
        
        if(count === strs.length) {
            result += curr;
        }
        
    }
    
    return result;
};