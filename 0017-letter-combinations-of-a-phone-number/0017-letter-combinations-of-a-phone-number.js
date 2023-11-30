/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const answer = [];
    if (digits.length === 0) {
        return [];
    }
    const maxIndex = digits.length;
    const keypad = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    
    function bt(index, accStr) {
        if (index === maxIndex) {
            answer.push(accStr);
            return;
        }
        
        const keypadIndex = digits[index];
        for (const char of keypad[keypadIndex]) {
            bt(index+1, accStr + char);
        }
    }
    
    bt(0, "");
    return answer;
};