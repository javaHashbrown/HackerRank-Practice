/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{
  constructor(lengthArr){
      this._lengthArr = lengthArr;
  }
  get lengthArr(){
      return this._lengthArr;
  }
  perimeter(){
      return this.lengthArr.reduce((acc,cur)=>acc+cur,0);
  }
}