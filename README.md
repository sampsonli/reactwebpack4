### 背景
>开发过react+redux 的同学都知道， 定义一个操作 通常是要先定义一个action，然后定义action-type,最后定义reduce， 分布在几个文件中， 
而且这种操作模式可读性不强，最重要的是如果我要定义一个action， 我要同时改三个文件. 随着项目的不断增大，
 action-type会越来越多， 名字空间也不好管理； 当我访问一个页面的时候， 其实我并不需要加载所有actions,reducers，action-type等等资源， 
 最后就是开发阶段不好做热更新， 每次更新都会刷新页面， 开发体验也不好
  
>面对以上这么多问题， 通过查阅各种资料， 在原有react-redux基础上进行了封装， 整理成了一份通用脚手架， 专门用于解决以上问题
相关资料
[react_deliverer](https://github.com/sampsonli/react_deliverer)
