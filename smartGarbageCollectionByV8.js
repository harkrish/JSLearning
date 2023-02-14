function outer(){
    var a =100,z= 20; 
    function inner() { //closure (outer)
       console.log(a); //z is not used inside
    }
    return inner;
}   

var x = outer();
x(); 
console.log(z); //z is not defined, means it is garbage collected
