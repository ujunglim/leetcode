/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 5+6 = 6+5 (한번만 교차하면 된다)
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    let switchCount = 0;
    
    // 아직 시작 안 했거나, 시작했는데 둘다 원래자리로 돌아오기 전까지 before return to init position
    while(switchCount < 2) {
        // 둘이 만남
        if (switchCount > 0 && pA === pB) {
            return pA;
        }
        if (pA && pA.next) {
            pA = pA.next;
        } else {
            pA = headB;
            switchCount++;
        }
        
        if (pB && pB.next) {
            pB = pB.next;
        } else {
            pB = headA;
        }
    }
    return null;
};