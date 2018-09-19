function processData(input) {
    //Enter your code here
    console.log(getFine(input));
    function getFine(datesArr){
        let [returnDate, expectedDate] = datesArr.split('\n').map(date=>{
            const [day,month,year] = date.split(' ').map(Number);
            return {day,month,year};
        });
        
        if(returnDate.year>expectedDate.year){
            return 10000;
        }
        if(returnDate.year===expectedDate.year && returnDate.month>expectedDate.month){
            return 500*(returnDate.month-expectedDate.month);
        }
        if(returnDate.year===expectedDate.year && returnDate.month===expectedDate.month &&
          returnDate.day>expectedDate.day){
            return 15*(returnDate.day-expectedDate.day);
        }
        return 0;
    }
    
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
