import React, { useEffect, useState , useContext} from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import axios from 'axios';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import { userContext } from './../../../App';
const DashboardAppointments = () => {
  const [selectedDate , setSelectedDate] = useState(new Date().toDateString())
  const [appointmentDate, setAppointmentByDate] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext)

  const handleDateChange = (date) => {
    setSelectedDate(date.toDateString())
  }
  useEffect(()=>{
    axios.post('http://localhost:5000/appointmentByDate', {selectedDate , email : userLoggedIn.email})
    .then(function (response) {
      setAppointmentByDate(response.data)
    })
    .catch(function(error) {
      console.log(error);
    });
  },[selectedDate])
// console.log(appointmentByDate);
  return (
    <div className="ps-5 pt-5">
        <div>
          <h3>Appointments</h3>
        </div>


      <div className="row pt-5">
        <div className="col-md-6 col-sm-12">
          <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <AppointmentByDate appointmentDate={appointmentDate}></AppointmentByDate>
        </div>

      </div>
    </div>
  );
};

export default DashboardAppointments;