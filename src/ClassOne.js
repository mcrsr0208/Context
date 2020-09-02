import React from "react";
import "./style.css";
import { UserConsumer } from './UserContext';

class ClassOne extends React.Component{

  render(){
    return(
      <UserConsumer >
      {
        (name) =>{
          return <div>Iam from ClassOne Name: {name}</div>
        }
      }
      </UserConsumer >
    );
  }
}

export default ClassOne;
