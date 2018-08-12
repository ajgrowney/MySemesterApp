import React, { Component } from 'react'
import '../css/course-components.css'

/** Single course object within the left side of main commponent in court view
 * @param { Object } component_data contains scores array and percentage number
 * @param { String } component_type contains the title to be displayed
 */

class CourseComponentObj extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.component_type,
            percentage: props.component_data.percentage,
            comp_data: props.component_data.scores
        }

    }
    
    componentWillReceiveProps(newProps){
        this.setState({
            title: newProps.component_type,
            percentage: newProps.component_data.percentage,
            comp_data: newProps.component_data.scores
        });
    }

    loadScores(){
        return this.state.comp_data.map( object => {
            if(object.result !== undefined){
                return (
                    <div className='course-event'>
                        <div className='course-item'>{object.title}:</div>
                        <div className='course-result'>{object.result}</div>
                    </div>
                    )
            }else{
                return (
                    <div className='course-event'>
                        <div className='course-item'>{object.title}:</div>
                        <div className='course-upcoming'>{object.date}</div>
                    </div>
                )
            }
        })
    }

    render(){
        return(
            <div style={{height: this.state.percentage, fontSize: this.state.percentage*10}} className="course-component">
                <div id='title'>{this.state.title}</div><div id='percentage'>{this.state.percentage}</div>
                {this.loadScores()}
            </div>
        )
    }
}

export const CourseComponent = CourseComponentObj;