// 纯函数的好处

// 好处一：可缓存  （记忆函数）
// 因为纯函数对相同的输入始终有相同的输出，所以可以把纯函数的结果缓存起来，对比较复杂耗时的运算比较有用

// 好处二：可测试
// 纯函数让测试更方便

// 好处三：并行处理
// 多线程环境下并行操作共享的内容存数据可能会出意外
// 纯函数不需要访问共享的内存数据，所以在并行环境中可以任意执行纯函数(web worker : es6开始多线程的新方法)

// 记忆函数
const _ = require('lodash')

function getArea (r) { // 具体操作函数
  console.log('-----进来了-----')
  return Math.PI * r * r
}

function memoize(fn) { // 缓存函数
  let cache = {}
  return function () {
    const key = JSON.stringify(arguments) // 用来判断是否已经存在这个值的生成内容
    cache[key] = cache[key] || fn.apply(fn, arguments) // 判断是否存在 否则 再去生成使用另外的函数
    return cache[key]
  }
}

var res = memoize(getArea)
console.log(res(4))
console.log(res(4))
console.log(res(5))
console.log(res(5))

// arguments
function a () {
  console.log(arguments)
}
a('a')