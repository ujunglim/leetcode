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

  let dummy = new ListNode(null);
  dummy.next = head;
  let curr = head;
  let size = 0;

  // find total size;
  while (curr) {
    size++;
    curr = curr.next;
  }

  // reset curr to dummy
  curr = dummy;

  // move curr to before target
  for (let i = 0; i < size - n; i++) {
    curr = curr.next;
  }

  // remove target
  curr.next = curr.next.next;
  return dummy.next;
};