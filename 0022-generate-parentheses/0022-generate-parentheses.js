/**
 * @param {number} n
 * @return {string[]}
 */
// 더 빠르게 )의 갯수가 (보다 많으면 바로 리턴
var generateParenthesis = function(n) {
    const answer = [];
    const len = n*2;
    
    function bt(accArr, openCount, closeCount) {
        if (openCount < closeCount) {
            return;
        }
        const count = accArr.length;
        if (count === len) {
            if (isValid(accArr)) {
                answer.push(accArr.join(''));
            }
            return;
        }
        bt([...accArr, '('], openCount+1, closeCount);
        bt([...accArr, ')'], openCount, closeCount+1);
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
    
    bt([], 0, 0); // str, openCount, closeCount
    return answer;
};
    
