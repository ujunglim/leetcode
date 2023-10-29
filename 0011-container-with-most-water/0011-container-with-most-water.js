/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let left = 0, right = n - 1;
    let max_area = 0;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        max_area = Math.max(max_area, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
}

//     let result = -1;
//     for (let i = 0; i < height.length-1; i++) {
//         for (let j = i+1; j < height.length; j++) {
//             const area = (j-i)*Math.min(height[i], height[j]);
//             result = Math.max(result, area);
//         }
//     }
//     return result;