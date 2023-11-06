/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 노드가 없으면 빈 노드자체를 리턴
    // if (!head) {
    //     return head;
    // }
    let currP = head;
    let emptyNode = new ListNode();
    let prevP = emptyNode;
    
    while(currP) {
        if (currP.val === val) {
            currP = currP.next;
        } else {
            prevP.next = currP;
            prevP = currP;
            currP = currP.next;
        }
    }
    prevP.next = currP;
    return emptyNode.next;
};