/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pSlow = head;
    let pFast = head;

    for (let i = 0; i < n; i++) {
        pFast = pFast.next;
    }
    if (!pFast) {
        return head.next;
    }
    
    while(pFast.next) {
        pSlow = pSlow.next;
        pFast = pFast.next;
    }
    pSlow.next = pSlow.next.next;
    return head;
};
    
    