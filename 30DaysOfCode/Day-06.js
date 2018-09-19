function processData(input) {
  //Enter your code here
  let words = input.split('\n');
  let wordCount = Number(words[0]);
  for(let i=1;i<=wordCount;i++){
      let evenLetters = [];
      let oddLetters = [];
      for(let j=0;j<words[i].length;j++){
          if(j%2===0){
              evenLetters.push(words[i][j]);
          }else{
              oddLetters.push(words[i][j]);
          }
  }
      console.log(evenLetters.join('')+' '+oddLetters.join(''));
  }
  
}
