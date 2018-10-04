// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
  if(!head){
      return null;
  }
  head.prev = head.next;
  head.next = null;
  while(head.prev){
      head = head.prev;
      let tmp = head.prev;
      head.prev = head.next;
      head.next = tmp;
  }
  return head;
}