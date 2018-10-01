// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
  if(!head) return null;
  let curIndex = 0;
  let cur = head;
  let res = head;
  while(cur){
      cur = cur.next;
      if(curIndex > positionFromTail){
          res = res.next;
      }
      curIndex++;
  }
  return res.data;
}