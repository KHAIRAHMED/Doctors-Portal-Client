import React, {useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBooking from './AppointmentBooking/AppointmentBooking';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date())
    const handleDateChange = date =>{
        setSelectedDate(date)
    }
    return (
        <div>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <AppointmentBooking date={selectedDate}></AppointmentBooking>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;