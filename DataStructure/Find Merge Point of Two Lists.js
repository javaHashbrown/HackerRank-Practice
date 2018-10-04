/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
  let mirror1 = headA;
  let mirror2 = headB;
  while(mirror1!==mirror2){
    if(!mirror1.next){
      mirror1 = headB;
    }else{
      mirror1 = mirror1.next;
    }
    if(!mirror2.next){
      mirror2 = headA;
    }else{
      mirror2 = mirror2.next;
    }
  }
  return mirror1.data;
}