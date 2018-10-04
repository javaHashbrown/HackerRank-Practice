// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  //  1.head1 is null or head2 is null, return the other
  //  2.if both null, return null
      if(!head1 || !head2){
          return !head1 ? head2 : head1;
      }
      let head3 = new SinglyLinkedListNode();
      let tail = head3;
      while(head1 && head2){
          if(head1.data<=head2.data){
              tail.next = head1;
              head1 = head1.next;
          }else{
              tail.next = head2;
              head2 = head2.next;
          }
          tail = tail.next;
      }
      if(head1){
          tail.next = head1;
      }
      if(head2){
          tail.next = head2;
      }
      return head3.next;
  }