// pointFree：把数据处理过程定义成与数据无关的合成运算，不需要用到代表数据的参数，只需把简单的运算步骤合成到一起，在使用这种模式之前我们需要定义一些辅助的基本运算函数。
//  1.不需要指明处理的数据
//  2.只需要合成运算过程
//  3.需要定义一些辅助的基本运算函数

const fp = require('lodash/fp')

const r = (e) => {
  console.log(e)
}

// world wild web ===> W. W. W.
const firstStr = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))
console.log(firstStr('world wild web'))