import React, { Component } from 'react'
import '../css/term-components.css'


class TermComponentObj extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            grade: props.grade
            //percentage: props.component_data.percentage,
            //comp_data: props.component_data.scores
        }

    }
    
    componentWillReceiveProps(newProps){
        this.setState({
            title: newProps.text,
            grade: newProps.grade
            //percentage: newProps.component_data.percentage,
            //comp_data: newProps.component_data.scores
        });
    }

    render(){
        return(
            <div className="term-component">
                <div id='title'>{this.state.text}</div>
                <center><div id='grade'>{this.state.grade}</div></center>
            </div>
        )
    }
}

export const TermComponent = TermComponentObj;