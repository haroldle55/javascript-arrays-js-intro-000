var chocolateBars=['snickers','hundred grand','kikat','skittles']

function addElementToBeginningOfArray(array,element){
  return[element,...array]
}
funciion destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift('element')
  return array
}
