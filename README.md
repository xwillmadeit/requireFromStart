# requireFromStart
requirejs 学习

## define 和 require 的区别
define和require在依赖处理和回调执行上都是一样的，不一样的地方是define的回调函数需要有return语句返回模块对象，这样define定义的模块才能被其他模块引用；require的回调函数不需要return语句。

(如何使用define和require)[http://stackoverflow.com/questions/9507606/when-should-i-use-require-and-when-to-use-define]
