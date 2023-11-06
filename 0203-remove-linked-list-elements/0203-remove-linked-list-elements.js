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
// var removeElements = function(head, val) {
//     // 노드가 없으면 빈 노드자체를 리턴
//     // if (!head) {
//     //     return head;
//     // }
//     let currP = head;
//     let emptyNode = new ListNode();
//     let prevP = emptyNode;
    
//     while(currP) {
//         if (currP.val === val) {
//             currP = currP.next;
//         } else {
//             prevP.next = currP;
//             prevP = currP;
//             currP = currP.next;
//         }
//     }
//     prevP.next = currP;
//     return emptyNode.next;
// };
// currP를 판단해서 prevP이동


// p.next를 판단해서 p를 이동
var removeElements = function(head, val) {
    const emptyNode = new ListNode(0, head);
    let p = emptyNode;
    
    while(p.next) {
        if (p.next.val === val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return emptyNode.next
};