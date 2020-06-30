// Grunt的入口文件
// 用于定义一些需要 Grunt 自动执行的任务
// 需要导出一个函数
// 此函数接收一个 grunt 的形参，内部提供一些创建任务时可以用到的 API

module.exports = grunt => {
  grunt.registerTask('foo', () => { // 注册一个方法 一个参数为方法名 yarn grunt foo
    console.log('hello grunt')
  })

  grunt.registerTask('bar', '任务描述', ()=> { // 使用 yarn grunt --help可以看到任务描述内容
    console.log('hello bar')
  })

  // grunt.registerTask('default', () => { // 直接运行yarn grunt 默认运行此方法
  //   console.log('hello default')
  // })

  grunt.registerTask('default', ['foo', 'bar']) // 把foo 和 bar 串联到一起先后运行

  /**
   * grunt的特点默认支持同步模式
   * 如果要异步操作，一定要在异步任务之前先使用this.async()得到一个函数，在异步操作完成之后调用
   */
  // grunt.registerTask('async-task', () => {
  //   setTimeout(() => {
  //     console.log('hello async')
  //   }, 1000)
  // })
  grunt.registerTask('async-task', function() {
    const done = this.async()
    setTimeout(() => {
      console.log('hello async')
      done()
    })
  })
}