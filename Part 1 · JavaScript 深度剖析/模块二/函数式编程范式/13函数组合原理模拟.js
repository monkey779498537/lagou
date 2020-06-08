// 模拟lodash中组合函数  flowRight
const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = item => item.toUpperCase()

// 调用lodash方式时
const lodashRes = _.flowRight(toUpper, first, reverse)
console.log(lodashRes(['aaa', 'bbb', 'ccc']))

// 自己模拟实现
// 常规写法
// function composeRight(...args) { // 此处处理的是一个元素为多个函数的数组 [fn1, fn2 ....]
//   return function (value) { // value为要处理的数组数据
//     return args.reverse().reduce(function(initValue, nowFn) {
//       // 因为是模拟Right所以先reverse倒序
//       // 之后在reduce（function('计算之后的返回值', cureentValue, currentIndex, arr), initValue）方法轮询调用传进来的方法
//       return nowFn(initValue)
//     }, value)
//   }
// }

// 箭头函数写法
// 注意点： 
// 1. var a = () => 'a' ---直接return出结果   var b = () => { return 'b' } -->需要手动return结果
// 2. return整体的时候 return ()
// const composeRight = (...args) => { 
//   return ( 
//     value => args.reverse().reduce(
//       (initValue, nowFn) => nowFn(initValue)
//     ,value ) 
//   )
// }
const composeRight = (...args) => (value) => args.reverse().reduce((initValue, nowFn) => nowFn(initValue), value)
const composeRightRes = composeRight(toUpper, first, reverse)
console.log(composeRightRes(['aaa', 'bbb', 'ccc']))