function main() {
  const n = parseInt(readLine(), 10);
  let binSeq = [];
  let src = n;
  while(src>0){
      let remainder = src%2;
      src = Math.floor(src/2);
      binSeq.unshift(remainder);
  }
  let maxConsecutive = 0;
  let curConsecutive = 0;
  for(let i=0;i<binSeq.length;i++){
      if(binSeq[i]){
          curConsecutive++;
      }else{
          curConsecutive = 0;    
      }
      if(curConsecutive>maxConsecutive){
          maxConsecutive = curConsecutive;
      }
      
  }
  console.log(maxConsecutive);
}