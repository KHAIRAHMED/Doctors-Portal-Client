import React from 'react';
import doctor from "../../../images/doctor.png"
import "./MakeAnAppointment.css"

const MakeAnAppointment = () => {
    return (
        <section className="makeAnAppointment d-flex justify-items-center">
            {/* <div className="">  */}
                <div className="row align-items-center">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} className="img-fluid" alt="appintment-img" />
                    </div>
                    <div className="col-md-6 " style={{color:"#1CC7C1"}} >
                        <h5 >APPOINTMENT</h5>
                        <h3 className="text-white my-4">
                            Make An Appointment Today
                        </h3>
                        <p className="text-secondary" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, dolor sapiente? Odit at nulla minima, cumque laudantium commodi dignissimos doloremque facilis expedita suscipit saepe? Est et itaque eaque quaerat ipsum!</p>
                        <button className="btn btn-primary my-5">Learn More</button>
                    </div>
                {/* </div> */}

             </div>
        </section>
    );
};

export default MakeAnAppointment;