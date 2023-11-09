/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var middleNode = function(head) {
//     let count = 0;
//     let p = head;
//     let next = head;
    
//     while(p) {
//         count++;
//         p = p.next;
//     }
//     const mid = Math.floor(count/2)+1;
//     const backstep = count % 2 === 0 ? mid-1 : mid;
// };

var middleNode = function(head) {
    let p1 = head;
    let p2 = head;
    
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1;
};