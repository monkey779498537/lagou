// gulp 入口文件

// gulp取消的同步执行的顺序，全部采用异步执行方式，所以每个函数结束都要有结束标识
exports.foo = done => {
  console.log('hello gulp')
  done() // 标识函数结束
}

// 默认任务
exports.default = done => {
  console.log('hello gulp default')
  done()
}

// gulp组合任务
const { series, parallel } = require('gulp')

const task1 = done => {
  console.log('task1')
  done()
}
const task2 = done => {
  console.log('task2')
  done()
}

exports.foo1 = series(task1, task2)  // 串行任务 同步任务
exports.foo2 = parallel(task1, task2) // 异步任务

exports.promise = () => {
  console.log('hello Promise')
  return Promise.resolve()
}

// 构建过程核心工作原理 start ----------------------------------------------------------------------

const fs = require('fs')  // 通过node方式获取文件方法 fs
const { Transform } = require('stream') // 文件转换

exports.gulpOrige = () => {
  // 获取文件
  const read = fs.createReadStream('style.css')

  // 写入文件
  const write = fs.createWriteStream('style.min.css')

  // 获取文件转换内容
  const stransform = new Transform({
    transform: (chunk, encoding, callback) => {
      // 核心装换过程
      // chunk ==> 读取流中读取到的内容 （Buffer）

      // 先获取读取流中的内容
      const input = chunk.toString()
      // 把字符串中的内容格式化
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
      // 回调内容，默认先处理异常，没有异常就传null
      callback(null, output)
    }
  })

  // 把读取出来的文件导入要写入的文件
  read
    .pipe(stransform) // 先转换,实现压缩的效果
    .pipe(write) // 导入内容
  
  return read
}

// 构建过程核心工作原理 end ----------------------------------------------------------------------