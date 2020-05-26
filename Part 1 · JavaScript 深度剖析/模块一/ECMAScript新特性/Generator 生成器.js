/*
  Generator 生成器
  方法名前加 '*'
  配合yield 惰性使用
  遇到yield会终止执行下面内容，并返回一个对象
  最主要的作用：解决异步调用过程中，回调嵌套过深的问题
*/

function * foo () {
  console.log('LF')
  yield 100
  console.log('HX')
  yield 200
}
var generator = foo()
generator.next() // LF {value: 100, done: false}
generator.next() // HX {value: 200, done: false}
generator.next() // {value: undefiend, done: true}

// Generator生成器应用 -----------------------------------------------

// 实现点击发送
function * add() {
  let index = 0
  while(true) {
    yield index++
  }
}
var indexAdd = add()
indexAdd.next().value // 1
indexAdd.next().value // 2
indexAdd.next().value // 3

// 配合iterator遍历对象
var obj = {
  life: ['吃饭', '睡觉', '玩游戏'],
  learn: ['语文', '数学'],
  work: ['音乐'],
  [Symbol.iterator]: function * () {
    const all = [...this.life, ...this.learn, ...this.work]
    for (const item  of all) {
      yield item  // 会直接返回 {value: value, done: false/true}的结构,所以可以直接for...of便利，相当于直接返回next()方法
    } 
  }
}
for (const item  of obj) {
  console.log(item)
}