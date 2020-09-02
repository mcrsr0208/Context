import React from "react";
import "./style.css";
import ClassOne from './ClassOne';

class ClassTwo extends React.Component{

  render(){
    return(
      <div>
        <h2>Iam from ClassTwo Name: { this.props.name }</h2>
        <ClassOne />
      </div>
    );
  }
}

export default ClassTwo;
