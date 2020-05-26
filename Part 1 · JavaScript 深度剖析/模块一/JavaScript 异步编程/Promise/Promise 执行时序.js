/*
  宏任务：需要进入到回调队列中排队执行
  微任务：当前任务结束后立即执行
*/

console.log('strat')

setTimeout(() => {
  console.log('宏任务执行完成')
}, 0)

Promise.resolve()
  .then(() => {
    console.log('微任务执行成')
  })
  .then(() => {
    console.log('微任务执行成 2')
  })
  .then(() => {
    console.log('微任务执行成 3')
  })

console.log('end')