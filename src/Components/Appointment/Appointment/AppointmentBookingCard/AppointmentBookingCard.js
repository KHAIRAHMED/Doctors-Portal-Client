import React, { useState } from 'react';
import AppointmentBookingFrom from '../AppointmentBookingFrom/AppointmentBookingFrom';


const AppointmentBookingCard = ({ booking  , date }) => {
    const { subject, visitingHour, totalSpace } = booking;
    const [modalIsOpen, setIsOpen] =useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h3 className="card-title" style={{color: "#1CC7C1" }}>{subject}</h3>
                    <strong>{visitingHour}</strong>
                    <p>{totalSpace}</p>
                    <button onClick={openModal} className="btn btn-primary"> BOOK APPOINTMENT</button>
                    <AppointmentBookingFrom modalIsOpen={modalIsOpen} subject={subject} closeModal={closeModal} date={date} ></AppointmentBookingFrom>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBookingCard;