import React, { Component } from 'react'
import '../css/course-components.css'


class CourseComponentObj extends Component {
    constructor(props){
        super(props);
        this.title= this.props.component_type || 'Exams';
        this.percentage = this.props.component_data.percentage || 'undef%';
        this.comp_data = this.props.component_data.scores || [{'no': 1}];
    }

    loadScores(){
        return this.comp_data.map( object => {
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
            <div style={{height: this.percentage}} className="course-component">
                <div id='title'>{this.title}</div>
                <div id='percentage'>{this.percentage}</div>
                {this.loadScores()}
            </div>
        )
    }
}

export const CourseComponent = CourseComponentObj;