function inOrder(root){
  if(!root){
    console.log('');
  }else{
    if(root.left){
      inOrder(root.left);
    }
    console.log(root.data);
    if(root.right){
      inOrder(root.right);
    }
  }
}