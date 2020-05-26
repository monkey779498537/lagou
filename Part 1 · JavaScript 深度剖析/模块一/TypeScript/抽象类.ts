// 抽象类：和接口有些类似，约束子类当中必须要有的成员
// 相比接口不同处：抽象类可以包含一些具体的实现，接口只能是成员的抽象，不能包含一些具体的实现

export {}
// 关键词 abstract
abstract class Animal { // 抽象类，此时这个类不能new去实例化，只能够继承
  each (food: string): void {
    console.log(`大口的吃${food}`)
  }
  abstract run (distance:string): void // 抽象方法,不需要写方法体，需要子类去实现方法体
}
class Dog extends Animal {
  run(distance: string): void {
    console.log(`迅速的${distance}`)
  }
}

const d = new Dog()
d.each('Big food')
d.run('KKK')