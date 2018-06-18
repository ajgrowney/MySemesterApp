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
                return (<p>{object.title}: {object.result}</p>)
            }else{
                return(<p>{object.title}: {object.date}</p>)
            }
        })
    }

    render(){
        let styling = {
            comp_style :{
                'height': this.percentage
            }
        }
        return(
            <div style={{height: this.percentage}} className="course-component">
                <h3 id='title'>{this.title}</h3>
                <h3 id='percentage'>{this.percentage}</h3>
                <div className="course-component-scores">
                    {this.loadScores()}
                </div>
            </div>
        )
    }
}

export const CourseComponent = CourseComponentObj;