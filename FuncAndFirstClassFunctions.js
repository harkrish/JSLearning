
//During Hoisting
a(); //a called
//b(); //TypeError: b is not function

//function statement  = function declaration
function a() {
    console.log("a called");
}
//a();

//function expression = assign function to variable
var b= function() {
    console.log("b called");
}
//a();
//b(); 

//Difference between function statement and function expression is Hoisting,
// as b is initially undefined in memory phase, and when trying to call the function 
//it results in TypeError

//Anonymous function is a type of function statement
// function () {  //syntaxError

// }  
//They are used when functions are used as values and assign to variable


//Named Function Expression 
var b= function xyz() {
    console.log(xyz); //if you call inside ,it prints function itself
    console.log("b called");
} 
b();
//xyz()  //if you call outside we will get Reference Error - xyz is not defined 

//xyz is not created in outer scope,but it is created as local variable 

//Difference between parameters and Arguments  

//parameters -> labels or identifiers or local variables in function scope
var x = function(param1) { //gets values
    console.log(param1); 
} 
//x(1); //In Arguments we pass values 
x(function () { //passing another function inside function

});   //prints anonmymous function

function bcd() {

}

x(bcd); //prints bcd funtion 


var fuc = function(param1) { //gets values
    return function xyx() {

    }
}  
//If it is let/const, variables are in TDZ

console.log(fuc(bcd));


/*First class functions / First class citizens 
Ability to use functions like values ,
pass functions as argument,  
can be executed inside closured function
can return functions 
*/

//Arrow functions 
