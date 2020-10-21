
import './App.css';
import React, { Component } from 'react'
// Redux是JavaScript状态容器;提供可预测化的状态管理;
// 首先明确一点，Redux是-一个可用的数据及交互架构，对于一个项
// 目本身而言，并不是非得使用;大多数情况下，只需要React中的组件
// 即可(组件本身提供的数据源及方法) ;
// 以下情况，不需要使用Redux:
// 1.用户的使用方式非常简单;
// 2.用户之间没有协作;
// 3.不需要与服务器大量交互;也没有使用webSocket;
// 4.视图层(View)只从单--来源获取数据;
// 以下情况，可以考虑使用Redux:
// 1.用户的使用方式复杂;
// 2.不同身份的用户有不同的使用方式-权限(比如说普通用户和vip
//   用户)
// 3.多个用户之间可以协作-共享内容;
// 4.大量的和服务器交互(网络请求多次触发)
// 5. View视图从多个来源获取数据;
// 从组件角度-开发者的角度-代码-如果有以下场景，推荐使用Redux;
// 1.某个组件的状态，需要共享;
//2.某个组件不管在任何时机下，都可以获取值;
//3.某个组件需要改变全局状态;
//4.某个组件需要改变另一个组建的状态：
//Redux里的三大核心模块
//1.Store: 是个对象，整个Redux应用的数据都存储到store对象里;
// 2. Action:是个对象，必须包含type属性，- -个action描述一种
// 处理模式，Reducer 会根据action对象的type值，决定如何对数据做处理;
// 3. Reducer: 是个纯函数，接收两个参数，要修改的state对象和
// action对象，根据action. type值决定如何处理数据，并返回新的数据;
import Store from "./redux/stores/store"
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    return (
      <div>
        <h1>榖</h1>
      </div>
    )
  }
}

export default App

