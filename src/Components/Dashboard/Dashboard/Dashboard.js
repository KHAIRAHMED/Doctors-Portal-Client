import { faCalendar, faCog, faFileMedical, faHome, faHospitalUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Dashboard.css";
import axios from 'axios';
import { userContext } from './../../../App';
const Dashboard = () => {
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
    const [isDoctor, setIsDoctor] = useState(false)
    useEffect(() => {
        axios.post(`http://localhost:5000/isDoctor`, { email: userLoggedIn.email })
            .then(function (response) {
                // console.log(response);
                setIsDoctor(response.data)
                // handle success
                const resLeng = response.data.length;
                if(resLeng){
                    setIsDoctor(true)
                }
                else{
                    setIsDoctor(false)
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])
    return (
        <div className="sidebar">
            <div className="left-side">

                <Link to="appointmentsByDate" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faCalendar} />
                        <strong className="side-menu-name">Dashboard</strong>
                    </p>
                </Link>

                {
                    isDoctor && <div>
                        <Link to="appointments" className="side-menu-main">
                            <p className="side-menu-details">
                                <FontAwesomeIcon className="side-menu-icon" icon={faHome} />
                                <strong className="side-menu-name">Appointments</strong>
                            </p>
                        </Link>
                        <Link to="addDoctors" className="side-menu-main">
                            <p className="side-menu-details">
                                <FontAwesomeIcon className="side-menu-icon" icon={faHospitalUser} />
                                <strong className="side-menu-name">Add Doctor</strong>
                            </p>
                        </Link>
                        <Link to="prescription" className="side-menu-main">
                            <p className="side-menu-details">
                                <FontAwesomeIcon className="side-menu-icon" icon={faFileMedical} />
                                <strong className="side-menu-name">Prescription</strong>
                            </p>
                        </Link>
                        <Link to="setting" className="side-menu-main">
                            <p className="side-menu-details">
                                <FontAwesomeIcon className="side-menu-icon" icon={faCog} />
                                <strong className="side-menu-name">Setting</strong>
                            </p>
                        </Link>
                    </div>
                }
                <Link to="addDoctors" className="side-menu-main">
                    <p className="side-menu-details" style={{ marginTop: "150px" }}>
                        <FontAwesomeIcon className="side-menu-icon" icon={faSignOutAlt} />
                        <strong className="side-menu-name">Logout</strong>
                    </p>
                </Link>


            </div>
            <div className="right-side">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;