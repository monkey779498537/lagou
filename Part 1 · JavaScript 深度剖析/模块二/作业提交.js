// 一、
//   1.引用计数器的原理：
//     给所有对象添加引用计数，当对象引用计数为0的时候视为垃圾，会被立即回收
//   2.优点：
//     a.发现垃圾会立即处理并回收;
//     b.减少程序的暂停和卡顿；
//   3.缺点：
//     a.需要计数相对需要耗资源，时间开销大；
//     b.无法回收循环引用内容。

// 二、
//   标记整理的工作流程：
//     1.从全局根元素开始查找，并给每个活动对象做标记；
//     2.把标记的活动对象位置做调换，调整空间
//     3.开始清理没有被标记的对象

// 三、
//   V8新生代储存区垃圾回收流程：
//     1.回收采用复制算法和标记整理；
//     2.划分form使用空间和To空闲空间；
//     3.标记整理后将活动对象拷贝至To空闲空间完成复制；

// 四、
//   增量标记算法在何时使用：V8的老生代空间中会使用
//   工作原理：程序合垃圾回收机制交替执行

// 代码题一：
const fp = require('lodash/fp')
// horsepower 马力   dollar_value 价格  in_stock 库存
const cars = [
  {
    name: 'Ferrari FF',
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true
  },
  {
    name: 'Spyker C12 Zagato',
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false
  },
  {
    name: 'Jaguar XKR-S',
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false
  },
  {
    name: 'Audi R8',
    horsepower: 525,
    dollar_value: 114200,
    in_stock: false
  },
  {
    name: 'Aston Martin One-77',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true
  },
  {
    name: 'Pagain Huayra',
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false
  }
]

// 练习一
var last = cars => fp.last(cars)
var prop = last => fp.prop('in_stock', last)
var lastProp = fp.flowRight(prop ,last)

// // 练习二
var first = cars => fp.first(cars)
var prop = first => fp.prop('name', first)
var firstProp = fp.flowRight(prop, first)

// 练习三
let _average = function(xs) {
  return fp.reduce(fp.add, 0, xs) / xs.length
}
// let averageDollarValue = function (cars) {
//   let dollar_values = fp.map(function(car) {
//     return car.dollar_value
//   }, cars)
//   return _average(dollar_values)
// }
// 函数组合方式：
let averageDollarValue = function () {
  return fp.map(function (car) {
    return car.dollar_value
  },cars)
}
let composeRightRes = fp.flowRight(_average, averageDollarValue)
console.log(composeRightRes(cars))

// 练习四
let _underscore = fp.replace(/\W+/g, '_')
let lower = item => 
  fp.map(function(value){
    return fp.lowerCase(item)
  },item)
let lowerRES = fp.flowRight(_underscore ,lower)

// 代码题二
// 练习一：
  let ex1 = maybe()
            .map(x => fp.map(function(value){
              return fp.add(value, value)
            }, x))
    
// // 练习二：
let ex2 = xs()
          .map(x => fp.first(x))

// 练习三：
let ex3 = safeProp('name', user)
            .map(x => fp.first(x))

// 练习四：
let ex4 = function(n) {
  return Maybe.of(n)
}