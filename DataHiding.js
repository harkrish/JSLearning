// function counter() {
//   var count =0; //Data hiding
//   function incrementCounter(){
//     count++; 
//     console.log(count);
//   }
//   return incrementCounter; 
// } 

// var counter1 = counter(); 
// counter1(); //1
// counter1(); //2

// //Again it will start counting fresh
// var counter2 = counter(); 
// counter2(); //1
// counter2(); //2 
 
//Advantages of closure is Data hiding and encapsulation
//Function Constructor 

function Counter() {
  var count =0;
  this.incrementCounter = function(){
    count++; 
    console.log(count);
  }
  this.decrementCounter = function(){
    count--; 
    console.log(count);
  } 
} 

var counter1 = new Counter(); //without new keyword ,we will get TypeError
counter1.incrementCounter(); //1
counter1.incrementCounter(); //2 
counter1.decrementCounter(); 




