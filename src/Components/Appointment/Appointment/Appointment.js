import React, {useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBooking from './AppointmentBooking/AppointmentBooking';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date())
    const handleDateChange = date =>{
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <AppointmentBooking date={selectedDate}></AppointmentBooking>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;