/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

function getRepeatedCountArr(str) {
    const result = [];
    let i = 0;
    
    while (i < str.length) {
        let j = i;
        while(str[i] === str[j]) {
            j++;
        }
        result.push({
            char: str[i],
            count: j-i,
        });
        i = j;
    }
    return result;
}

var isLongPressedName = function(name, typed) {
    // name, typed 각각 char의 중복 횟수를 구한다.
    const nameArr = getRepeatedCountArr(name);
    const typeArr = getRepeatedCountArr(typed);
    
    // name, typed의 고유문자 갯수가 다르면 false
    if (nameArr.length !== typeArr.length) {
        return false;
    }
    
    for (let i = 0 ; i < nameArr.length; i++) {
        // name중복 횟수가 typed중복 횟수 크거나 문자가 다르면 false
        if (nameArr[i].count > typeArr[i].count || nameArr[i].char !== typeArr[i].char) {
            return false;
        }
    }
    return true;
};


// leelee, lleelee