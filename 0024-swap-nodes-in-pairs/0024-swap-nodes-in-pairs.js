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
// swap
// p1, p2, p3 
// p1.next = p3
// p2.next = p1

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let p1 = head, p2 = head.next, p3 = p2.next;
    p2.next = p1;
    p1.next = swapPairs(p3);
    return p2;
};