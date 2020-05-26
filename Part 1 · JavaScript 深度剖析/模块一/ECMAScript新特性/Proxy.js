/*
  Proxy 代理
  修改代理对象监听
*/
var person = {
  name: 'fangfang',
  age: 29
}
var personProxy = new Proxy(person, {
  get: function (target, property) { // targer ->代理对象   property -> 属性名称
    console.log(`target: ${target},property: ${property}`)
    return property in target ? target[property] : 'default'
  },
  set:function (target, property, value){
    console.log(`target: ${target},property: ${property}, value: ${value}`)
    if (property === 'age') {
      if (!Number(value)) {
        throw new TypeError(`${property} is no an int`)
      }
    }
    target[property] = value
  }
})
personProxy.age = 1