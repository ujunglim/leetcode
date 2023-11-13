/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) {
        return null;
    }
    if (k === 0) {
        return head;
    }
    let lastP = head;
    let size = 1;
    
    while(lastP.next) {
        size++;
        lastP = lastP.next;
    }
    let offset = k % size;
   
    let prev = head;
    let curr = head;
    while (offset > 0) {
        offset--;
        curr = curr.next;
    }
    while(curr.next) {
        curr = curr.next;
        prev = prev.next;
    }
    console.log(prev, curr)
    // 새로운 head
    curr.next = head;
    head = prev.next;
    prev.next = null

    return head;
};