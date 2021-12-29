import React from 'react';

const ServiceInfo = ({ serInfo }) => {
    const { title, description, icon } = serInfo
    return (
        <div className="col-md-4 text-center mt-5">
            <img style={{ width: "50px" }} src={icon} alt={`${title}-icon`} />
            <h6 className="my-3">{title}</h6>
            <small className="text-secondary">{description}</small>
        </div>
    );
};

export default ServiceInfo;