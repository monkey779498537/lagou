export {} // 确保和其他成员的变量没有冲突
function fun1 (a: number,b: number):string {
  return 'foo'
}

// fun1(1)

fun1(1, 2)

// fun1(1, a)