/** 为什么要学习函子：
 *    函数式编程中如何把副作用控制在可控范围内（Maybe函子）、异常处理（either函子）、异步操作等。
 */

/** 什么是functor：
 *    容器：包含值和值的变形关系（这个变形关系就是函数）
 *    函子：是一个特殊的容器，通过一个普通的对象来实现，该对象具有map方法，map方法可以运行一个函数对值进行处理（变形关系）
 */

 //使用new
 class Container {
   constructor(value) {
     this._value = value
   }
   map(fn) {
     return new Container(fn(this._value))
   }
 }
 var r = new Container(5)
  .map(x => x + 1)
  .map(x => x * x)
 console.log(r)

 // 使用函数式编程思想改造
 class Container1 {
   static of (value) {  // 使用静态方法
     return new Container1(value)
   }
   constructor(value) {
     this._value = value
   }
   map(fn) {
     return Container1.of(fn(this._value))
   }
 }
 var r2 = Container1.of(5)
 .map(x => x + 1)
 .map(x => x * x)
console.log(r2) // Container1 { _value: 36 }  r2为函子对象

/** 函子functor总结：
 *    函数式编程运算不直接操作值，由函子完成
 *    函子就是一个实现map契约对象
 *    可以把函子想象成一个盒子，这个盒子里封装了一个值
 *    想要处理盒子中的值，我们需要给盒子的map方法传递一个处理值的函数（纯函数），由这个函数对值进行处理
 *    最终map返回一个包含新值的盒子（函子）
 */