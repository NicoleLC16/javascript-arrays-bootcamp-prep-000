var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
=======
function addElementToBeginningofArray (array, element) {
>>>>>>> 80c7a1be5d06e82bc576f250696d3be02e3ad318
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return (array);
}


function addElementToEndOfArray (array, element) {
  
  return [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return (array);
}

function accessElementInArray (array, index) {
  return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  array.shift(element);
  return (array);
}

function removeElementFromBeginningOfArray (array) {
  return (array.slice(1));
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return (array)
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1);
}