import React, { Component } from 'react'
import '../css/term-components.css'

/** Components on the left side of the main view object in term view 
 *  @param { String } text the title of the class (ex: EECS 662) 
 *  @param { Number } grade current grade of the class (ex: 83)
 *  @param { Number } creditHours number of credit hours of the course
 */
class TermComponentObj extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
            grade: props.grade,
            hours: props.creditHours
        }

    }
    
    componentWillReceiveProps(newProps){
        this.setState({
            title: newProps.text,
            grade: newProps.grade,
            hours: newProps.creditHours
        });
    }

    render(){
        return(
            <div className="term-component">
                <div id='title'>{this.state.text} ({this.state.hours})</div>
                <center><div id='grade'>{this.state.grade}</div></center>
            </div>
        )
    }
}

export const TermComponent = TermComponentObj;