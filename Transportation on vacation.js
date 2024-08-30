function rentalCarCost(d) {
  // Your solution here
//   P: string ? numbers. special character ?
// R: total different amounts for the amount days
//   E:console.log(total[2]$80)
//   console.log(total[3]$100)
//   P:else if statement . add but also include discounts
let total = 40
  if ( d >=7){
    return  (total * d )- 50
  }else if ( d >= 3){
    return (total * d) - 20
  }else{
    return total *d
  }
}
