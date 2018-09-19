// Start of function getHeight
this.getHeight = function(root) {
  // Add your code here
  if (!root) {
    return -1;
  }
  let leftHeight = this.getHeight(root.left);
  let rightHeight = this.getHeight(root.right);
  return leftHeight > rightHeight ? 1 + leftHeight : 1 + rightHeight;
};
