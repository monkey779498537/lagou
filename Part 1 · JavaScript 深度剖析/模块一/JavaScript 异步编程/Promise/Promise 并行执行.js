/*
 Promise.all([]) 参数以数组的形式并行执行里面的内容，直到所有的内容执行完成才回返回,执行顺序是按数组的排序来的
 Promise.race([]) 参数以数组形式并行执行里面的内容，第一个有返回结果的内容返回就完成回调，多用于接口请求超时控制
*/

function fun1 () {
  return new Promise(function(resolve, rejtect) {
    setTimeout(function () {
      resolve('fun1: sucess')
    }, 1500)
  })
}
function fun2 () {
  return new Promise(function(resolve, rejtect) {
    setTimeout(function () {
      resolve('fun2: sucess')
    }, 2500)
  })
}
function fun3 () {
  return new Promise(function(resolve, rejtect) {
    setTimeout(function () {
      resolve('fun3: sucess')
    }, 3500)
  })
}

// Promise.all([])
Promise.all([
  fun1(),
  fun2(),
  fun3()
]).then(value => {
  console.log('all: ' + value)
}).catch(err => {
  console.log(new Error(err))
})

// Promise.race([])
Promise.race([
  fun1(),
  fun3()
]).then(value => {
  console.log('race: ' + value)
}).catch(err => {
  console.log(new Error(err))
})