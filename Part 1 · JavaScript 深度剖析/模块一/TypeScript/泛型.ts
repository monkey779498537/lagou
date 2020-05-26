// 函数在定义时不能明确的类型，用传参的方式来动态定义

export {}
function creatArr<T> (length: number, value: T): T[] { // T 传参的形式动态定义类型    T[] ->函数的返回类型规定
  return Array<T>(length).fill(value)
}

creatArr<string>(3, 'asd')
creatArr<number>(4, 5)