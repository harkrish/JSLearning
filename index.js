//callback function - Function that is passed on as argument to another function 
//JS is synchronous and single threaded language 
//callbacks handle Asynchronous 
//Event listeners can also invoke closures with scope.
//Inside scope,we have global and closure environment
//Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

//Js wont wait for settimeout to finish over here
setTimeout(function () { //we gave callback to settimeout
    console.log("timer");
},5000); 

function x(y) { //callback function are stored somewhere which can be called sometime else in program
   console.log("x");
   y(); //prints y
}

x(function y() { 
    console.log("y");
})

// setTimeout(() => {    
// }, timeout); 

//In callstack-> GEC,x,y will be there then setimeout 
// If any operation blocks callstack, that is blocking the main thread
/*If JS didnt have First class functions/did not have callback (pass functions as argument),
we could not do async operations */ 

function attachEventListener() {
   let count = 0; 
   //debugger
   document.getElementById("clickMe").addEventListener("click",function xyz() { 
    //we are Inside callstack
    //callback function xyz form closure with outer lexical scope count
     console.log("Button clicked",++count);
   });  
}


attachEventListener();