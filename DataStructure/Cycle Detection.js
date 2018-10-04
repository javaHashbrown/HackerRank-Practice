// Complete the hasCycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function hasCycle(head) {
  let ptr1 = head;
  let ptr2 = head;
  while(ptr1){
    if(!ptr1.next){
      return false;
    }
    ptr1 = ptr1.next.next;
    ptr2 = ptr2.next;
    if(ptr1===ptr2){
      return true;
    }
  }
  return false;
}