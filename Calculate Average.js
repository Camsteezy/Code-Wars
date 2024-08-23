function findAverage(array) {
  // your code here
//   P: Numbers. strings ? special charcaters ?
//   R: Average of all numbers in the array
//   E:console.log(avg[5,10,15]10)
//   console.log(avg[20 100,140,50,30 ]68)
//   P: if else statement.
//   add all numbers in the array than divide by the length
  if ( array.length === 0){
    return 0
  }else {
    return array.reduce((acc,c)=> acc + c, 0)/array.length
  }
}
