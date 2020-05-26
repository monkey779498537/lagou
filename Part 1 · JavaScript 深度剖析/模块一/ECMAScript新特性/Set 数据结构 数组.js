/*
  Set 数据结构
  与传统的数组类似，区别在于Set内部成员不允许重复
*/
var setArr = new Set()
setArr.add(1).add(2) // Set{1, 2}

setArr.forEach(i => console.log(i)) // 1 2

setArr.delete(2) // true   setArr => Set{1}

console.log(setArr.size)  // size  类似 length

console.log(setArr.has(10)) // false

setArr.clear()  // Set{}

// 数组去重
var repeatArr = [1,2,3,2,3,2,3,2,3,1,4,5,6]
console.log(new Set(repeatArr)) // 返回去重后的Set对象，虽然是和数组类似，不过不能直接通过下标直接获取值[0]

console.log([...new Set(repeatArr)]) // 可以直接转成真正的数组，可以通过下标访问

console.log(Array.from(new Set(repeatArr))) // 可以直接转成真正的数组，可以通过下标访问