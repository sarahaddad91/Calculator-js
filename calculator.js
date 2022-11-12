"use strict" ;


// declations:
var input = document.getElementById('inputT'),
  number = document.querySelectorAll('.numbers div'),
  operator = document.querySelectorAll('.operators div'),
  result = document.getElementById('result'),
  clear = document.getElementById('clear'),
  ShowResult = false; // result is not shown untill user clicks "="
console.log(clear);
console.log(operator);
console.log(number);



for (var i=0; i<number.length;i++){
number[i].addEventListener("click",function(e){

var CurrentString = input.innerHTML;
var LastChar = CurrentString[CurrentString.length -1]; // to check if last entered was a number or an operation

if(ShowResult === false){
input.innerHTML += e.target.innerHTML;}

else if (ShowResult === true && LastChar === "+" || LastChar === "-" || LastChar === "×" || LastChar === "÷" ){
ShowResult = false ;
input.innerHTML += e.target.innerHTML;

}

else{
ShowResult = false ;
input.innerHTML = "";
input.innerHTML += e.target.innerHTML;

}
console.log("input " + input.innerHTML)
});
}



for (var i=0; i<operator.length;i++){
    operator[i].addEventListener("click",function(e) {

        var CurrentString = input.innerHTML;
        var LastChar = CurrentString[CurrentString.length -1];        

        if(LastChar ==="+" || LastChar ==="-" ||LastChar ==="x" ||LastChar ==="÷"  ){
        var newString = CurrentString.substring(0, CurrentString.length - 1) + e.target.innerHTML;
        input.innerHTML = newString;
      console.log("operator inside "+ input.innerHTML)}

        else if (CurrentString.length == 0){
            //ShowResult = false ; // if user enters an operator at first 

        }

        else {
            input.innerHTML += e.target.innerHTML;

        }
    });
}

result.addEventListener("click", function() {

    var inputString = input.innerHTML;
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
 
    var divide = operators.indexOf("÷");
    while (divide != -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("÷");
    }
  
    var multiply = operators.indexOf("×");
    while (multiply != -1) {
     numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
     operators.splice(multiply, 1);
     multiply = operators.indexOf("×");
 
    }
  
    var subtract = operators.indexOf("-");
    while (subtract != -1) {
     // console.log("sub"+subtract);
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
     }
  
    var add = operators.indexOf("+");
    while (add != -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }
  
    input.innerHTML = numbers[0]; // displaying the output
    
    ShowResult = true; // turning flag if result is displayed
  });
  
  // clearing the input on press of clear
  clear.addEventListener("click", function() {
    input.innerHTML = "";
  })








