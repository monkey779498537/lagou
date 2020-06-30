// 实现这个项目的构建任务
const fs = require('fs')
const { Transform } = require('stream')

exports.gulpOrige = () => {
  const read = fs.createReadStream('src\assets\styles\*.css')
  const write = fs.createWriteStream('dist\style.min.css')


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