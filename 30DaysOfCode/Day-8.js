function processData(input) {
  //Enter your code here
  let all = input.split('\n');
  let numPairs = parseInt(all[0],10);
  let pairs = all.slice(1,numPairs+1);
  let queries = all.slice(numPairs+1,all.length);
  let phoneBook = new Map();
  pairs.map(pair=>{
      let res = pair.split(' ');
      phoneBook.set(res[0],res[1]);
  });
  queries.map(query=>{
      let phone = phoneBook.get(query);
      if(phone){
          console.log(`${query}=${phone}`)
      }else{
          console.log('Not found');
      }
  })
} 