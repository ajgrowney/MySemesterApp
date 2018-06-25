import React, { Component } from 'react'
import { MainToolbarButton } from './buttons'
import './../css/toolbars.css'

class MainToolbarObj extends Component {
  constructor(props){
    super(props);
    this.state = {
      object: props.params
    }

  }

  render() {
    return Object.keys(this.state.object).map( input => {
        if((input === 'year' || input === 'term' || input === 'displayString')){
          return (<MainToolbarButton info={this.state.object[input]} />);
        }else{
          return false;
        }
    })
    }
  }

  export const MainToolbar = MainToolbarObj;
