import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Header, Sidebar, MainPane} from './App';
import { myCourses, mySemesters } from './components/data'

let view_id=0;

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            view: this.props.view || 'default'
        }
        this.handleView = this.handleView.bind(this);
    }
    handleView(view_in){
        console.log('view update: ',view_in);
        this.setState({
            view: view_in
        })
    }
    render(){
        return(
            <div id="root-container">
                <div id="header">
                    <Header />
                </div>
                <div id="sidebar-nav">
                    <Sidebar function={this.handleView} courseList={myCourses} semesterList={mySemesters} />
                </div>
                <div id="main-pane">
                    <MainPane view={this.state.view} params={myCourses[view_id]}/>
                </div>
            </div>
        )
    }

    
}

ReactDOM.render(<App view={'course'}/>, document.getElementById('root'));

registerServiceWorker();
