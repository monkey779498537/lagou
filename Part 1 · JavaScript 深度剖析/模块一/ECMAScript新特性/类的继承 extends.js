/*
  类的继承 extends
  面向对象中很重要的特性
  继承主要的作用：使用相似类型之间重复的地方
  es6之前都是用过原型 __proto__  prototype，es6可以通过extends来实现继承
*/

class FatherClass {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log(`Hi~!my name is ${this.name}`)  // this指向当前类型
  }
}

class SonClass extends FatherClass {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayHi() {
    super.say()
    console.log(`Heloo~!my name is ${this.name} and I am ${this.age} years old`)
  }
}

var person = new SonClass('xiaoming', 29)
person.sayHi()
