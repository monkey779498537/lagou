/*
  Reflect 统一的对象操作API
  属于静态类：不能通过new Reflect()构建实力对象，只能调用静态类中的静态方法,比如：Reflect.get()
*/
var person = {
  name: 'fangfang',
  age: 29
}

// ES5中操作对象的方法
// console.log('name' in person)  // true
// console.log(delete person.name) // true
// console.log(Object.keys(person))

// Reflect 通过统一的方法调用
console.log(Reflect.has(person, 'name'))
console.log(Reflect.deleteProperty(person, 'name'))
console.log(Reflect.ownKeys(person))