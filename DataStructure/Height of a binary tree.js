function treeHeight(root){
  if(!root){
    return -1;
  }else{
    return 1+Math.max(treeHeight(root.left),treeHeight(root.right));
  }
}