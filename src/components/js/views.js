import React, { Component } from 'react'
import '../css/views.css'
import { mySyllabus, myCourses } from '../data'
import { CourseComponent } from './course-components'
import { Circle } from 'rc-progress'

let sample = ["HW", "Final"];

class MainViewObj extends Component {
	constructor(props){
		super(props);
		this.viewType = this.props.view;
		this.object = this.props.params;
		this.course_syllabus = mySyllabus.find( course => (course.id === this.object.id));
	}
	loadComponents(){
		return this.course_syllabus.components.map( comp => {
			return <CourseComponent component_type={comp} component_data={this.course_syllabus[comp]}/>
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

	loadAverages(){
		let averages = [];
		this.course_syllabus.components.map( comp => {

			let scores_array = this.course_syllabus[comp].scores;

			if(scores_array !== undefined || scores_array.length !==0){
				let avg_sum = 0;
				let avg_counter = 0;
				console.log(scores_array);
				scores_array.forEach(element => {

					if(element.result !== undefined){
						avg_sum = avg_sum + element.result;
						avg_counter++;
					}

				});
				let avg_result = avg_sum / avg_counter;
				let avg_object = {}
				avg_object[comp] = avg_result;
				averages.push(avg_object);
			}
		})
		return averages.map( key => {
			let selected_key = (Object.keys(key)[0]);
			let calculated_avg = key[selected_key] || 'n/a';
			return (
				<center>
					<div className='average-container'>
						{selected_key} Average: {calculated_avg}
					</div>
				</center>
			)
		})
	}
	loadRightSide(){


		return(
			<div id="content-overview" className= 'content-overview'>
				<Circle percent='83' strokeWidth='3' strokeColor='#000000' />
				{this.loadAverages()}
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
