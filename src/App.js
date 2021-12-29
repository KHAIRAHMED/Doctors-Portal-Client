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

export const userContext = createContext()
const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState({})

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
  return (
    <userContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
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
          <Route path="addDoctors" element={<AddDoctors />} />
          <Route path="prescription" element={<Prescription />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </userContext.Provider>
  );
};

export default App;