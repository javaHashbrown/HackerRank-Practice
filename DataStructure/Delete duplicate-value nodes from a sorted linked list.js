// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
  if(!head) return null;
  let tmp = head;
  while(tmp.next){
      if(tmp.data !== tmp.next.data){
          tmp = tmp.next;
      }else{
          tmp.next = tmp.next.next;
      }
  }
  return head;

}