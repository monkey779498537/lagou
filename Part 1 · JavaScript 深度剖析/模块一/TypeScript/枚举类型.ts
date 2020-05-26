// enum 枚举数据结构
//特点：1.给一组数值起一个更好理解的名字；2.一个枚举中只会出现固定的几个值，限制超出范围；
// 枚举的值会入侵到运行时的代码中：会影响编译之后的结果，编译后不会被移除,使用常亮枚举可以解决这个问题


export {} // 确保和其他文件变量不起冲突

enum status {
  isShow = 0,
  isHied = 1
}

// 不给定具体的值，默认是从0开始
enum status2 {
  isShow,
  isHied
}

// 常量枚举
const enum status3 {
  isShow,
  isHied
}


const post = {
  title: 'Hello TypeScript!',
  content: 'haha TypeScript',
  status: status.isShow
}