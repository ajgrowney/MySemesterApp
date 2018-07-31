import React, { Component } from 'react';
import './App.css';
import { MainToolbar } from './components/js/toolbars';
import { SidebarButton } from './components/js/buttons';
import { MainView } from './components/js/views';
import { mySyllabus, myCourses, mySemesters } from './components/data';


/** Sidebar Component on Left Side of Application
/* @param { function } function contains click handler to adjust state variable
/* @param { courseList } object contains myCourses object
/* @return { Array<Object> } SidebarButton objects that handle click events 
*/
class SidebarObj extends Component {
  //----------Constructor------------------
  //props: courseList, term, year
  constructor(props) {
    super(props);
    this.semesterList = props.semesterList;
    this.function = props.function;
  }
  //-----------Helper Functions-----------------
  semesterButton = (semester) => (<SidebarButton handleClick={this.function} class='sidebar-semester-button' id={semester.id} term={semester.term} year={semester.year} />);

  courseButtons = (semester) => 
    this.props.courseList.map(course => {
      if (course.year === semester.year && course.term === semester.term) {
        return (<SidebarButton handleClick={this.function} class='sidebar-course-button' id={course.id} department={course.department} number={course.number} />)
      }
    });

  //----------Main Render Function--------------
  render() {
    return this.semesterList.map((semester) => {
      return (
        <div className="sidebar-semester">
          {this.semesterButton(semester)}
          {this.courseButtons(semester)}
        </div>
      )
    })
  }
}


/** Header Component at top of Location
/* @return { div } contains the title of the application
*/
class HeaderObj extends Component {
  render() {
    return (
      <div className="header" >
        <h1 className="App-title">My Semester</h1>
      </div>
    );
  }
}


/** Main Component
/* @param { String } view contains the view type for main pane to render
/* @param  { Object } object_id contains the id for the view to render
*/
class MainPaneObj extends Component {
  // Parameters: year, term, dept, course
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view,
      display: this.props.params.displayString
    }
    if (this.state.view === 'course') {
      this.state.object = mySyllabus.find(course => (course.id === props.params.id)) || 0;
    } else if (this.state.view === 'term') {
      this.state.object = mySemesters.find(sem => (sem.id === 1));
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      view: newProps.view,
    });
    if (newProps.view === 'course') {
      const courseDisplay = myCourses.find(course => course.id === newProps.params);
      this.setState({
        object: mySyllabus.find(course => course.id === newProps.params),
        display: courseDisplay.displayString
      });
    } else if (newProps.view === 'term') {
      const selectedSemester = mySemesters.find(sem => sem.id === newProps.params);
      this.setState({
        object: selectedSemester,
        display: selectedSemester.displayString
      });
    }
  }

  render() {

    return (
      <div className="main-container">
        <div className="main-toolbar"><MainToolbar params={this.state.object} /></div>
        <MainView view={this.state.view} params={this.state.object} display={this.state.display} />
      </div>

    );
  }
}

export const Header = HeaderObj;
export const Sidebar = SidebarObj;
export const MainPane = MainPaneObj;
