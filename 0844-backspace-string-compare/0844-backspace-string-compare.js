/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sArr = [...s];
    const tArr = [...t];
    
    let newS = [];
    let newT = [];
    
    for (let sElement of sArr) {
        if(sElement === '#') {
            newS.pop();
        } else {
            newS.push(sElement);
        }
    }
    
    for (let tElement of tArr) {
        if (tElement === '#') {
            newT.pop();
        } else {
            newT.push(tElement);
        }
    }
    
    for (let i = 0; i < sArr.length; i++) {
        if (newS[i] !== newT[i]) {
            return false;
        }
    }
    return true;
};