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
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}
function accessElementInArray(array,index){
  var array =['element','element1','element2']
  return array[1]
}
