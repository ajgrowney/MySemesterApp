import React, { Component } from 'react'
import { MainToolbarButton } from './buttons'
import './../css/toolbars.css'

class MainToolbarObj extends Component {
  constructor(props){
    super(props);
    this.year = this.props.params[0];
    this.term = this.props.params[1];
    this.dept = this.props.params[2];
    this.course = this.props.params[3];
  }

  render() {
    return this.props.params.map( input => {
      {console.log(this.props.params)}
        return (
          <MainToolbarButton info={input} /> 
    
        );
    })
    }
  }

  export const MainToolbar = MainToolbarObj;