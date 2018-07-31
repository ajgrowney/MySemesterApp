import React, { Component } from 'react'
// Internal Dependencies
import '../css/views.css'
import { myCourses } from '../data'
import { courseHelpers } from './helpers/courseViewHelpers'
import { termHelpers } from './helpers/termViewHelpers'

/**
 * @param { String } view: type of view to be rendered
 * @param { Object } params: object passed in to be rendered
 * @param { String } display: title of a course/term to be rendered
 */

class MainViewObj extends Component {
	constructor(props){
		super(props);
		this.state = {
			view: props.view,
			display: props.display,
			object: props.params
		}
	}
	componentWillReceiveProps(newProps){
		this.setState({
			view: newProps.view,
			display: newProps.display,
			object: newProps.params
		});
	}

	loadLeftSide(view_in){
		if(view_in === 'course'){
			return(
				<div id='left-course' className= 'main-left'>
					<h2 id="course-display-string">{ this.state.display}</h2>
					<div className='main-left-components'>{courseHelpers.loadComponents(this.state.object) }</div>
				</div>
			)
		}else if(view_in === 'term'){

			return(
				<div id='left-term' className='main-left'>
					<h2>{ this.state.display }</h2>
					<div className='main-left-components'>{termHelpers.loadComponents(this.state.object, myCourses)}</div>
				</div>
			)
		}else{
			return(
				<div id='left-year' className='main-left'>
					<h2>{this.state.display}</h2>
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
				<div id='right-term' className='main-right'>
					{termHelpers.loadProgress(this.state.object)}
				</div>
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
