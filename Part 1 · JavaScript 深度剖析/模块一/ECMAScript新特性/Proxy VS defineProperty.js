/*
  Proxy 代理
  1.能监视到更多的对象操作  比如 delete
  2.更好的支持数组对象的监视
  3.非侵入的方式监管对象读写
  defineProperty 代理
*/
var person = {
  name: 'fangfang',
  age: 29
}
var personProxy = new Proxy(person, {
  deleteProperty: function (target, perproty) {
    return delete target[perproty]
  }
})
delete personProxy.age

var list = []
var listProxy = new Proxy(list, {
  set: function (target, perproty, value) {
   console.log(`perproty: ${perproty}, value: ${value}`)
   return  target[perproty] = value // 此处不return会报错
  }
})
listProxy.push(1)