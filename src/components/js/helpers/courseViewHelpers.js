import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Components
import { CourseComponent } from '../course-components'

let course_loadComponents = (object_in) => {
    return object_in.components.map(comp => <CourseComponent component_type={comp} component_data={object_in[comp]}/>)
        .sort((a,b) => parseInt(a.props.component_data.percentage) >= parseInt(b.props.component_data.percentage) ? -1 : 1);
}

let course_loadProgress = (averages, course_syllabus) => {
    let totalGrade = 0;
    let totalPercentage = 0;
    averages.map(element => {
        let selected_key = (Object.keys(element)[0]);
        let course_comp_percentage = parseFloat(course_syllabus[selected_key].percentage) / 100.0;
        if (!isNaN(element[selected_key])) {
            totalPercentage += course_comp_percentage;
            totalGrade += element[selected_key] * course_comp_percentage;
        }
    })
    totalGrade = Math.round(((totalGrade / totalPercentage) * 10) / 10);

    return (<CircularProgressbar className="progress-bar" percentage={parseInt(totalGrade)} styles={{ path: { stroke: 'black' } }} />)
}

/*
*
*/
let course_loadAverages = (averages, course_syllabus) => {

    course_syllabus.components.forEach( (object) => {
        let running = 0;
        let counter = 0;
        course_syllabus[object].scores.forEach((obj) => {
            if (obj.result !== undefined) { running += obj.result; counter++; }
        });
        let avg_result = running / counter;
        let avg_object = { [object]: avg_result }
        averages.push(avg_object);
    });

    return averages.map(key => {
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

export const courseHelpers = {
    loadAverages: course_loadAverages,
    loadProgress: course_loadProgress,
    loadComponents: course_loadComponents
}