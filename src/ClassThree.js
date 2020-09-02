import React from "react";
import "./style.css";
import ClassTwo from './ClassTwo';

class ClassThree extends React.Component{

  render(){
    return(
      <div>
        <h2>Iam from ClassThree Name: { this.props.name }</h2>
        <ClassTwo />
      </div>
    );
  }
}

export default ClassThree;
