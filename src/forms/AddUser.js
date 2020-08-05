import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
import Axios from 'axios';

const Animation = posed.div({
    visiable:{
        opacity:1,
        applyAtStart:{display:"block"}    
    },
    hidden:{
        opacity:0,
        applyAtEnd:{
            display:"none"
        }
    }
});
class AddUser extends Component {
    state={
        visiable : true,
        name: "",
        department: "",
        salary:"",
        error: false,
    }
    validateForm =()=>{
        const {name,salary,department} =this.state;
        if(name ==="" || salary ==="" || department ===""){
            return false;
        }
        return true;
    }
    changeVisibility =(e)=>{
        this.setState({visiable: !this.state.visiable})
    }
    changeInput =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   addUser =async (dispatch,e)=>{
       e.preventDefault();
       const{name,department,salary} = this.state;
       const newUser={
         
           name:name,
           salary:salary,
           department:department,
       }
       if(!this.validateForm()){
        this.setState({
          error: true,  
        })
        return;
       }
      const response = await Axios.post("http://localhost:3005/users",newUser)
       dispatch({type: "ADD_USER",payload:response.data});
       this.props.history.push("/");
       
   }
    render() {
        const{visiable,name,salary,department,error}=this.state;
     return <UserConsumer>
        {
            value =>{
                const {dispatch} =value;
                return (
            <div className="col-md-8 mb-4">
            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visiable ? "Hide Form":"Show Form"} </button>
               <Animation pose={visiable ? "visiable":"hidden"}> 
                <div className="card">
                <div className="card-header">
                <h4>
                    Add User Form
                </h4>
                </div>
                {
                    error ?
                    <div className="alert alert-danger">
                        Lütfen Bilgilerinizi Kontrol Edin..
                    </div>:null
                }
                <div className="card-body">
                <form onSubmit={this.addUser.bind(this,dispatch)}>
                    <div className="form-group">
                        <label htmlFor ="name">Name</label>
                        <input 
                        type="text"
                        name="name"
                        id="id"
                        placeholder="Enter Name"
                        className ="form-control"
                        value={name}
                        onChange={this.changeInput}   
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor ="department">Department</label>
                        <input 
                        type="text"
                        name="department"
                        id="department"
                        placeholder="Enter Department"
                        className ="form-control" 
                        value={department} 
                        onChange={this.changeInput}   
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor ="salary">Salary</label>
                        <input 
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder="Enter Salary"
                        className ="form-control"
                        value={salary}
                        onChange={this.changeInput}     
                        />
                    </div>
                    <button className="btn btn-danger btn-block" type="submit"> Add User </button>
                </form>
                </div>
                

                </div> </Animation>
            </div>
        )

            }
        }

     </UserConsumer>
        

       
    }
}
export default AddUser;