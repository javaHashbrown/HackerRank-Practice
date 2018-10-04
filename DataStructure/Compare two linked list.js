// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
  if(!llist1 && !llist2){
      return 1;
  }else if(!llist1 || !llist2){
      return 0;
  }
  let h1 = llist1;
  let h2 = llist2;
  while(h1 && h2){
      if(h1.data !== h2.data){
          return 0;
      }
      h1 = h1.next;
      h2 = h2.next;
  }
  return !h1&&!h2;
  

}