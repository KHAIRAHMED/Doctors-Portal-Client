import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { userContext } from '../../../App';

const Appointments = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
    const [appointments , setAppointments] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/appointments?email=${userLoggedIn.email}`)
        .then(function (response) {
          setAppointments(response.data)
        })
        .catch(function(error) {
          console.log(error);
        });
      },[userLoggedIn.email])
    return (
        <div>
                   {
                appointments.length?<table>
                <tr>
                    <th>Name</th>
                    <th>Shedule</th>
                    <th>Action</th>
                </tr>
                    {
                        appointments.map(appointment => <tr>
                            <td>{appointment.name}</td>
                            <td>{appointment.email}</td>
                            <td>{appointment.age}</td>
                        </tr> )
                    }

            </table>:<>
                    <h6 className="text-secondary text-center">You Dont Have Any Appointment</h6>
            </>
            }
        </div>
    );
};

export default Appointments;