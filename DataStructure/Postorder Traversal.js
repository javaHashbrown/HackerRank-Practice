function postOrder(root){
  if(!root){
    console.log('');
  }else{
    if(root.left){
      postOrder(root.left);
    }
    if(root.right){
      postOrder(root.right);
    }
    console.log(root.data+' ');
  }

}