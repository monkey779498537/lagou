// monad函子：可以变扁的pointed函子， IO(IO(x))， 变扁--》解决函子嵌套的问题
// 一个函子如果具有join和of两个方法并遵守一些定律就是一个monad函子

const fs = require('fs')
const fp = require('lodash/fp')
class IO {
  static of (value) {
    return new IO(function() {
      return value
    })
  }
  constructor(value) {
    this._value = value
  }
  map(fn) {
    return new IO(fp.flowRight(fn, this._value))
  }
  join() {
    return this._value()
  }
  flatmap(fn) {
    return this.map(fn).join()
  }
}

let readFile = function(fileName) {
  return new IO(function () {
    return fs.readFileSync(fileName, 'utf-8')  // node同步读取文件的方法
  })
}
let print = function(x) {
  return new IO(function() {
    console.log('print: ' + x)
    return x
  })
}

let r = readFile('../../../package.json')
          .map(x => fp.toUpper(x))
          .flatmap(print)
          .join()
console.log(r)