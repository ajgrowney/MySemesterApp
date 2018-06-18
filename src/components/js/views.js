import React, { Component } from 'react'
import ProgressBar,{ Circle } from 'react-progressbar.js'
import '../css/views.css'
import { mySyllabus, myCourses } from '../data'
import { CourseComponent } from './course-components'

let sample = ["HW", "Final"];

class MainViewObj extends Component {
	constructor(props){
		super(props);
		this.viewType = this.props.view;
		this.object = this.props.params;
	}
	loadComponents(){
		let course_syllabus = mySyllabus.find( course => (course.id === this.object.id));
		return course_syllabus.components.map( comp => {
			return <CourseComponent component_type={comp} component_data={course_syllabus[comp]}/>
		})
	}

	loadViewType(view_in){

		if(this.viewType === 'course'){
			return(
				<div className= 'content-wrapper' id='content-wrapper'>
					<h1>{ this.object.displayString }</h1>
					<div className='content-components'>
						{this.loadComponents()}
					</div>
				</div>
			)
		}else if(this.viewType === 'term'){
			return(
				<h1>{ this.viewType } </h1>
			)
		}else{
			return(
				<h1>Year</h1>
			)
		}
	}
	loadRightSide(){
		return(
			<div id="content-overview" className= 'content-overview'>
				Insert Progress Bar Here
			</div>
		)
	}

	render(){
		return (
			<div id="sample" className='main-pane-container'>
				{this.loadViewType(this.viewType)}
				{this.loadRightSide()}
			</div>
		)
	}
}
export const MainView = MainViewObj;
