import React, {Component} from 'react';
import './App.css';
const shelves =[
 {
    id:1,
    name:'A'
},
 {
    id:2,
    name:'B'
},
 {
    id:3,
    name:'C'
},
 {
    id:4,
    name:'D'
}
]



class Header extends Component{
    constructor(){
        super()
        this.state={
            shelves: []
        }
    }

    componentDidMount({
        setTimeout(( => {
            this.setState
        }))
    })
        render(){
        return(
         <div>
             {this.state.shelves.map((e) => <div>Shelf{e.name}</div>)}
         </div>
        )
    }
}