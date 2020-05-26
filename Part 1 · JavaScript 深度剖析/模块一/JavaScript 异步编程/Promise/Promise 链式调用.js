/*
  Promise 链式调用
  1.then方法返回一个全新的Promise对象
  2.下一个then方法是上一个then方法返回的Promise对象的注册回调
  3.上一个then方法return的返回值作为下一个then方法的接收参数
  4.如果回调中返回的是Promise对象，后面then方法回调会等它执行完成才开始
*/

function fun1 () {
  return new Promise(function (resolve) {
    resolve(1000)
  })
}

function fun2 () {
  return new Promise(function (resolve) {
    setTimeout(function (){
      resolve('setTimeout end')
    }, 1500)
  })
}

function fun3 () {
  setTimeout(function () {
    console.log('fun3: setTimeout')
  }, 1500)
}

function fun4() {
  console.log(`fun4: strat`)
}

fun1()
  .then(function (value){ // then方法会返回一个全新的Promise对象
    console.log(`fun1: ${value}`)
    return fun2()  // 上一个then return的值会作为下一个then方法的参数
  })
  .then(function (value){ // 下一个then是上一个then方法返回的Promise对象的注册回调
    console.log(`fun2: ${value}`) // 如果会调用返回的是Promise，后面的then方法回调会等它结束
    return fun3()
  })
  .then(function () { // 因为fun3中不是Promise，所以后面的then方法直接执行，setTimeout还没结束
    console.log('fun3: end')
    return fun4()
  })
  .then(function () {
    console.log('fun4: end')
  })

/**
 * fun1: 1000
   fun2: setTimeout end
   fun3: end
   fun4: strat
   fun4: end
   fun3: setTimeout
 */