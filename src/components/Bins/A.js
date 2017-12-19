import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class binsa extends Component {
    constructor(){
        super()
        this.state = {
            binsa:[]
        }
    }

    componentDidMount(){
        axios.get(' $this.props.match.params.bins'){
            this.setState({binsa:res.data})
        }
    }

    render() {
        return(
            <div>
               <Link to="add to bin1"> <h1>{this.props.match.params.bins}</h1></Link>


            </div>
        )
    }
}