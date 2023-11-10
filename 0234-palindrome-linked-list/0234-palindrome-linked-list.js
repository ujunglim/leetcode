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
// var isPalindrome = function(head) {
//     const arr = [];
//     while(head) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     let leftP = 0;
//     let rightP = arr.length-1;
    
//     while(leftP < rightP) {
//         if (arr[leftP] !== arr[rightP]) {
//             return false
//         }
//         leftP++;
//         rightP--;
//     }
//     return true;
// };

var isPalindrome = function(head) {
    let slowP = head;
    let fastP = head;
    let reverseHead = null;
    let slowNext;
    
    // [1]
    if (!head.next) {
        return true;
    }
    
    while(fastP && fastP.next) {
        // console.log(slowP, fastP)
        fastP = fastP.next.next; // 먼저
        // reverse
        slowNext = slowP.next;
        slowP.next = reverseHead;
        reverseHead = slowP;
        slowP = slowNext;
        // console.log('====', slowP, fastP)
    }
    let rightP = slowP; //
    if (fastP && !fastP.next) {
        rightP = slowP.next;
    }
    
    while(rightP) {
        if(reverseHead.val !== rightP.val) {
            return false;
        }
        reverseHead = reverseHead.next;
        rightP = rightP.next;
    }
    return true;
};


// slow fast (반절 이동할때까지 reverse)
