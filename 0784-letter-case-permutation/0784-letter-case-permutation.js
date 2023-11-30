/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const answer = [];
    const arr = s.split('');
    const lowerRegex = /[a-z]/;
    const numberRegex = /\d/;
    
    function bt(index, accArr) {
        if (index === s.length) {
            answer.push(accArr.join(''));
            return;
        }
        const char = arr[index];
        bt(index+1, [...accArr, char]);

        // 숫자인 경우 패스
        if (numberRegex.test(char)) {
            return;
        }

        // 소문자인 경우
        if (lowerRegex.test(char)) {
            const upperArr = [...accArr];
            upperArr[index] = char.toUpperCase();
            bt(index+1, upperArr);
        } else {
            const lowerArr = [...accArr];
            lowerArr[index] = char.toLowerCase();
            bt(index+1, lowerArr);
        }
    }
    
    bt(0, []);
    return answer;
};