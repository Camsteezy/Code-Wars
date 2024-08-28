function accum(s) {
	// your code
//   P:STRINGS.NUMBERS ? SPECIAL CHACRACTERS.
//   R:string that repeats same times as index
//   E:console.log(accum['Cam']C - aa - mmm)
//   console.log(accum['ItZel']I - tt - ZZZ -eeee - lllll)
//   P:.map .split . repeat. join
  return s.split('').map((str,index)=>str.toUpperCase() + str.toLowerCase().repeat(index)).join('-')
}
