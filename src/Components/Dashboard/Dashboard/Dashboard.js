import { faCalendar, faCog, faFileMedical, faHome, faHospitalUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Dashboard.css";
const Dashboard = () => {

    return (
        <div className="sidebar">
            <div className="left-side">

                <Link to="appointmentsByDate" className="side-menu-main">
                    <p className="side-menu-details">
                        <FontAwesomeIcon className="side-menu-icon" icon={faCalendar} />
                        <strong className="side-menu-name">Dashboard</strong>
                    </p>
                </Link>
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