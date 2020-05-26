/*
  实例方法 VS 静态方法
  实例方法：需要new 一个实例对象去调用
  静态方法：直接通过类型本身调用
  ES2015中新增静态成员的static关键词
*/
class Person {
  constructor(name) {
    this.name = name
  } // 这个不需要逗号分隔
  say() {
    console.log(`hi~ my name is ${this.name}`)
  }
  static create (name) {
    return new Person(name)
    // 需要注意：这时的this指向的是当前的类型，而不是实例对象
  }
}
var sun = Person.create('xinxin')
sun.say()