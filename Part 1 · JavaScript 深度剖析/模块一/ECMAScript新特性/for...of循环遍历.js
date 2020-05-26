/*
  for...of 一种全新的遍历方式
  作为遍历所有数据结构的统一方式
  可以遍历任何对象，但是前提是被遍历对象要挂载Symbol.iterator接口
*/

// 普通数组的遍历
var arr = [1,2,3,4,5]
for (const item of arr) {
  console.log(item) // 1 2 3 4
  if (item > 3) {
    break // 可以用break终止循环
  }
}

// Set的遍历
var arr2 = [1,2,3,4]
var setArr = new Set(arr2) // 可以直接传入，可以add方式添加类似push
setArr.add(5)
for (const item of setArr) {
  console.log(item) // 1 2 3 4 5
}
for (let i = 0; i < setArr.size; i++) { // for传统遍历方法无法获取
  console.log(setArr[i]) // undefined * 5
}
setArr.forEach(item => console.log(item)) // 1 2 3 5

// Map的遍历
var objMap = new Map() // 不能直接传参
objMap.set('objMapKey', 'objMapValue') // 参数形式，用','分隔开
objMap.set('objMapKey1', 'objMapValue1')
for (const [key, value] of objMap) {
  console.log(`key: ${key}, value: ${value}`)
}
for (const item  in objMap) {
  console.let(item) // undefined
}

// 普通对象的遍历  可以遍历任何对象，但是前提是被遍历对象要挂载iterator接口
var obj = {
  name: 'name',
  age: 19
}
for (const item of obj) {
  console.log(item) // 抛错 obj[Symbol.iterator] is not a function
}