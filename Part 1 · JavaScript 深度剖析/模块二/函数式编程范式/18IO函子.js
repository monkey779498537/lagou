/** IO函子:
 *    _value是一个函数，这里把函数作为值来处理
 *    可以把不纯的动作储存到_value中，延迟执行这个不纯的操作（惰性执行），包装当前的纯操作
 *    把不纯的操作交给调用者处理
 */
const _ = require('lodash/fp')

class IO {
  static of(value) {
    return new IO(function () {
      return value
    })
  }
  constructor(value) {
    this._value = value
  }
  map(fn) {
    return new IO(_.flowRight(fn, this._value))
  }
}
var r = IO.of(process)   // process node获取路径的方法
        .map(p => p.execPath)
console.log(r)
console.log(r._value())