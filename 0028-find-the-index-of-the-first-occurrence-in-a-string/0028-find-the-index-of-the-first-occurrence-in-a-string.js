/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let sameCount = 1;
            for (let j = 1; j < needle.length; j++) {
                if (haystack[j+i] !== needle[j]) {
                    break;
                } else {
                    sameCount++;
                }
            }
            if (sameCount === needle.length) {
                return i;
            }
        }
    }  
    return -1;
};