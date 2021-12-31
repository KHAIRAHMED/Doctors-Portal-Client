import React from 'react';
import AppointmentBookingCard from '../AppointmentBookingCard/AppointmentBookingCard';
const bookingData =[
    {
        id:1,
        subject : "Teeth Cleaning ",
        visitingHour : "5 pm to 6 pm",
        totalSpace : 10
    },
    {
        id:2,
        subject : "Teeth Cleaning ",
        visitingHour : "5 pm to 6 pm",
        totalSpace : 10
    },
    {
        id:3,
        subject : "Teeth Cleaning ",
        visitingHour : "5 pm to 6 pm",
        totalSpace : 10
    },
    {
        id:4,
        subject : "Teeth Cleaning ",
        visitingHour : "5 pm to 6 pm",
        totalSpace : 10
    },
    {
        id:5,
        subject : "Teeth Cleaning ",
        visitingHour : "5 pm to 6 pm",
        totalSpace : 10
    },
    {
        id:6,
        subject : "Teeth Cleaning ",
        visitingHour : "5 pm to 6 pm",
        totalSpace : 10
    },
]
const AppointmentBooking = ({date}) => {
    return (
        <section className="pt-2" style={{width:"100%"}}>
            <h1 style ={{ color:"#10D0E7"}} className="text-center mb-5">Available Appointments On {date.toDateString()} </h1>
            <div className="row px-5">
                {
                    bookingData.map(booking => <AppointmentBookingCard booking={booking} key={booking.id} date={date}></AppointmentBookingCard>)
                }
            </div>
        </section>
    );
};

export default AppointmentBooking;