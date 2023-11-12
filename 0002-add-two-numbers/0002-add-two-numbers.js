/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let overNextDigit = false;
    let p3 = new ListNode(null);
    let newHead = p3;
    
    while(p1 || p2) {
        const value1 = p1 ? p1.val : 0;
        const value2 = p2 ? p2.val : 0;
        const newVal = value1 + value2 + (overNextDigit && 1);
        overNextDigit = Math.floor(newVal / 10) === 1;
        const newNode = new ListNode(newVal % 10);

        p3.next = newNode;
        p3 = p3.next;
        p1 = p1 ? p1.next : null;
        p2 = p2 ? p2.next : null;
    }
    if (overNextDigit) {
        p3.next = new ListNode(1, null);
    }
    return newHead.next;
};