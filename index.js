function yourAnimal(){
  return "cat";
}
function add2(n){
  return n+2;
}
function myAnimal(){
  return "dog";
}
var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}
var theFunk = funkyFunction()();
