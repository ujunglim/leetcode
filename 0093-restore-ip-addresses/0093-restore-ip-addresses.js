/**
 * @param {string} s
 * @return {string[]}
 */
// 4그룹
// 00중복불가
// 0에서255
// 문자 비교는 틀림, 숫자 비교해야함
var restoreIpAddresses = function(s) {
    const answer = []
    
    function bt(groupCount, accArr, remained) {
        // 4그룹이 안 됬는데 남은 숫자가 없던가, 3그룹하고 남은 수가 255보다 크면, 4그룹이 됬는데 남은 숫자가 있을때
        if (groupCount < 4 && !remained.length 
            || groupCount === 3 && Number(remained) > 255 
            || groupCount >= 4 && remained.length
           ) {
            return;
        }
        
        // 4그룹이 됬을 때 남은 숫자가 없다
        if (groupCount === 4 && !remained.length) {
            answer.push(accArr.join('.'));
            return;
        }
       
        // 맨 앞자리가 0이면 0만 추가
        if (remained[0] === '0') {
            bt(groupCount+1, [...accArr, "0"], remained.slice(1));
            return; ////
        }
        
        let currStr = ''

        for (let i = 0; i < remained.length; ++i) {
            currStr += remained[i];
           
            if (Number(currStr) <= 255 && groupCount <= 4) {
                bt(groupCount+1, [...accArr, currStr], remained.slice(i+1));
            } else {
                continue;
            }
        }
    }
    bt(0, [], s.split(''));
    return answer;
};