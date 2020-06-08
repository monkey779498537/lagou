// map
const map = function (arr, fn) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]))
  }
  return result
}
var arr = [1,2,3,4]
var res = map(arr, v => v * v)
console.log(res)

// every

const every = (arr, fn) => {
  let result = true
  for(let item  of arr) {
    result = fn(item)
    if (!result) {
      break
    }
  }
  return result
}
var arr = [11,12,13]
var e = every(arr, v => v > 10)
console.log(e)

// some
const some = (arr, fn) => {
  let result = false
  for (let item of arr) {
    result = fn(item)
    if (result) {
      break
    }
  }
  return result
}
var arr = [1,2,55]
var s = some(arr, v => v > 5)
console.log(s)