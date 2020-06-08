// 代码优化介绍

// 内容一：慎用全局变量
  /** 原因：
   *    1.全局变量定义在全局执行上下文，是多有所用链的顶端；（查找变量比较耗时）
   *    2.全局执行上下文一直存在于上下文执行栈，直到程序退出；
   *    3.如果一个局部作用域出现了同名变量，则会污染全局变量
   */

// 内容二：缓存全局变量
  // 例子：
    // 优化前： 
    function test () {
      let btn1 = document.getElementById()
      let btn2 = document.getElementById() 
    }

    // 优化后
    function test () {
      let doc = document // document是一个全局对象
      let btn1 = doc.getElementById()
      let btn2 = doc.getElementById() 
    }

// 内容三：通过原型对象添加附加方法
  // 例子:
    // 优化前：
    function Foo () {
      this.fn = function () {
        console.log(111)
      }
    }
    let s = new Foo()

    // 优化后:
    function Foo2 () {}
    foo2.prototype.fn() = function() {
      console.log(111)
    }
    let s2 = new Foo2()

// 内容四：避开闭包陷阱
  // 特点：在作用域外能访问局部作用域内部的数据
  // 缺点：使用不当易内存泄漏
  // 闭包引用保护的变量使用完之后直接置为null

// 内容五：避免属性访问方法使用
  // JS不需要属性的访问方法，所有属性都是外部可见的
  // 使用属性访问方法只会增加一层重定义，没有访问控制力
    // 例子
      // 优化前
      function Person () {
        this.name = 'name'
        this.age = 18
        this.getName = function () {
          return this.name
        }
      }
      const s = new Person()
      s.getName()

      // 优化后
      function Person2 () {
        this.name = 'name'
      }
      const s2 = new Person2()
      s2.name

// 内容六：for循环优化
  var arr = [1,2,3]
  // 优化前
  for (let i = 0; i < arr.length; i++) { // 会多次获取计算arr的长度
    console.log(i)
  }
  // 优化后
  for (let i = 0, len = arr.length; i < len; i ++) { // 前面缓存了一次length，在后面每次循环的时候直接拿到长度
    console.log(i)
  }

// 内容七：采用最优循环方式
  // 性能：forEach > for > for in
  var arr = [1,2,3]
  arr.forEach(function(item) {
    console.log(item)
  })
  for(let i = arr.length; i; i-- ) {
    console.log(i)
  }
  for (let item in arr) {
    console.log(item)
  }

// 内容八：文档碎片优化节点添加
  // 节点的添加操作必然会有回流和重绘，对性能消耗比较大
    // 优化前
    for (let i = 0; i < 10; i++) {
      const domP = document.createElement('p')
      domP.innerHTML = i
      document.body.appendChild(domP) // 每次循环完成都会造成一次dom的回流和重绘
    }
    // 优化后
    const forDom = document.createDocumentFragment() // 新增文档碎片
    for (let i = 0; i < 10; i++) {
      const domP = document.createElement('p')
      domP.innerHTML = i
      forDom.appendChild(domP) // 每次循环都添加到文档碎片中，不会导致dom回流和重绘
    }
    document.body.appendChild(forDom) // 循环完整之后一次性推进body，此时只会造成一个dom回流和重绘

// 内容九：克隆优化节点操作
    // html: <p id='box1'></p>
    // 优化前
    for (let i = 0; i < 3; i++) {
      const domP = document.createElement('p')
      domP.innerHTML = i
      document.body.appendChild(domP)
    }
    // 优化之后
    const box1 = document.getElementById('box1')
    for(let i = 0; i < 3; i++) {
      const domP = box1.cloneNode(false) // 克隆节点
      domP.innerHTML = i
      document.body.appendChild(domP)
    }

// 内容十：直接量替换new Oject操作
//优化前,new 实例化操作
var arr = new Array(3)
arr[0] = 1
arr[1] = 2
arr[2] = 3
// 优化后，直接量使用定义
var arr = [1,2,3]
