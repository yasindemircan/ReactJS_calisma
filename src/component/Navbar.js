import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

function Navbar(props){
    const{title}=props;
return(
<nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
    <a href ="/" className="navbar-brand">{title}</a>
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <Link to ="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item active">
        <Link to ="/add" className="nav-link">Add User</Link>
        </li>
        <li className="nav-item active">
        <a href="https://github.com/yasindemircan" className="nav-link">Github</a>
        </li>
    </ul>
</nav>


 )
}
Navbar.PropsTypes={
    title: PropTypes.string.isRequired
}
Navbar.defaultProps ={
    title: "Default App"
}
export default Navbar;