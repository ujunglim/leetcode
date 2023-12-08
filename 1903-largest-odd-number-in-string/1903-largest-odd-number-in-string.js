/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // const numArr = num.split('').map(e => Number(e));
    
    for (let i = num.length-1; i >= 0; --i) {
        if (Number(num[i]) % 2 === 1) {
            return num.substr(0, i+1);
            // return num.slice(0, i+1).join('');
        }
    }
    return '';
};

