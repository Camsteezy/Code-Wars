function oddOrEven(array) {
   //enter code here
//   P:string. numbers ? special charcaters ?
//   R: sum of array is 'odd'or 'even'
//   E:console.log(nums[10,20,30]'even')
//   console.log(nums[12,13,14]'odd')
//   P: add all numbers of array. then check if their value is even odd. 
  //Than return the strings 'odd' or 'even'
  let avg = array.reduce((acc,c)=> acc + c , 0)
  if ( avg %2 === 0){
    return 'even'
  }else{
    return 'odd'
  }
  
}
