// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
  const newHead = new SinglyLinkedListNode(data);
  if(!head){
      return newHead;
  }
  newHead.next = head;
  return newHead;

}