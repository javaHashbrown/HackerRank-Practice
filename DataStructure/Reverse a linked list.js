// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
  if(!head) return null;
  let prev = null;
  while(head){
      let tmp = head.next;
      head.next = prev;
      prev = head;
      head = tmp;
  }
  return prev;

}