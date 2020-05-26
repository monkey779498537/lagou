// 断言
// 关键字： as
// 尖括号: <type>

export {}

const arr = [1,23,4,5]

const res = arr.find( i => i > 0) // 此时res为 number 或者 undefined

const square = res * res  

// 使用断言，明确告知类型,不转换其类型

const num1 = res as number

const num2 = <number>res