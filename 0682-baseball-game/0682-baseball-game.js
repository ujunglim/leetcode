/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];
    for (const op of operations) {
        const element = Number(op);
        // 숫자일때
        if (!isNaN(element)) {
            stack.push(element);
        }
        else if (op === 'C') {
            stack.pop();
        }
        else if (op === 'D' && stack.length >= 1) {
            stack.push(stack[stack.length-1]*2)
        }
        else if (op === '+' && stack.length >= 2) {
            stack.push(stack[stack.length-2] + stack[stack.length-1]);
        }
    }
    return stack.reduce((acc, curr) => acc + curr, 0);
};