// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
  if(!head) return;
  let curNode = head;
  let output = [];
  while(curNode){
      output.push(curNode.data);
      curNode = curNode.next;
  }
  console.log(output.reverse().join('\n'));

}