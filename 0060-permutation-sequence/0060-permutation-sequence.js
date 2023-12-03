/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 예를 들어 1_ _ _ 첫번째 자리가 정해졌을 때 가능한 경우 수는 3*2*1 = 6이다
// 전체순서 k를 한 그룹당 갯수인 6으로 나눈 몫은 첫번째 자리에 올 수의 인덱스이다 arr[i] (arr에서 i를 제외한다)
// 두번째 자리의 경우의 수는 2*1 = 2이고 위를 arr 안의 수를 다 쓸 때까지 반복한다.

var getPermutation = function(n, k) {
    const answer = [];
    const arr = [];
    const factorials = [1];
    for (let i = 1; i <= n; ++i) {
        arr.push(i);
        factorials[i] = factorials[i-1] * i;
    }
    k--;
    while(arr.length) {
        const emptyDigitCount = arr.length-1;
        const oneGroupCount = factorials[emptyDigitCount];
        
        const groupCount = Math.floor(k / oneGroupCount);
        answer.push(arr.splice(groupCount, 1)); // arr에서 현재 digit에 올 숫자 빼기
        k %= oneGroupCount;
    }
    
    return answer.join('');
};