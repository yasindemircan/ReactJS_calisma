import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider , Consumer
const reducer = (state,action) => {
    switch(action.type){
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user => action.payload !== user.id),
            }
        default:
            return state;
    }
    
}
export class UserProvider extends Component {
    state = {
        users: [
          {
            id:1,
            name: "Yasin Demircan",
            salary: "6000",
            department:"frontend"
         },
         {
           id:2,
           name: "Yasin Demircan",
           salary: "6000",
           department:"backend"
        },
        {
         id:3,
         name: "Yasin Demircan",
         salary: "7000",
         department:"full stack"
      },
      {
       id:4,
       name: "Yasin",
       salary: "17000",
       department:"full+full stack"
     }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
       }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;