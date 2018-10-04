function preOrder(root) {
  if (!root) {
    console.log('');
  } else {
    console.log(root.data + ' ');
    if (root.left) {
      preOrder(root.left);
    }
    if (root.right) {
      preOrder(root.right);
    }
  }
}
