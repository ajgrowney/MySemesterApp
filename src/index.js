import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Header, Sidebar, MainPane} from './App';
import { myCourses } from './components/data'



ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<Sidebar courseList={myCourses} term={'Fall'} year={2017}/>, document.getElementById('sidebar-nav'));

ReactDOM.render(<MainPane view={'course'} params={myCourses[0]}/>, document.getElementById('main-pane'));

registerServiceWorker();
