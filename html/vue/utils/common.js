export const getRandom = (n) => {
  let length = n||5
  let num = parseInt(Math.random() * Math.pow(10, length)).toString()
  while(num.length < length){
    num = "0"+num
  }
  return num
}