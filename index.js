var animal = 'dog';
const two = 2;

function myAnimal() {
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal='cat';
  return animal;
}

function add2(n) {
  return n + two;
  // Feel free to move things around
}

function funkyFunction() {
 // var theFunk=funk();
  return function funk() {
    return("FUNKY!");
  };
 
}
var me=funkyFunction();
var theFunk=me();
console.log(me());



  

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

