/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = [...s];
    let i = 0;
    let j = arr.length-1;
    
    while(i < j) {
        const left = arr[i];
        const right = arr[j];
        
        if (!vowels.has(left)) {
            i++;
        }
        if (!vowels.has(right)) {
            j--;
        }
        if (vowels.has(left) && vowels.has(right)) {
            const temp = left;
            arr[i] = s[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return arr.join('');
};