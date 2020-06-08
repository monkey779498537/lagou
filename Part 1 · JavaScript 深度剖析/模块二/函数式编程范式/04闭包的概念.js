// 闭包的本质
// 函数在执行时会放在执行栈上，当函数执行完毕后会从执行栈上移除，但堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以反问外部函数的成员

// 例子
function fn () {
  let str = 'Hello, 闭包'
  return function () {
    console.log(str)
  }
}
var res = fn()
res()