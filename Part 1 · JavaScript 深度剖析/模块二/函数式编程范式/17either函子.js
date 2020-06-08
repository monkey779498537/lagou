/** either函子：
 *    两者中的任何一个，类似于if...elss...处理
 *    异常会让函数变得不纯，either函子可以用来做异常处理
 */

class Left {
  static of(value) {
    return new Left(value)
  }
  constructor(value) {
    this._value = value
  }
  map(fn) {
    return this
  }
}
class Right {
  static of(value) {
    return new Right(value)
  }
  constructor(value) {
    this._value = value
  }
  map(fn) {
    return Right.of(fn(this._value))
  }
}

function parseJSON(params) {
  try {
    return Right.of(JSON.parse(params))
  } catch (e) {
    return Left.of({error:e.message})
  }
}
var r = parseJSON('{"name": "JSON"}')
  .map(x => x.name + 1)
console.log(r)
var l = parseJSON('{name: JSON}')
  .map(x => x)
console.log(l)