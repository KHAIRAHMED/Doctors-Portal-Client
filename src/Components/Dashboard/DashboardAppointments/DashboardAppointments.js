import React, { useEffect, useState, useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import axios from 'axios';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import { userContext } from './../../../App';
import "./DashboardAppointment.css"
const DashboardAppointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
  const [appointmentDate, setAppointmentByDate] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext)

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString())
  }
  useEffect(() => {
    axios.post('https://morning-headland-85395.herokuapp.com/appointmentByDate', { selectedDate, email: userLoggedIn.email })
      .then(function (response) {
        setAppointmentByDate(response.data)
      })
      .catch(function (error) {
      });
  }, [selectedDate])
  // console.log(appointmentByDate);
  return (
    <div className="my-5">
      <div>
        <h3>Appointments</h3>
      </div>
      <div className="row mt-5">
        <div className="col-md-5 justify-content-center calender-section">
          <div>
            <Calendar
              onChange={handleDateChange}
              value={new Date()}
            />
          </div>
        </div>
        <div className="col-md-7 d-flex justify-content-center align-items-center " >
            <AppointmentByDate appointmentDate={appointmentDate}></AppointmentByDate>
        </div>

      </div>
    </div>
  );
};

export default DashboardAppointments;