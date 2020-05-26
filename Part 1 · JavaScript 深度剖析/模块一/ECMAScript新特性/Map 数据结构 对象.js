/*
  Map 数据结构
  与传统的对象类似
  区别在于：
    传统对象的键都是字符串String类型，而Map可以是任意的，比如对象/布尔值作为键
*/

// 传统类型
var obj = {}
obj['a'] = 'a'
obj[true] = 'true'
obj[{name:'name'}] = 'name1'
console.log(obj) // {'a':'a', 'true':'true', '[object Object]': 'name1'}

// Map类型
var mapObj = new Map()
var oldObj = { name: 'oldObj' }
mapObj.set('age', 29)
mapObj.set(oldObj, 'mapObj')
mapObj.set(true, 'HAHAHA')
mapObj.get('age') // 29
mapObj.get(6>5) // HAHAHA