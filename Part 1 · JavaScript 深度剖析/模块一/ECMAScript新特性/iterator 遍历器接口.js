/*
  iterator 遍历器接口/迭代器
  Symbol.iterator => 配合这next()方式实现遍历
*/

var setArr = new Set([1,2])
var iterator = setArr[Symbol.iterator]() // Symbol.ierator方法,原型中有next方法
console.log(iterator.next()) // {value: 1, done: false}  done => 是否还有值
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: undefined, done: true}

// 实现iterator接口
var obj = {
  [Symbol.iterator]: function () {
    return { // 需要返回一个对象,迭代器对象
      next: function () {
        return {
          value: 'abc',
          done: true
        }
      }
    }
  }
}
for (const item of obj) { // 这时候因为挂载了iterator接口 for...of循环不会再报错
  console.log(item) // 因为内容写死的原因，done为true，遍历不出内容, 写死为true则进入死循环
}

// 实现正常使用的iterator接口
var obj2 = {
  arr: ['a','b','c'],
  [Symbol.iterator]: function () {
    let i = 0
    return {
      next: () => {
        return {
          value: this.arr[i],
          done: this.arr.length < i++ // 千万注意这里的判断逻辑，否则会死循环
        }
      }
    }
  }
}
for (const item of obj2) {
  console.log(item) // a b c
}

// 迭代器模式  之所以这么做是为了统一遍历接口，而不用关心数据结构是什么类型
var todos = {
  life: ['吃饭', '睡觉', '玩游戏'],
  learn: ['语文', '数学'],
  work: ['音乐'],
  each: function (callback) { // 常规方法
    const allArr = [].concat(this.life, this.learn, this.work)
    for (const item of allArr) {
      callback(item)
    }
  },
  [Symbol.iterator]: function () {
    let index = 0
    const allArr = [...this.life, ...this.learn, ...this.work]
    return {
      next: () => {
        return {
          value: allArr[index],
          done: allArr.length < index++
        }
      }
    }
  }
}
todos.each(function (item) {
  console.log(item)
})
for (const item of todos) {
  console.log(item)
} 