var animal = 'dog'
function myAnimal() {
  return animal
}
//myAnimal();
////////////////
function yourAnimal() {
  var animalOne = "cat";
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animalOne;
}
//yourAnimal();
//////////////////
function add2(n) {
  const two = 2;
  return n + two;
// Feel free to move things around!
}
//add2(2);
///////////////////
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// N: you only need to modify the code below this line.

var theFunk = funkyFunction()();
theFunk()
