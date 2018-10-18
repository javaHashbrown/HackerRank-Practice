function levelOrder(root) {
  const queue = [root];
  const res = [];
  while (queue.length) {
    let element = queue.shift();
    res.push(element.data);
    if (element.left) queue.push(element.left);
    if (element.right) queue.push(element.right);
  }
  console.log(res.join(' '));
}
