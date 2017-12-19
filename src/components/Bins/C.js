import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class binsa extends Component {
    constructor(){
        super()
        this.state = {
            binsb:[]
        }
    }

    componentDidMount(){
        axios.get(' $this.props.match.params.bins'){
            this.setState({binsb:res.data})
        }
    }

    render() {
        return(
            <div>
               <Link to="add to bin2"> <h1>{this.props.match.params.binsb}</h1></Link>


            </div>
        )
    }
}