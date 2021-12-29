import {  signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import { auth } from '../../Login/firebase.config';

const Navbar = () => {
  const [userLoggedIn , setUserLoggedIn] = useContext(userContext)


const handleSignOut = ()=>{
  signOut(auth)
  .then(() => {
    localStorage.removeItem("token");
    setUserLoggedIn({})
  }).catch((error) => {
  })
}
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link px-5 active" >Home</Link  >
              </li>
              <li className="nav-item">
                <Link to="/appointment" className="nav-link px-5" >Appointment</Link   >
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link px-5 ">Dashboard</Link  >
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link px-5 text-white" >Admin</Link  >
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link px-5 text-white ">Contact Us</Link  >
              </li>
              <li className="nav-item">
                <Link to={userLoggedIn?.email?"/":"/login"} onClick={handleSignOut} className="nav-link px-5 text-white" href="#">
                  {userLoggedIn?.email?"Sign Out": "Login"}
                  </Link  >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;