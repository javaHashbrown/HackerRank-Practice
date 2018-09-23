let btnIds=['btn1','btn2','btn3','btn6','btn9','btn8','btn7','btn4'];
let rotateBtns = btnIds.map(id=>document.getElementById(id));
let btnText = [1,2,3,6,9,8,7,4];

let btn5 = document.getElementById('btn5');
btn5.onclick=function(){
    btnText.unshift(btnText.pop());
    rotateBtns.map((btn,index)=>{
        btn.innerHTML = btnText[index];
    });
    
}