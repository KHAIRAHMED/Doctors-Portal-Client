import React ,{useState , useEffect} from 'react';
import Doctor from '../Doctor/Doctor';
import axios from 'axios'
const Doctors = () => {
    const [doctors , setDoctors] = useState([])
    useEffect(()=>{
        axios.get('https://morning-headland-85395.herokuapp.com/doctors')
        .then(data => setDoctors(data.data))
        .catch(err => {
            
        })
    },[])
    return (
        <section className="d-flex justify-content-center my-5">
            <div className="w-75">
                <div className="text-center">
                    <h6 style={{ color: "#12D0D7" }}>Our Doctors</h6>
                </div>
                <div className="row">
                   {
                       doctors.length?<>{
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                    }</>:"Doctors Not Available Now"
                   }
                </div>
            </div>

        </section>
    );
};

export default Doctors;