import React, { Component } from 'react'
// Internal Dependencies
import '../css/views.css'
import { mySyllabus, myCourses } from '../data'
import { course_loadProgress, course_loadAverages } from './helpers/courseViewHelpers'
// Components
import { CourseComponent } from './course-components'


class MainViewObj extends Component {
	constructor(props){
		super(props);
		this.state = {
			view: props.view || 'default'
		}
		this.object = this.props.params;
		if(this.state.view === 'course'){
			this.course_syllabus = mySyllabus.find( course => (course.id === this.object.id));
		}
	}
	loadComponents(){
		return this.course_syllabus.components.map( comp => {
			return <CourseComponent component_type={comp} component_data={this.course_syllabus[comp]}/>
		})
	}

	loadLeftSide(view_in){
		if(view_in === 'course'){
			return(
				<div id='main-course' className= 'main-left'>
					<h2 id="course-display-string">{ this.object.displayString }</h2>
					<div className='main-left-components'>{this.loadComponents()}</div>
				</div>
			)
		}else if(view_in === 'term'){
			return(
				<div id='main-term' className='main-left'>
					<h2>{ this.object.displayString }</h2>
					<div className='main-left-components'>Here</div>
				</div>
			)
		}else{
			return(
				<div id='main-year' className='main-left'>
					<h2>{this.object.displayString}</h2>
					<div className='main-left-components'>Here</div>
				</div>
			)
		}
	}

	loadRightSide(view_in){
		if(view_in === 'course'){
			let averages = [];
			return(
				<div className= 'main-right'>
					<div className="content-averages">{course_loadAverages(averages, this.course_syllabus)}</div>
					{course_loadProgress(averages, this.course_syllabus)}
				</div>
			)
		}else if(view_in === 'term'){
			return(
				<p>Term</p>
			)
		}else{
			return(
				<p>Year</p>
			)
		}
	}

	render(){
		return (
			<div className='main-pane-container'>
				{this.loadLeftSide(this.state.view)}
				{this.loadRightSide(this.state.view)}
			</div>
		)
	}
}
export const MainView = MainViewObj;
