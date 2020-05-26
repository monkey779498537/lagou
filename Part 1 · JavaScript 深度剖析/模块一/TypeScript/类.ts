// 类
export {}
class Person {
  name: string  // = 'init value' 需要提前定义，否则后面this无法访问
  age: number
  constructor(name:string, age:number) {
    this.name = name
    this.age = age
  }
  sayHi(msg:string) {
    console.log(`Hi ${this.name} , ${this.age}`)
  }
}

// 修饰符

// 关键字  private    私有属性，外部不允许访问,仅允许内部访问
// 关键字  public     公有属性，也是默认的
// 关键字  protected  受保护的，外部不允许访问   和 private的区别：protected 只允许在子类中访问的成员，允许继承
// 关键字  readonly   只读修饰符，如果前面已经有了修饰符了，需要跟在修饰符后面 
class Person1 {
  public name: string
  private age: number
  protected readonly sex: string
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.sex = 'M'
  }
  sayHi(msg: string) {
    console.log(`Hi ${this.name} , ${this.age}`)
  }
}

class Student extends Person1 {
  constructor(name:string, age: number) {
    super(name,age)
    console.log(this.sex)
  }
}

const sun = new Person1('HAHA', 19)
console.log(sun.name)
// console.log(sun.age) // 会报错
// console.log(sun.sex) // 会报错