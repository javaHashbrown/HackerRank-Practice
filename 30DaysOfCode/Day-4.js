function Person(initialAge){
  // Add some more code to run some checks on initialAge
  this.Age=0;
  if(initialAge<0){
     console.log('Age is not valid, setting age to 0.');
  }else{
      this.Age = initialAge; 
  }
this.amIOld=function(){
 // Do some computations in here and print out the correct statement to the console
  if(this.Age<13){
      console.log('You are young.');
  }else if(this.Age>=13 && this.Age<18){
      console.log('You are a teenager.');
  }else {
      console.log('You are old.');
  }
};
 this.yearPasses=function(){
        // Increment the age of the person in here
     this.Age++;
 };
}