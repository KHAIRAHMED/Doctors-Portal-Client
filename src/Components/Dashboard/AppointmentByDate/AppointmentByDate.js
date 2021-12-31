import React from 'react';
import "./AppointmentByDate.css"
const AppointmentByDate = ({ appointmentDate }) => {
    return (
        <div className="" style={{background: "white"}}>
            <div className="d-flex justify-content-between px-3 " style={{width:"100%"}} >
                <h3 className="text-secondary" >Appointments</h3>
                <p className="text-secondary">{new Date().toDateString()}</p>
            </div>
            <h1>{appointmentDate.length}</h1>
            {
                appointmentDate.length?<table>
                <tr>
                    <th>Name</th>
                    <th>Shedule</th>
                    <th>Action</th>
                </tr>
                    {
                        appointmentDate.map(appointment => <tr>
                            <td>{appointment.name}</td>
                            <td>{appointment.email}</td>
                            <td>{appointment.age}</td>
                        </tr> )
                    }

            </table>:<>
                    <h6 className="text-secondary text-center">Appointment not found this date</h6>
            </>
            }
         
        </div>
    );
};

export default AppointmentByDate;