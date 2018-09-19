function processData(input) {
  //Enter your code here
  
  input.split('\n').map((item,index)=>{
      if(index>0){
          console.log(isPrime(Number(item))?'Prime':'Not prime');    
      }
  });
  function isPrime(num){
      if(num==1) {
          return false;
      }
      if(num==2){
          return true;
      }
      let sqrtFactor = Math.floor(Math.sqrt(num));
      for(let i=2;i<=sqrtFactor;i++){
          if(num%i===0){
              return false;
          }
      }
      return true;
  }
} 