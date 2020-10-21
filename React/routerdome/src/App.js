
import React, { Component } from 'react'
import Base from "./Base";
import {BrowserRouter} from "react-router-dom"
// React 路由中的知识点
// 所需的模块 react-router-dom模块
// 1.安装 react-router-dom 模块
// 2.BrowserRouter 组件，这是所有router路由的借口实现，所有的与路由有关的模块，组件，这都需要被该组件包裹才可以实现效果
// 3.Router 组件 路由的展示组件，渲染出口
// path属性：字符串，用来匹配路由的
// component属性：当匹配上的对应的路由时徐亚奥显示的组件
// exact属性：指明该路由是否排他
// 4.Link组件：路由切换组件，类似于Vue中的router-link，负责切换路由；
// to属性：表示需要跳转的路由
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
        <BrowserRouter>
        <Base />
        </BrowserRouter>
    )
  }
}

export default App
