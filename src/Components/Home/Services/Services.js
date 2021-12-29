import React from 'react';
import cavity from "../../../images/cavity.png"
import fluoride from "../../../images/fluoride.png"
import whitening from "../../../images/whitening.png"
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import "./Services.css"

const servicesInfo =[
    {
        title : "Fluaride Treatement",
        icon : fluoride,
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, laboriosam et blanditiis ducimus nulla nihil adipisci autem optio maxime nostrum, impedit doloremque neque voluptas assumenda consequatur praesentium. Aspernatur, veritatis maiores"
    },
    {
        title : "Teath Whiteing",
        icon : cavity,
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, laboriosam et blanditiis ducimus nulla nihil adipisci autem optio maxime nostrum, impedit doloremque neque voluptas assumenda consequatur praesentium. Aspernatur, veritatis maiores"
    },
    {
        title : "Fluaride Treatement",
        icon : whitening,
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, laboriosam et blanditiis ducimus nulla nihil adipisci autem optio maxime nostrum, impedit doloremque neque voluptas assumenda consequatur praesentium. Aspernatur, veritatis maiores"
    }
]
const Services = () => {
    return (
        <section className="service-section">
            <div className="text-center"> 
                <h5 style={{color:"#1CC7C1"}}>Our Services</h5>
                <h2 style={{color:"#3A4256"}}>Services We Provide</h2>
            </div>
          <div className="d-flex justify-content-center">
          <div className="row w-75">
                {
                    servicesInfo.map(service => <ServiceInfo serInfo={service}></ServiceInfo>)
                }
            </div>
          </div>
        </section>
    );
};

export default Services;