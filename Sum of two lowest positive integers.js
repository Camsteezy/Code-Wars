function sumTwoSmallestNumbers(numbers) {  
  //Code here
//   P:numbers. strings? special characters ?
//   R: sum of two lowest numbers given 
//   E:console.log(sumTwo[1,2,3,4]3)
//console.log(sumTwo[5,20,25,15,30,50]20)
//   P: find two lowest numbers in array than sum
  numbers.sort((a,b)=> a - b)
  let twoLow = [numbers[0],numbers[1]]
  
  return twoLow.reduce((acc,c)=> acc + c ,0)
}
