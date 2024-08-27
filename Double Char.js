function doubleChar(str) {
  // Your code here
//   P:String. Special characters ? Numbers ?
//   R:return character repeated once
//   E:console.log(ex[Cam]CCaamm)
//  console.log(ex[Itzel]IIttzzeell)
//   P:.map .split .join 
  
  return str.split('').map(w=> w.repeat(2)).join('')
}
