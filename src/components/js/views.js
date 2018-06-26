import React, { Component } from 'react'
// Internal Dependencies
import '../css/views.css'
import { mySyllabus, myCourses, mySemesters } from '../data'
import { courseHelpers } from './helpers/courseViewHelpers'
import { termHelpers } from './helpers/termViewHelpers'



class MainViewObj extends Component {
	constructor(props){
		super(props);
		this.state = {
			view: props.view || 'default',
		}
		if(this.state.view === 'course'){
			this.state.object = mySyllabus.find( course => (course.id === props.params.id)) || 0;
		}else if(this.state.view === 'term'){
			console.log('Term view');
			this.state.object = mySemesters.find( sem => (sem.displayString === 'Fall 2017'));
		}
	}
	componentWillReceiveProps(newProps){
		this.setState({
			view: newProps.view
		});
		if(newProps.view === 'course'){
			this.setState({object: mySyllabus.find( course => (course.id === newProps.params)) || 0});
		}else if(newProps.view === 'term'){
			this.setState({object: mySemesters.find( sem => (sem.displayString === newProps.params))});
		}
	}

	loadLeftSide(view_in){
		if(view_in === 'course'){
			return(
				<div id='left-course' className= 'main-left'>
					<h2 id="course-display-string">{ myCourses.find( course => this.state.object.id === course.id).displayString || 'eggs' }</h2>
					<div className='main-left-components'>{courseHelpers.loadComponents(this.state.object) }</div>
				</div>
			)
		}else if(view_in === 'term'){

			return(
				<div id='left-term' className='main-left'>
					<h2>{ this.state.object.displayString }</h2>
					<div className='main-left-components'>{termHelpers.loadComponents(this.state.object, myCourses)}</div>
				</div>
			)
		}else{
			return(
				<div id='left-year' className='main-left'>
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
				<div id='right-course' className= 'main-right'>
					<div className="content-averages">{courseHelpers.loadAverages(averages, this.state.object)}</div>
					{courseHelpers.loadProgress(averages, this.state.object)}
				</div>
			)
		}else if(view_in === 'term'){
			return(
				<div id='right-term' className='main-right'>Term</div>
			)
		}else{
			return(
				<div id='right-year' className='main-right'>Year</div>
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
