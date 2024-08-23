function openOrSenior(data){
  
 return data.map(([age, handicap]) => (age >= 55 && handicap > 7)? 'Senior':'Open')




} // ...
//   P:NUMBERS yes ? special characters?
//   R:string 'Open' or 'Senior'
//   E:console.log(oOrS[20,22]'Open')
//   console.log(oOrS[62,-2]'Senior')
//   P:number val converts to 'Open' or 'Senior'
