// 纯函数：相同的输入始终得到相同的输出，而且没有任何可观察的副作用
// slice splice

var arr = [1, 2, 3, 4, 5]

// 纯函数
console.log(arr.slice(0, 3))
console.log(arr.slice(0, 3))
console.log(arr.slice(0, 3))
console.log(arr.slice(0, 3))

// 不纯的函数
console.log(arr.splice(0, 3))
console.log(arr.splice(0, 3))
console.log(arr.splice(0, 3))