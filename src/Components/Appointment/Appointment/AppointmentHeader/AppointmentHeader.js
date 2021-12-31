import React from 'react';
import Calendar from 'react-calendar';
import chair from "../../../../images/chair.png"
import 'react-calendar/dist/Calendar.css';
import "./AppointmentHeader.css"
const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main style={{ height: "" }} className="row d-flex align-items-center justify-content-center appointmentHeader mb-5">
            <div className="col-md-6  d-flex align-items-center justify-content-center">
             <div>
             <h1 style={{ color: "#3A4256" }}>Appointment </h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
             </div>
            </div>
            <div className="col-md-6 mt-3">
                <img className="img-fluid" src={chair} alt="img-chair" />
            </div>
        </main>
    );
};

export default AppointmentHeader;