//接口
// 关键词：interface
// 为对象明确具体的类型，约束对象内的所有成员
// 可选成员 ?
// 只读成员 readonly
// 动态成员 [prop:type]：valueType 比如：[prop:string]: string prop只是属性的名称变量，不是固定的，可以是任意的内容  type是prop的规定类型 valueType是动态属性的值的类型
export {}
function a(item:obj) {
  console.log(item.name)
  console.log(item.age)
}

interface obj { // 接口
  name: string
  age: number
  title?: string // 可选成员  实际上就是 string 或者 undefined
  readonly content: string // 只读成员，不可修改
}

a({
  name: 'HAHA',
  age: 19,
  content: 'readonly'
})

// 动态成员
interface b {
  [prop: string]: number   // 键值对  键为string类型  number为值的类型规定
}

const obj1: b = {}
// obj1.a = 'a' // 报错
obj1.b = 1 