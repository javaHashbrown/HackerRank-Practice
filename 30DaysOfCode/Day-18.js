function Solution(){
    //Write your code here
      var queue = [];
      var stack = [];
      this.pushCharacter = function(char){
          stack.push(char);
      }
      this.popCharacter = function(){
          return stack.pop();
      }
      this.enqueueCharacter = function(char){
          queue.push(char);
      }
      this.dequeueCharacter = function(){
          return queue.shift();
      }
  }