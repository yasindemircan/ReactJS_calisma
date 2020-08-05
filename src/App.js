import React, { Component } from 'react';
//import User from "./component/User";
import Navbar from "./component/Navbar";
import Users from "./component/Users";
import AddUser from "./forms/AddUser";
import UpdateUser from "./forms/UpdateUser";
import NotFound from "./component/NotFound";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

class App extends Component{
 

  render(){

  return (
   <Router>
    <div className="container">
    <Navbar title="Navbar"/>
    <hr/>
    <Switch>
      <Route exact path ="/" component = {Users}/> 
      <Route exact path ="/add" component ={AddUser}/> 
      <Route exact path ="/edit/:id" component ={UpdateUser}/> 
      <Route component = {NotFound}/>
    </Switch>
  



    </div>

    </Router>
  );
}
}

export default App;
