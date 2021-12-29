import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./InfoCard.css"
const InfoCard = ({ info }) => {
    const { title, description, icon, background } = info
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex justify-content-center align-items-center info-card info-${background}`}>
                <div>
                    <FontAwesomeIcon className="card-icon me-3" icon={icon} />
                </div>
                <div >
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;