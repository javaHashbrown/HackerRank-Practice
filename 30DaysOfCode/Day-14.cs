	// Add your code here
    public Difference(int[] arr){
        elements = arr;
    }
    public void computeDifference(){
        int numEle = elements.Length;
        int maxDiff = 0;
        for(int pre=0;pre<numEle-1;pre++){
            for(int sub=pre+1;sub<numEle;sub++){
                int diff = elements[pre]-elements[sub]>0?elements[pre]-elements[sub]:elements[sub]-elements[pre];
                if(diff>maxDiff){
                    maxDiff = diff;
                }
            }
        }
        this.maximumDifference = maxDiff;
    }