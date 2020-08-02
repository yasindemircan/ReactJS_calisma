import React, { Component } from 'react';
//import User from "./component/User";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
import AddUser from "./component/AddUser";

class App extends Component{
 

  render(){
   
  return (
    <div className="App">

      <Navbar title="Navbar"></Navbar>
      <Navbar></Navbar>
      <AddUser></AddUser>
    <Users/>
     
    </div>
  );
}
}

export default App;
