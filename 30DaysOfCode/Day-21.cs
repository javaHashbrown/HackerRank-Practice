	/**
	*    Name: PrintArray
	*    Print each element of the generic array on a new line. Do not return anything.
	*    @param A generic array
	**/
    // Write your code here
    public static void PrintArray<T>(T[] array){
        for(int i=0;i<array.Length;i++){
            Console.WriteLine(array[i]);
        }
    }