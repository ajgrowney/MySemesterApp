import React, { Component } from 'react'
import '../css/views.css'
import { mySyllabus, myCourses } from '../data'
import { CourseComponent } from './course-components'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class MainViewObj extends Component {
	constructor(props){
		super(props);
		this.viewType = this.props.view;
		this.object = this.props.params;
		if(this.viewType === 'course'){
			this.course_syllabus = mySyllabus.find( course => (course.id === this.object.id));
		}
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
					<h2 id="course-display-string">{ this.object.displayString }</h2>
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
	loadProgress(averages){
		console.log(averages);
		let totalGrade = 0;
		let totalPercentage = 0;
		averages.map(element => {
			let selected_key = (Object.keys(element)[0]);
			let course_comp_percentage = parseFloat(this.course_syllabus[selected_key].percentage) / 100.0;
			if(!isNaN(element[selected_key])){
				console.log(element[selected_key])
				totalPercentage += course_comp_percentage;
				totalGrade += element[selected_key]*course_comp_percentage;
			}else{
				console.log('NaN')
			}
			console.log(course_comp_percentage);
		})
		console.log(totalPercentage);
		totalGrade = Math.round(((totalGrade/ totalPercentage) * 10) / 10);
		
		console.log(totalGrade);
		return(<CircularProgressbar className="progress-bar" percentage={parseInt(totalGrade)} styles={{path: {stroke: 'black'}}}/>)
	}
	loadAverages(averages){

		this.course_syllabus.components.reduce( (total, object) => {
			let running = 0;
			let counter = 0;
			this.course_syllabus[object].scores.forEach( (obj) => {
				if(obj.result !== undefined){running += obj.result; counter++;}
			});
			let avg_result = running / counter;
			let avg_object = {[object]: avg_result}
			averages.push(avg_object);
		}, []);

		return averages.map( key => {
			// Averages = [{selected_key: calculated_avg}, ...]
			let selected_key = (Object.keys(key)[0]);
			let calculated_avg = key[selected_key] || 'n/a';

			return (
				<center>
					<div className='average-container'>
						<div className='average-event'>{selected_key} Average:</div>
						<div className='average-result'>{calculated_avg}</div>
					</div>
				</center>
			)
		})
	}
	loadRightSide(){
		let averages = [];
		return(
			<div id="content-overview" className= 'content-overview'>
				<div className="content-averages">
					{this.loadAverages(averages)}
				</div>
				{console.log(averages)}
				{this.loadProgress(averages)}
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
