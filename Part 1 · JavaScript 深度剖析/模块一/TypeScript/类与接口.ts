// 公共的特征，用接口去抽象化
export {}

// 接口
interface each { // 约束方法的类型，不做具体方法的实现
  each(food:string): void
}

interface run {
  run (distance: string): void
}

class Person implements each, run { // 按照接口规定要求一定要有对应的成员
  each (food: string): void {
    console.log(`优雅的吃${food}`)
  }
  run(distance: string) {
    console.log(`直立行走: ${distance}`)
  }
}

class Animal implements each, run {
  each (food:string): void {
    console.log(`呼噜噜的吃${food}`)
  }
  run(distance:string) {
    console.log(`爬行：${distance}`)
  }
}