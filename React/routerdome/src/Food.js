import React, { Component } from 'react'
import "./Food.css"
import {Link,Route,withRouter} from "react-router-dom"
export class Food extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="food">
                <h1>在线预览</h1>
                <div>
                    <Link to="/food">韩国</Link>
                </div>

            </div>
        )
    }
}

export default Food
