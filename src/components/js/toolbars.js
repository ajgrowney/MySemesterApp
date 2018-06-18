import React, { Component } from 'react'
import { MainToolbarButton } from './buttons'
import './../css/toolbars.css'

class MainToolbarObj extends Component {
  constructor(props){
    super(props);
    this.parameters = this.props.params;

  }

  render() {
    return Object.keys(this.parameters).map( input => {
        if(input === 'year' || input == 'term' || input == 'displayString'){
          return (<MainToolbarButton info={this.parameters[input]} />);
        }
    })
    }
  }

  export const MainToolbar = MainToolbarObj;
