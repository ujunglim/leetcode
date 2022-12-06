/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let array = [];
    let curr  = head;

    // push node val to array
    while(curr) {
        array.push(curr.val);
        curr = curr.next;
    }
    const isOdd = array.length % 2 === 0 ? false : true;
    const mid = Math.floor(array.length / 2);

    let i = mid-1;
    let j = isOdd ? mid+1 : mid;

    while(i >= 0 && j < array.length) {
        if(array[i] !== array[j]) {
            return false;
        }
        i--;
        j++;
    }
    return true;
};