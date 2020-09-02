import React from "react";
import "./style.css";
import ClassThree from './ClassThree';
import {UserProvider} from './UserContext';

class App extends React.Component{

  render(){
    return(
      <div>
        <h2>Iam from App</h2>
        <UserProvider value='Rangaswami' >
        <ClassThree  />
        </UserProvider >
      </div>
    );
  }
}

export default App;
