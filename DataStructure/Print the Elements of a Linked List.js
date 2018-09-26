// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
  if(head){
      let tmp = head;
      while(tmp){
          console.log(tmp.data);
          tmp = tmp.next;
      }
  }
  

}