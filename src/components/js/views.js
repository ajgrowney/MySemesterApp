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
			view: props.view || 'default',
			object: mySyllabus.find(course => (course.id ===props.params.id)) || 0
		}
		if(this.state.view === 'course'){
			this.course_syllabus = mySyllabus.find( course => (course.id === this.state.object.id));
		}
	}
	componentWillReceiveProps(newProps){
		this.setState({
			view: newProps.view,
			object: mySyllabus.find( course => (course.id === newProps.params))
		});


	}
	loadComponents(){
		return this.state.object.components.map( comp => {
			return <CourseComponent component_type={comp} component_data={this.state.object[comp]}/>
		})
	}

	loadLeftSide(view_in){
		if(view_in === 'course'){
			return(
				<div id='main-course' className= 'main-left'>
					<h2 id="course-display-string">{ myCourses.find( course => this.state.object.id === course.id).displayString || 'eggs' }</h2>
					<div className='main-left-components'>{this.loadComponents()}</div>
				</div>
			)
		}else if(view_in === 'term'){
			return(
				<div id='main-term' className='main-left'>
					<h2>{ this.state.object.displayString }</h2>
					<div className='main-left-components'>Here</div>
				</div>
			)
		}else{
			return(
				<div id='main-year' className='main-left'>
					<h2>{this.state.object.displayString}</h2>
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
					<div className="content-averages">{course_loadAverages(averages, this.state.object)}</div>
					{course_loadProgress(averages, this.state.object)}
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
