import React, { Component } from 'react'
import './../css/buttons.css'

class MainToolbarButtonObj extends Component {

    constructor(props){
        super(props);
        this.text = props.info;
        console.log(this.text);
    }
    
    render() {
        return (
            <button className="main-toolbar-button">{this.text}</button>
        );
    }
}

class SidebarButtonObj extends Component {

    constructor(props){
        super(props);
        this.class = props.class || 'generic-button';
        this.dept = props.department || 'Course';
        this.number = props.number || 101;
        this.term = props.term || 'n/a';
        this.year = props.year || 'n/a';
        this.function = props.handleClick;
    }

    butTest(){
        console.log('yuh')
    }
    render() {
        if(this.class === 'sidebar-course-button'){
            return (<button onClick={this.function.bind(this,'course')} className={this.class}>{this.dept + " "+ this.number}</button>);
        }else if(this.class === 'sidebar-semester-button'){
            return (<button onClick={this.function.bind(this, 'term')} className={this.class}>{this.term + " "+ this.year}</button>);
        }else{
            return(<button className={this.class}>Generic</button>)
        }
    }
}

export const SidebarButton = SidebarButtonObj;
export const MainToolbarButton = MainToolbarButtonObj;