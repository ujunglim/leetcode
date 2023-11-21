/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let result = 0;
    const stack = [];
    
    for (const curr of tokens) {
        if (!isNaN(curr)) {
            stack.push(Number(curr));
            continue;
        } else {
            const secondNum = stack.pop();
            const firstNum = stack.pop();
            if (curr === '+') {
                stack.push(firstNum+secondNum);
            } else if (curr === '-') {
                stack.push(firstNum-secondNum);
            } else if (curr === '*') {
                stack.push(firstNum * secondNum);
            } else if (curr === '/') {
                const division = String(firstNum / secondNum).split('.'); /////////// 소수점자리 제거하기
                stack.push(Number(division[0])); // truncates toward zero
            }
        }
    }
    return stack[0]
};