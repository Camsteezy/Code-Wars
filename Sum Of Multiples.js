function sumMul(n,m){
//your idea here
  // number
  // multiples of n that are lower than m
  // function(4,9[12])
  // loop
  let sum = 0
  for ( let i = 1;i < m;i++){
    if (i % n === 0){
      sum += i
    }
    
  }
  if ( sum > 0){
    return sum
  }else {
    return 'INVALID'
  }
   

}

/* Ternary Version of problem
function sumMul(n,m){
let sum = 0
for (let i = 1 ; i< m ; i++){
if (i % n === 0){
sum += i
}
return sum > 0 ? sum:'INVALID'
}
