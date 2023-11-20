/**
 * @param {number[]} nums
 * @return {number}
 */
// 투포인터중 left는 앞선 right과 다를때만 움직인다.
// left가 현재 자리에 있는건 left뒤가 모두 left와 같기때문이다
// 즉 left는 "교체해야할 자리 전" 위치를 기억하고 있는 것이다.
// 여기서 주의할 점은 교체하기 전 left를 이동하고 이동한 위치에서 교체하는 것이다.

var removeDuplicates = function(nums) {
    let left = 0;
    for (let right = 1; right < nums.length; ++right) {
        if (nums[right] !== nums[left]) {
            left++;
            nums[left] = nums[right]; // 교체
        }
    }
    return left+1;
};

// 12345일떄