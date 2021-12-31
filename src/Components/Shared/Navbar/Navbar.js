import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import { auth } from '../../Login/firebase.config';

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext)


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        setUserLoggedIn({})
      }).catch((error) => {
      })
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">

          <Link to="/" className="nav-link text-white fw-bold" >Doctor's Portal</Link  >
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link px-5 text-white fw-bold" >Home</Link  >
            </li>
            <li className="nav-item">
              <Link to="/appointment" className="nav-link px-5 text-white fw-bold" >Appointment</Link   >
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link px-5 text-white fw-bold">Dashboard</Link  >
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-5 text-white fw-bold" >Admin</Link  >
            </li>
            <li className="nav-item">
              <Link to={userLoggedIn?.email ? "/" : "/login"} onClick={handleSignOut} className="nav-link px-5 text-white fw-bold" href="#">
                {userLoggedIn?.email ? "Sign Out" : "Login"}
              </Link  >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;