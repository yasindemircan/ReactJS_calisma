import React, { Component } from 'react'
import posed from 'react-pose';
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
        visiable : true
    }
    changeVisibility =(e)=>{
        this.setState({visiable: !this.state.visiable})
    }
    render() {
        const{visiable}=this.state;
        return (
            <div className="col-md-8 mb-4">
            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visiable ? "Hide Form":"Show Form"} </button>
               <Animation pose={visiable ? "visiable":"hidden"}> 
                <div className="card">
                <div className="card-header">
                <h4>
                    Add User Form
                </h4>
                <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor ="name">Name</label>
                        <input 
                        type="text"
                        name="name"
                        id="id"
                        placeholder="Enter Name"
                        className ="form-control"   
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
                        />
                    </div>
                    <button className="btn btn-danger btn-block" type="submit"> Add User </button>
                </form>
                </div>
                </div>

                </div> </Animation>
            </div>
        )
    }
}
export default AddUser;