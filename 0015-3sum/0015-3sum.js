var threeSum = function(nums) {
    const result = [];
    const target = 0;
    nums = nums.sort((a, b) => a - b); // 정렬해주어서 포인터의 이동시 판단을 더 간편하게 할 수 있다.
   
    if (nums[0] > target || nums.length < 3) {
        return result;
    }
    
    // 첫번째 
    let i = 0;
    for (let i = 0; i < nums.length-2; i+=1) {
        if (nums[i-1] === nums[i]) {
            continue; // 첫번째가 이전과 같은 숫자면 스킵한다
        }
        // 두번째는 첫번째 바로 뒤부터 시작한다.
        for (let j = i+1; j < nums.length-1; j+=1) {
            // 세번째
            let k = nums.length-1;
            while(j < k) { // 두번쨰와 세번째는 교차할 수 없다 (두번째 < 세번째)
                const sum = nums[i]+ nums[j]+ nums[k];
                // 세 숫자의 합이 target이면 result에 저장한다
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k]])
                    while(nums[k-1] === nums[k]) k--; // 중복되는 세번째는 스킵한다
                    while(nums[j] === nums[j+1]) j++; // 중복되는 두번째는 스킵한다
                    // 이제서야 진정으로 두번째와 세번째를 이동한다
                    k--; 
                    j++;
                } else if (sum > target) { // 세 숫자의 합이 target보다 크면 세번째 숫자를 줄인다
                    k--;
                } else if (sum < target) { // 세 숫자의 합이 target보다 작으면 두번째 숫자를 늘린다
                    j++;
                }
            }
        }
    }
    return result;
};