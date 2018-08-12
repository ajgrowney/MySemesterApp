import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header, Sidebar, MainPane} from './App';
import { myCourses, mySemesters } from './components/data'

let view_id=2;
/**
 * @param { String } view contains either "term", "course", or "year"
 * @param { Object } obj contains an object in myCourses object at the current view_id
 */
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            view: this.props.view,
            object: this.props.obj
        }
    }
    handleView(view_in, obj_in){
        this.setState({
            view: view_in || 'course',
            object: obj_in || 0
        })
    }
    render(){
        return(
            <div id="root-container">
                <div id="header"><Header /></div>
                <div id="sidebar-nav"><Sidebar function={this.handleView.bind(this)} courseList={myCourses} semesterList={mySemesters} /></div>
                <div id="main-pane"><MainPane view={this.state.view} params={this.state.object}/></div>
            </div>
        )
    }

    
}

ReactDOM.render(<App view={'course'} obj={myCourses[view_id]}/>, document.getElementById('root'));