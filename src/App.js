import React, { Component } from 'react';
import './App.css';
import { MainToolbar } from './components/js/toolbars';
import { SidebarButton } from './components/js/buttons';
import { MainView } from './components/js/views';

//
// Sidebar Component on Left Side of Application
//
class SidebarObj extends Component {
  //----------Constructor------------------
  //props: courseList, term, year
  constructor(props){
    super(props);
    this.semesterList = props.semesterList;
    this.selectYear = props.year;
    this.selectTerm = props.term;
    this.function = props.function;
  }
  testCourse(input){
      console.log('course button',input);
  }
  testTerm(input){
      console.log('sem button', input);
  }
  test(){
    console.log('yoyo')
  }
  //-----------Helper Functions-----------------
  semesterButton(year_in, term_in){
    if(year_in !== undefined){
      return (<SidebarButton handleClick={this.function} class='sidebar-semester-button' key={year_in+term_in} term={term_in} year={year_in} />);
    }
  }

  courseButtons(year_in, term_in){
    return this.props.courseList.map( course => {
      if( course["year"] === year_in && course['term'] === term_in){
        return (<SidebarButton handleClick={this.function} class='sidebar-course-button' key={course.id} department={course.department} number={course.number}/>)
      }
    });
  }

  //----------Main Render Function--------------
  render() {
    return this.semesterList.map( (semester)=> {
      return(
      
      <div className="sidebar-semester">
        {this.semesterButton(semester.year, semester.term)}
        {this.courseButtons(semester.year, semester.term)}
      </div>
    )})
  }
}

//
// Header Component at top of Location
//
class HeaderObj extends Component {
  render() {
      return (
            <div className="header" >
              <h1 className="App-title">My Semester</h1>
            </div>
      );
  }
}

//
// Main Component
//
class MainPaneObj extends Component {
  // Parameters: year, term, dept, course
  constructor(props){
    super(props);
    this.state = {
      view: this.props.view || 'default'
    }
  }
  
  render() {
    return (
      <div className="main-container">
        <div className="main-toolbar">
          <MainToolbar params={this.props.params} />
        </div>
          <MainView view={this.state.view} params={this.props.params}/>
        </div>

    );
  }
}

export const Header = HeaderObj;
export const Sidebar = SidebarObj;
export const MainPane = MainPaneObj;
