import React, { Component } from 'react';
//import User from "./component/User";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
import AddUser from "./component/AddUser";
import NotFound from "./component/NotFound";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

class App extends Component{
 

  render(){

  return (
   <Router>
    <div className="container">
    <Navbar title="Navbar"></Navbar>
    <hr/>
    <Switch>
      <Route exact path ="/" component = {Users}/> 
      <Route exact path ="/add" component ={AddUser}/> 
      <Route component = {NotFound}/>
    </Switch>
  



    </div>

    </Router>
  );
}
}

export default App;
