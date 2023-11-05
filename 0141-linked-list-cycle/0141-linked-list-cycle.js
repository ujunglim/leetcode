/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p = head;
    while(p) {
        if (!p.isVisited) {
            p.isVisited = true;
            p = p.next;
            continue;
        } else {
            return true;
        }
    }
    return false;
};

