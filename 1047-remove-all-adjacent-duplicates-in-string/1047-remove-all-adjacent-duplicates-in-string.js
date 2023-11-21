/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; ++i) {
        const curr = s[i];
        if (!stack.length) {
            stack.push(curr);
            continue;
        }
        if (stack[stack.length-1] === s[i]) {
            stack.pop();
        } else {
            stack.push(curr);
        }
    }
    return stack.join('');
};