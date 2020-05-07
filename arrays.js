var chocolateBars=['snickers','hundred grand','kikat','skittles']

function addElementToBeginningOfArray(array,element){
  return[element,...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array,element){
  return [...array,element]
}
function destructivelyAddElementToEndOfArrary (array,element){
  element.push(array)
  return array
}
