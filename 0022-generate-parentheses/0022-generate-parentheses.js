/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];
    const len = n*2;
    
    function bt(count, accArr) {
        if (count === len) {
            if (isValid(accArr)) {
                answer.push(accArr.join(''));
            }
            return;
        }
        bt(count+1, [...accArr, '(']);
        bt(count+1, [...accArr, ')']);
    }
    
    function isValid(arr) {
        const stack = [];
        
        for (let i = 0; i < arr.length; ++i) {
            if (!stack.length) {
                stack.push(arr[i]);
                continue;
            }
            
            if (arr[i] === ')') {
                if (stack[stack.length-1] === '(') {
                    stack.pop();
                    continue;
                } 
            } else {
                stack.push('(')
            }
        }
        return !stack.length;
    }
    
    bt(0, []);
    return answer;
};
    
