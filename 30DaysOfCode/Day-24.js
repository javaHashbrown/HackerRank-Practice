this.removeDuplicates = function(head) {
  //Write your code here
  const unique = [];
  let tmp = head;
  while (tmp) {
    if (!unique.includes(tmp.data)) {
      unique.push(tmp.data);
    }
    tmp = tmp.next;
  }
  console.log(unique.join(' '));
};
