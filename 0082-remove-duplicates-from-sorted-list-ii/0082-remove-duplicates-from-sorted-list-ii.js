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
// [1], [1, 1]
var deleteDuplicates = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    
    let emptyNode = new ListNode(null);
    let emptyP = emptyNode;
    let answerP = emptyP;
    let curr = head;
    let repeatedVal = null;
    
    while(curr && curr.next) {
        let next = curr.next;

        if (curr.val !== next.val) {
            emptyP.next = curr;
            emptyP = emptyP.next;
            curr = curr.next;
        } else {
            repeatedVal = curr.val;
            
            while(next && next.val === repeatedVal) { //
                curr = curr.next;
                next = next.next;
            }
            curr = next;
            emptyP.next = curr;
        }
    }
    return answerP.next;
};