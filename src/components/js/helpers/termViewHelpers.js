import React from 'react';
import { TermComponent } from '../term-components'
import calculateAverage from "./averages"

function term_loadComponents(input, courseList){
    console.log(input)
    return courseList.map( course => {
        if(input["year"] === course["year"] && input["term"] === course["term"]){
            let totalGrade = calculateAverage(course);
            return (<TermComponent text={course.displayString} grade = {totalGrade}/>);
        }
    });
}

function term_loadProgress(courseList){
    let loadGpaBlocks = () => {
        return ["1.0", "2.0", "3.0", "4.0"].map((element) => { return(<div className='progress-scale'>{element}</div>)})
    }
    let loadProgressBlocks = (courseList) => {
        let arr = [];
        for(let i=0; i<40; i++){
            arr.push(<div class="progress-blocks" />)
        }
        return arr;
    }
    return(<div className='vertical-progress'>
                <div className='gpa-block-container'>{loadGpaBlocks()}</div>
                <div className='progress-block-container'>{loadProgressBlocks(courseList)}</div>
                <div className='info-block-container'>
                    <div>Current GPA: 2.8</div>
                    <div>Goal GPA: 4.0</div>
                </div>
            </div>);
}
export const termHelpers = {
    loadComponents: term_loadComponents,
    loadProgress: term_loadProgress
}