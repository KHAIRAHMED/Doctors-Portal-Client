import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Home from './Components/Home/Home/Home'
import { auth } from './Components/Login/firebase.config';
import Login from './Components/Login/Login';
import jwt_decode from "jwt-decode";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { onAuthStateChanged } from 'firebase/auth';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import DashboardAppointments from './Components/Dashboard/DashboardAppointments/DashboardAppointments';
import AddDoctors from './Components/Dashboard/AddDoctors/AddDoctors';
// import DashboardMain from './Components/Dashboard/DashboardMain/DashboardMain';
import Prescription from './Components/Dashboard/Prescription/Prescription';
import Setting from './Components/Dashboard/Setting/Setting';
import Appointments from './Components/Dashboard/Appointments/Appointments';
import axios from "axios"
import Navbar from './Components/Shared/Navbar/Navbar';

export const userContext = createContext()
const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [isDoctor, setIsDoctor] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      let decoded = jwt_decode(token);
      setUserLoggedIn(decoded)
    }

  }, [])
  //   useEffect(() => {
  //     const onChange = (currentUser)=>{
  //         setUserLoggedIn(currentUser)

  //     }
  //     const unSub = onAuthStateChanged(auth,  onChange)
  //     return unSub;
  // },[])

  useEffect(() => {
    axios.get(`https://morning-headland-85395.herokuapp.com/isDoctor?email=${userLoggedIn?.email}`)
      .then(function (response) {
        const resLeng = response.data.length;
        if (resLeng) {
          setIsDoctor(true)
        }
      })
      .catch(function (error) {
      })
  }, [userLoggedIn?.email])
  return (
    <userContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/appointment" element={
          <PrivateRoute>
            < Appointment />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path="appointments" element={<Appointments />} />
          <Route path="appointmentsByDate" element={<DashboardAppointments />} />
          <Route path="addDoctors" element={
            isDoctor ?
              <AddDoctors /> : "You Have Not Permission Enter There"} />
          <Route path="prescription" element={
            isDoctor ?
              <Prescription /> : "You Have Not Permission Enter There"} />
          <Route path="setting" element={
            isDoctor ? <Setting /> : "You Have Not Permission Enter There"} />
        </Route>
      </Routes>
    </userContext.Provider>
  );
};

export default App;