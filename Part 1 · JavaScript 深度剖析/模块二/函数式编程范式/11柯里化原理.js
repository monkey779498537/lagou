//  柯里化函数   lodash组件封装好的   lodash.curry(function(){})
//  解析currey函数实现
const _ = require('lodash')
function getSum (a, b, c) {
  return a + b + c
}
// var curried = _.curry(getSum)
// console.log(curried(1,2,3))
// console.log(curried(1)(2,3))
// console.log(curried(1,2)(3))

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) { // 判断参数是否齐全，否则需要再调用一个函数  另外：函数的形参长度可以直接函数名.length拿到
      return function () {
        // 关键的点：当参数不够时，需要再重新执行一遍函数，并且将两次的参数合并后再调用
        return curried(...args.concat(...Array.from(arguments)))
        // arguments 是一个类数组，使用Array.from方法转换成真正的数组，再使用数组解构的方式转成一个个的参数
        // concat最终返回的是一个合并之后的数组,所以这里还需要解构一下，以作为函数的入参
      }
    }
    return fn(...arguments)
  }
}
var curried = curry(getSum)
console.log(curried(1,2,3))
console.log(curried(1)(2,3))
console.log(curried(1,2)(3))