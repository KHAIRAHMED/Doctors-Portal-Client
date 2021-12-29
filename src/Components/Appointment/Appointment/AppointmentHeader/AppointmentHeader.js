import React from 'react';
import Calendar from 'react-calendar';
import chair from "../../../../images/chair.png"
import 'react-calendar/dist/Calendar.css';
import "./AppointmentHeader.css"
const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main style={{ height: "500px" }} className="row d-flex align-items-center appointmentHeader mb-5">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#3A4256" }}>Appointment </h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt="img-chair" />
            </div>
        </main>
    );
};

export default AppointmentHeader;