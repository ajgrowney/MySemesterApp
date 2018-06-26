import React from 'react';
import { TermComponent } from '../term-components'
import { mySyllabus } from '../../data'

function term_loadComponents(input, courseList){
    console.log(input)
    return courseList.map( course => {
        if(input["year"] === course["year"] && input["term"] === course["term"]){

            let course_syllabus = mySyllabus.find( syllabus => syllabus.id === course.id);
            let averages = course_syllabus.components.reduce((total, object) => {
                let running = 0;
                let counter = 0;
                course_syllabus[object].scores.forEach((obj) => {
                    if (obj.result !== undefined) { running += obj.result; counter++; }
                });
                let avg_result = running / counter;
                let avg_object = { [object]: avg_result }
                total.push(avg_object);
                return total;
            }, []);
            console.log(averages);
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

            return (<TermComponent text={course.displayString} grade = {totalGrade}/>);
        }
    });
}
export const termHelpers = {
    loadComponents: term_loadComponents
}