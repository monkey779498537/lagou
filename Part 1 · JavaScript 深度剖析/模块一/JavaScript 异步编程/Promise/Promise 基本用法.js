/*
  Promise 基本用法
  resolve , reject 两个参数,不可逆
  resolve 成功
  rejcet 失败
*/
var promise = new Promise(function (resolve, reject) {
  // resolve(100)
  reject(new Error(200))
})

promise.then(function(value) {
  console.log(value)
},function (err) {
  console.log(err)
})