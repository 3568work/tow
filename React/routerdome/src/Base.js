import React, { Component } from 'react'
import "./Base.css"
import {Link,Route,withRouter} from "react-router-dom"
import Pe from "./Pe.js"
import Jun from "./Jun.js"
import Home from "./Home.js"
import Play from "./Play.js"
import Food from "./Food.js"
export class Base extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            
       }
       this.toHome=this.toHome.bind(this);
   }
   toHome(){
    this.props.history.push("/")
   }
    render() {
        return (
            <div className="base">
                
                <header className="one">
                    <h1>要看TV</h1>
                    <ul>
                        <li>
                            <button onClick={this.toHome}>首页</button>
                        </li>
                        <li>
                            <Link to="/pe">国产精选</Link>
                        </li>
                        <li>
                            <Link to="/jun">醉酒迷奸</Link>
                        </li>
                        <li>
                            <Link to="/food">日韩无码</Link>
                        </li>
                        <li>
                            <Link to="/play">童颜巨乳</Link>
                        </li>
                    </ul>
                </header>
                <section>
                <Route path="/" exact component={Home}/>
                <Route path="/pe" component={Pe}/>
                <Route path="/jun" component={Jun}/>
                <Route path="/food" component={Food}/>
                <Route path="/play" component={Play}/>
                <p>我们立足于美利坚共和国，受美利坚共和国保护，18岁以下禁止访问该网站！！！</p>
                </section>
            </div>
        )
    }
}

export default withRouter(Base)
