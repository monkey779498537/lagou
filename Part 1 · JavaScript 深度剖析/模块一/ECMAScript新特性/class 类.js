/*
  class 类
  重复声明会报错
*/
function Person (name) {
  this.name = name
}
Person.prototype.say = function () {
  console.log(`hi~ my name is ${this.name}`)
}
var sun = new Person('fang')
sun.say()

class Person2 {
  constructor(name) {
    this.name = name
  } // 这个不需要逗号分隔
  say() {
    console.log(`hi~ my name is ${this.name}`)
  }
}
var sun2 = new Person2('xin')
sun2.say()