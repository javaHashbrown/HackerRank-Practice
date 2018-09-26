// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
  const node = new SinglyLinkedListNode(data);
  if(!head){
      return node;
  }
  if(position===0){
      node.next = head;
      return node;
  }
  let curNode = head;
  for(let index=1;index<position;index++){
      if(!curNode.next){
          break;   
      }
      curNode = curNode.next;
  }
  node.next = curNode.next;
  curNode.next = node;
  return head;

}