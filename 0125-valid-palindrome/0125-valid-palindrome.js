/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-zA-Z0-9]/g;
    const alphaStr = s.replace(regex, '');
    const lowerStrArr = [...alphaStr].map(e => e.toLowerCase());
    
    let i = 0;
    let j = lowerStrArr.length-1;
    while(i < j) {
        if (lowerStrArr[i] !== lowerStrArr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};