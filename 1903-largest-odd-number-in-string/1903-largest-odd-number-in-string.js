/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const numArr = num.split('').map(e => Number(e));
    
    for (let i = numArr.length-1; i >= 0; --i) {
        if (numArr[i] % 2 === 1) {
            return numArr.slice(0, i+1).join('');
        }
    }
    return '';
};