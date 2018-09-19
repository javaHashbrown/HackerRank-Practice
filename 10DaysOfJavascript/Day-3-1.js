/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function
  let max = 0;
  let secondMax = -1;
  for(let index = 0;index<nums.length;index++){
      if(nums[index]>max){
          secondMax = max;
          max = nums[index];
      }else if(nums[index]<max && nums[index]>secondMax){
          secondMax = nums[index];
      }
  }
  return secondMax;
}