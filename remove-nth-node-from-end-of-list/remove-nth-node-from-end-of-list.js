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
var removeNthFromEnd = function (head, n) {
  if (!head) return null;
  let curr = head;
  let totalLen = 1;

  // find total length;
  while (curr.next) {
    totalLen++;
    curr = curr.next;
  }

  curr = head;

  let idx = 0;
  let targetIdx = totalLen - n;
  let dummy = new ListNode(null);
  dummy.next = curr;
  let prev = dummy;

  while (idx <= targetIdx) {
    if (idx === targetIdx) {
      prev.next = curr.next;
      curr = curr.next;
      break;
    }
    prev = curr;
    curr = curr.next;
    idx++;
  }
  return dummy.next;
};