/*
  Symbol 一种全新的数据类型
  给对象添加独一无二的属性名
  ES5中对象的属性名都是字符串类型，有可能导致重复，比如使用第三方插件进行对象方法扩展时，有可能会覆盖原有属性
  在定义对象私有成员时比较方便好用
*/

console.log(Symbol('a') === Symbol('a')) // false

console.log(Symbol('foo')) // Symbol(foo)

var obj = {
  [Symbol()]: 'objS'
}  // Object {Symbol(): "objS"}

// 私有成员的使用,外界无法进行修改
var name = Symbol()
var fun = {
  [name]: 'fang',
  say: function () {
    return this[name]
  }
}
fun.say() // fang

// Symbol内置的方法for  把参数字符串和Symbol值一一对应起来，参数会默认转换成String类型
Symbol.for(true) === Symbol.for('true') // true

// Symbol的值无法通过for in / Object.keys / JSON.stringify获取到
var obj2 = {
  [Symbol()]: 'objSymbol',
  name: 'name'
}
for (var item in obj2) {
  console.log(item) // name
}
console.log(Object.keys(obj2)) // ['name']
console.log(JSON.stringify(obj2)) // {'name': 'name'}
console.log(Object.getOwnPropertySymbols(obj2)) // [Symbol()]  只能通过Object.getOwnPropertySymbols()方法获取