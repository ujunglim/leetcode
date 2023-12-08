// /**
//  * @param {string} num
//  * @return {string}
//  */
// var largestOddNumber = function(num) {
//     for (let i = num.length-1; i >= 0; --i) {
//         if (Number(num[i]) % 2 === 1) {
//             return num.substring(0, i+1);
//         }
//     }
//     return '';
// };

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if (parseInt(num.slice(-1)) % 2 === 1) return num;
    let i = num.length - 1;
    while (i >= 0) {
        const n = parseInt(num[i]);
        if (n % 2 === 1) return num.slice(0, i + 1);
        i--;
    }
    return "";
};

    
