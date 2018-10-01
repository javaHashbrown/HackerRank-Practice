// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  if(!head){
      head = new SinglyLinkedListNode(data);
      return head;
  }
  let tmp = head;
  while(tmp.next){
      tmp = tmp.next;
  }
  tmp.next = new SinglyLinkedListNode(data);
  return head;
}