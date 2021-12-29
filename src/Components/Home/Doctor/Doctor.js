import React from 'react';
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Doctor = ({ doctor }) => {
    const { name, image, phone } = doctor 
    return (
        <div className="col-md-4 text-center">
                <img src={`data:image/png;base64,${image.img}`} style={{height:"200px" , width:"200px"}} alt='doctor'/>
                <h2>{name}</h2>
                <p><FontAwesomeIcon style={{color:"#12D0D7"}} icon={faPhone}></FontAwesomeIcon> {phone}</p>
        </div>
    );
};

export default Doctor;