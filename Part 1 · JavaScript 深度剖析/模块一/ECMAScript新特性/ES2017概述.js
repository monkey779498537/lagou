/*
  ES2017概述
*/

// Object.getOwnPropertyDescriptors：获取对象属性完整的描述信息  主要配合ES5的 get set来使用------------------------
var person = {
  firstName: 'Liu',
  lastName: 'Ai',
  get fullName () { // 不是一个方式，只是一种属性
    return `${this.firstName}  ${this.lastName}`
  }
}
var student = Object.assign({}, person)  // 这个无法完全复制对象属性
student.firstName = 'Hu' // Object {firstName: "Hu", lastName: "Ai", fullName: "Liu  Ai"}
student.fullName // Liu  Ai 加()会报错  this.firstName 未被改变

var descriptor = Object.getOwnPropertyDescriptors(person) // 获取person的完整属性
var student2 = Object.defineProperties(descriptor)
student2.firstName = 'Xin'
student2.fullName
