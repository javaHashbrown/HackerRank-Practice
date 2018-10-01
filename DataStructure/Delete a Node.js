// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
  if(!head) return null;
  if(position===0) return head.next;
  let tmp = head;
  //find pre-node to the node to delete
  for(let index=1;index<position;index++){   
      tmp = tmp.next;
      if(!tmp.next){
      //position beyond the tail, delete nothing
          return head;
      }
  }
  tmp.next = tmp.next.next;
  
  return head;
  
}