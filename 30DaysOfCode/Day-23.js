// Start of function levelOrder
this.levelOrder = function(root) {
  // Add your code here
  // To print values separated by spaces use process.stdout.write(someValue + ' ')
  const queue = [root];
  const res = [];
  while (queue.length) {
    let element = queue.shift();
    res.push(element.data);
    if (element.left) queue.push(element.left);
    if (element.right) queue.push(element.right);
  }
  process.stdout.write(res.join(' '));
};
