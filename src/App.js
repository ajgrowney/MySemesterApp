import React, { Component } from 'react';
import './App.css';
import { MainToolbar } from './components/js/toolbars';
import { SidebarButton } from './components/js/buttons';
import { refreshMainPane } from './index';
//
// Sidebar Component on Left Side of Application
//
class SidebarObj extends Component {
  //----------Constructor------------------
  //props: courseList, term, year
  constructor(props){
    super(props);
    this.state = {
      view: this.props.viewType || 'default'
    }
    this.selectYear = this.props.year;
    this.selectTerm = this.props.term;
  }

  //-----------Helper Functions-----------------
  semesterButton(year_in, term_in){
    if(year_in !== undefined){
      return (<SidebarButton class='sidebar-semester-button' term={term_in} year = {year_in} />);
    }
  }

  courseButtons(year_in, term_in){
    return this.props.courseList.map( course => {
      if( course["year"] === year_in && course['term'] === term_in){
        return (<SidebarButton class='sidebar-course-button' onClick={refreshMainPane(course['year'],course['term'], course['department'], course['number'])} key={course.id} department={course.department} number={course.number}/>)
      }
    });
  }

  //----------Main Render Function--------------
  render() {
    return(
      <div className="sidebar-semester">
        {this.semesterButton(this.selectYear, this.selectTerm)}
        {this.courseButtons(this.selectYear, this.selectTerm)}
      </div>
    )
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

class MainPaneObj extends Component {
  // Parameters: year, term, dept, course
  constructor(props){
    super(props);
    this.viewType = this.props.view;
    this.year = this.props.params[0];
    this.term = this.props.params[1];
    this.dept = this.props.params[2];
    this.course = this.props.params[3];
  }
  
  loadMainView(){
    return(
      <div className={this.viewType+ "-view"}>
        Data
      </div>
    );
  }
  render() {
    return (
      <div className="main-object">

        <div className="main-toolbar">
        {console.log(this.props.params)}
          <MainToolbar params={this.props.params} />
        </div>
        {this.loadMainView()}
      </div>

    );
  }
}

export const Header = HeaderObj;
export const Sidebar = SidebarObj;
export const MainPane = MainPaneObj;