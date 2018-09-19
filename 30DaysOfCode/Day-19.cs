using System;
public interface AdvancedArithmetic{
    int divisorSum(int n);
}
public class Calculator : AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        int sum = 0;
        // loop to add n's factors
        for(int i=1;i<=n/2;i++){
            if(n%i==0){
                sum += i;
            }
        }
        //add n self
        sum +=n;
        return sum;
    }
}