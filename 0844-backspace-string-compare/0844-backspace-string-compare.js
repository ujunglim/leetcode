/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack = [];
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== '#') {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
    
    let removeCount = 0;
    for (let j = t.length-1; j >= 0; --j) {
        if (t[j] !== '#') {
            if (removeCount > 0) {
                removeCount--;
                continue;
            }
            if (t[j] !== stack[stack.length-1]) {
                return false;
            }
            stack.pop();
        } else {
            removeCount++;
        }
    }
    return !stack.length;
};