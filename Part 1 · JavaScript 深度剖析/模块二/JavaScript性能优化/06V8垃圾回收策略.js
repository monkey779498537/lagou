// V8垃圾回收策略

// 采用分代回收的思想
  // 内存分为新生代和老生代
  // 针对不同对象采用不同算法

// V8常见的GC算法：
  // 分代回收
  // 空间复制
  // 标记清除
  // 标记整理
  // 标记增量

// ---------------------------回收新生代对象-----------------------------------------------------------

// 回收新生代对象   新生代：存活时间较短的对象，比如局部作用域中的变量，在执行完之后就回收掉了
  // V8内存空间一分为二，一侧为新生代空间，一侧为老生代空间
  // 小空间用于存储新生代对象（ 32M（64位） | 16M（32位））

// 新生代对象回收实现
  // 回收过程采用复制算法 + 标记整理
  // 新生代内存空间也化为两个等大的小空间（from --》使用空间 和 to --》 空闲空间）
  // 活动对象存储在From空间
  // 标记整理后将活动对象拷贝至空闲空间to
  // From 与 To交换空间完成释放

// 回收细节说明：
  // 拷贝过程可能出现晋升
  // 晋升就是将新生代对象转移至老生代
  // 一轮GC还存活的新生代需要晋升
  // To空间的使用率超过25%，需要晋升
  
// -------------------------回收老生代对象-------------------------------------------------------------
// 老生代对象说明
  // 内存空间：64位 1.4G  32位 700M
  // 存活时间较长的对象  比如全局环境中所存放的变量、闭包所放置的变量数据

// 老生代对象回收实现：
  // 主要采用标记清除、标记整理、增量标记计算法
  // 首先使用标记清除完成垃圾空间回收
  // 将新生代空间转移至老生代空间晋升时，会触发标记整理进行空间优化
  // 采用增量标记进行效率化优化

// 细节对比：
  // 新生代区域垃圾回收使用复制算法，空间换时间，空间小
  // 老生代区域垃圾回收不适合复制算法，空间大会浪费空间

// 注意：当垃圾进行回收时时，会阻塞JS程序的运行
// 标记增量：JS程序与垃圾回收机制交替执行  