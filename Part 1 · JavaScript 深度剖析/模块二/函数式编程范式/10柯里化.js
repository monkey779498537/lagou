// 柯里化:
//  当一个函数有多个参数时，先传递一部分参数调用它(这部分参数以后永远不变);
//  然后返回一个新的函数接收剩余参数，返回结果

// 纯函数
// function checkAge(age, min) {
//   return age > min
// }

// 柯里化过程改造checkAge函数
// function checkAge (min) {
//   return function (age) { // 返回一个新的函数
//     return age > min
//   }
// }

// es6 写法
let checkAge = min => (age => age > min)

var res18 = checkAge(18)
var res19 = checkAge(19)
console.log(res18(20))
console.log(res19(20))

// 柯里化总结：
/** 
 * 1.（核心）：柯里化可以让我们给一个函数较少的参数得到一个已经记住部分固定参数的新函数   （使用闭包返回一个新函数，这个新函数可以后续固定下来为一个新的方法，比如上面的 res18）；
 * 2.返回的新函数确定化，相当于给一个函数参数的‘缓存’   （后续使用这个心函数无须再制定某个函数）；
 * 3.让函数更加灵活，颗粒度更小；
 * 4.可以把多元函数转换成一元函数，以组合使用函数产生更强大的功能    （一元、多元  --》参数的多少）
*/