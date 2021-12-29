import React from 'react';
// import InfoCard from '../InfoCard/InfoCard';
import { faClock , faMarker , faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
// import InfoCard from './../InfoCard/InfoCard';

const infoData =[
    {
        title : "Opening Hours",
        description: "Open 24 hours 7 days",
        icon : faClock,
        background : "primary"
    },
    {
        title : "Visit Our Location",
        description: "Bangladesh Dhaka Feni 3940",
        icon : faMarker,
        background : "dark"
    },
    {
        title : "Contact Us Now",
        description: "01833994508",
        icon : faPhone,
        background : "primary"
    }
]
const BusinessInfo = () => {
    return (
     <div className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </div>
     </div>
    );
};

export default BusinessInfo;