function betterThanAverage(classPoints, yourPoints) {
  // Your code here
//   P:Boolean? numbers? special character? strings?
//   R:True or false
//   E:console.log()
//   P: Add your score and class score than divide by length
  return yourPoints > classPoints.reduce((acc,c)=> acc +c,0) /classPoints.length
}
