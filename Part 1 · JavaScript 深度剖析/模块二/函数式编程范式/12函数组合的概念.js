// 函数的组合概念
/** 函数组合出现的原因：
 * 使用纯函数和柯里化容易写出‘洋葱’代码 （层层嵌套） ‘h(f(x(z)))’
 * 函数的组合可把细粒度的函数重新组合成一个新的函数   （之前的纯函数柯里化是函数的功能细分，函数组合是细分后函数的功能合并）
 */

 /** 函数组合的概念（compose）:
  *  如果一个函数要经过多个函数处理才能得到最终结果，这是需要 *把中间过程的函数合并成一个新的函数*
  *     函数就像数据的管道，函数组合就是把这些管道连接起来，让数据通过多条管道形成最终结果
  *     函数组合默认从右到左    (不过这个是可以在实现组合函数的时候自己控制)
  *     列子： fn = compose(f1, f2, f3) ---> b = fn(a)
  */

  // 实现例子
  function reverse (array) {
    return array.reverse()
  }

  function laseValue(array) {
    return array[0]
  }

  function compose(fn1, fn2) {
    return function (value) {
      return fn1(fn2(value))
    }
  }

  var array = [1,2,3]
  var res = compose(laseValue, reverse)
  console.log(res(array))