//Write your code here
function Calculator(){
    this.power=function(n,p){
        if(n<0 || p<0){
            throw 'n and p should be non-negative';
        }
        return Math.pow(n,p);
    }
}