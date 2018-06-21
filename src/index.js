import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Header, Sidebar, MainPane} from './App';
import { myCourses, mySemesters } from './components/data'

let view_id=0;

function setCourseId(val){
    view_id = val;
}
function getCourseId(){
    return view_id;
}
ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<Sidebar courseList={myCourses} semesterList={mySemesters} />, document.getElementById('sidebar-nav'));

ReactDOM.render(<MainPane view={'course'} params={myCourses[getCourseId()]}/>, document.getElementById('main-pane'));

registerServiceWorker();
