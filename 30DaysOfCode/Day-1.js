function main(){
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    
    /* solution below */
    // Declare second integer, double, and String variables.
    var ii,dd,ss;
    // Read and save an integer, double, and String to your variables.
    ii = parseInt(readLine());
    dd = parseFloat(readLine());
    ss = readLine();
    // Print the sum of both integer variables on a new line.
    console.log((i+ii));
    // Print the sum of the double variables on a new line.
    console.log((dd+d).toFixed(1));
    // Concatenate and print the String variables on a new line
    console.log(s+ss);
    // The 's' variable above should be printed first.
}
