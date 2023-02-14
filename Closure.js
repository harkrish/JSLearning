//function bundled together with lexical scope 
//inner func form closure with outer scope
function outest() { 
    var c = 20;
function outer(b){
   // var a =100; 
    function inner() {
       console.log(a,b,c); //prints 10 ,not 100 when it is outside becuase of lexical scope 
    }
    //var a =10;  //prints 10 still it is closure
   // let a = 10; //prints 10 still block scope wont affect 
    //if you comment let a=10, then it will print a=100 ,HelloWorld,20
    return inner;
}  
return outer;  
}
let a = 100;
// if you comment let a=100, then it will print reference error a is not defined

//outest()("HelloWorld")(); 
var x = outest()("HelloWorld"); 
x();


