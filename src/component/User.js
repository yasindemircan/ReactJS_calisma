import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from "../context";
import Axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
   
        state = {
            isVisiable:false
        }
        onClickEvent= (e) => {
            this.setState({isVisiable : !this.state.isVisiable})
        }
        onDeleteUser=async (dispatch,e) =>{
           const{id} = this.props;
           //delete request
           await Axios.delete(`http://localhost:3005/users/${id}`);
            //consumer dispatch
            dispatch({type : "DELETE_USER",payload:id});
        }

    render() {
        // Destructing
        const {id,name,department,salary}=this.props;
        const {isVisiable}= this.state;
        return (
        <UserConsumer>
            {
                 value => {
                    const{dispatch} = value;
                    return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between" >
                   
                            <h4 className = "d-inline" onClick={this.onClickEvent} style={isVisiable ? {fontWeight:"600",cursor:"pointer"} : {cursor:"pointer"}}> {name} </h4>
                            <svg onClick={this.onDeleteUser.bind(this,dispatch)} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{cursor:"pointer" }}>
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>     
                    </div>
                    {
                     isVisiable ? <div className="card-body"> 
                    <p className ="card-text">Maaş : {salary}</p>
                    <p className ="card-text">Departman : {department}</p>            
                    <Link to ={`edit/${id}`} className="btn btn-dark btn-block" > Update User</Link> 

                    </div>:null
                    }
                    
                </div>
            </div>
        )
                }
            }
        </UserConsumer>

        )
       
    }
}
User.PropsTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
    
}
User.defaultProps ={
    name : "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok",
}
export default User;