function highAndLow(numbers){
  // ...
//   P:string. numbers ? special characters ?
//   R:highest and lowest number with spece in between as a string
//   E:console.log(ex['-1 5 2 1 8']'8 -1')
//   console.log(ex['50 15  10 22 40']'50 10')
//   P:sort? . split ? .map ? maybe turn string to number than back to string 
  let string = numbers.split(' ').map(Number)
  return `${Math.max(...string)} ${Math.min(...string)}`
}
