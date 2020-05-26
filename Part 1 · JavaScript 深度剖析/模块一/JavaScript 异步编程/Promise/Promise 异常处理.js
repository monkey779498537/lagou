/*
  Promise 异常处理
  catch 捕获到错误就触发
*/

function fun0 () {
  return new Promise(function (resolve, reject) {
    resolve('fun0: success')
  })
}

function fun1 () {
  return new Promise(function (resolve, reject){
    reject('fun1: err')
  })
}
function fun2 () {
  return new Promise(function (resolve, reject) {
    resolve('fun2: success')
  })
}

fun0()
  .then(function (res) {
    console.log(res)
    return fun1()
  })
  .then(function(res){
    console.log(res)
    return fun2()
  })
  .then(function(res) {
    console.log(res)
  })
  .catch(function(err){ // 捕获到fun1错误直接就触发,不再执行后面的then
    console.log(new Error(err))
  })

  /**
   * fun0: success
     Error: fun1: err
   */