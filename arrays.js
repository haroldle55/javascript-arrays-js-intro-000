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
  var array =[3]
  return array[0]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  var array = array.slice(1)
  return array

}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}
