// Complete the sortedInsert function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {
  if(!head){
      return new DoublyLinkedListNode(data);
  }
  else if(head.data>data){
      let newNode = new DoublyLinkedListNode(data);
      newNode.next = head;
      head.prev = newNode;
      return newNode;
  }else{
      let prev = head;
      let current = head.next;
      while(current && current.data<data){
          prev = current;
          current = current.next;
      }
      let newNode = new DoublyLinkedListNode(data);
      //add newNode to the tail
      if(!current){
          prev.next = newNode;
          newNode.prev = prev;
      }else if(current.data>=data){
          prev.next = newNode;
          newNode.prev = prev;
          newNode.next = current;
          current.prev = newNode;
      }
      return head;
  }
  

}