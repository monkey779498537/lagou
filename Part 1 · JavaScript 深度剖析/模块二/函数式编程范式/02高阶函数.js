// 什么是高阶函数
// 可以把函数作为参数传递给另外一个函数
// 可以把函数作为另外一个函数的返回结果

// 高阶函数的意义：
/**
 * 抽象可以帮我们屏蔽细节，只需要关心我们的目标；
 * 用来抽象通用的问题
 */

// 函数作为参数
function forEach(arr, fun) {
  for (let i = 0; i < arr.length; i++) { // 高阶函数无须关注for循环中的i变量的处理
    fun(arr[i])
  }
}

var arr = [1,2,3]
forEach(arr, function(item) {
  console.log(item)
})

function filter(arr, fn) {
  let result = []
  for(let i = 0; i< arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

var result = filter(arr, function(item) {
  return item > 1
})

// 函数作为返回值

function makeFun() {
  let str = 'hello, Function'
  return function () {
    console.log(str)
  }
}
var fun = makeFun()  // 另外一种方式： makeFun()()
fun()

function once (fn) {
  let done = false
  return function (res) {
    if (!done) {
      done = true
      // return fn(res) // 最普通的用法
      // return fn.apply(this, arguments) // fn 的this指向当前的this对象  第二个参数为类数组
      // return fn.call(this, ...arguments) // 同上 第二个参数为枚举内容
      return fn.bind(this, ...arguments)() // 同上 不会立即执行
    }
  }
}

var res = once(function(res) {
  console.log(res)
})
res(5)