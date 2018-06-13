import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Header, Sidebar, MainPane} from './App';

const myCourses = [
    {
        department: 'EECS',
        number: 581,
        term: 'Fall',
        year: 2017,
        id: 1
    },
    {
        department: 'EECS',
        number: 662,
        term: 'Fall',
        year: 2017,
        id: 2
    },
    {
        department: 'PHSX',
        number: 511,
        term: 'Fall',
        year: 2017,
        id: 3
    },
    {
        department: 'EECS',
        number: 101,
        term: 'Spring',
        year: 2016,
        id: 4
    }
]

export function refreshMainPane(year, term, dept, course){
    console.log('yoyoyo');
    console.log(term);
    ReactDOM.render(<MainPane view = {'course'} params={[year, term, dept, course]} />, document.getElementById('main-pane'));
}

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<Sidebar courseList={myCourses} term={'Fall'} year={2017}/>, document.getElementById('sidebar-nav'));

//ReactDOM.render(<MainPane view={'course'} params={[2017, 'Fall', 'EECS', '581']}/>, document.getElementById('main-pane'));
refreshMainPane(1,'a','b','c');

registerServiceWorker();
