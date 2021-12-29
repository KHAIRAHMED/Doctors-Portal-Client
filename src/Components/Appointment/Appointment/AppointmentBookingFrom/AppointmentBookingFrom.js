import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import axios from 'axios';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const AppointmentBookingFrom = ({ modalIsOpen, closeModal, subject , date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const newData = {...data}
        newData.date = date.toDateString()
        newData.subject = subject
        newData.submitDate = new Date().toDateString()
        axios.post('https://morning-headland-85395.herokuapp.com/addAppointment',newData)
          .then( response => {
               if(response){
                closeModal()
                alert("appointment submitted ")
               }
          })
          .catch(function (error) {
          });


        // fetch("https://morning-headland-85395.herokuapp.com/addAppointment", {
        //     method:"POST",
        //     headers:{"content-type" : "application/json"},
        //     body:JSON.stringify(newData)
        // })
        // .then(res => res.json())
        // .then(success => {
        //     if(success){
        //        
        //         alert("appointment submitted")
        //     }
        // })
        
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className="text-center" style={{ color: "#1CC7C1" }}>{subject} on {date.toDateString()}</h3>

                <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input placeholder="Enter Your Name" className="form-control my-3" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">Enter Your Name</span>}
                    </div>
                    <div className="form-group">
                        <input placeholder="Enter Your Phone" className="form-control my-3" {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-danger">Enter Your Phone Number</span>}
                    </div>
                    <div className="form-group">
                        <input placeholder="Enter Your Email" className="form-control my-3" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">Enter Your Email</span>}
                    </div>
                    <div className="form-group row  my-3">

                        <div className="col-4">
                            <select className="form-control" {...register("gender", { required: true })}>
                                <option value="not set" disabled={true}>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">Select GEnder</span>}
                        </div>
                        <div className="col-4">
                            <input placeholder="Enter Your Age" className="form-control" {...register("age", { required: true })} />
                            {errors.age && <span className="text-danger">Enter Your Age</span>}
                        </div>
                        <div className="col-4">
                            <input placeholder="Enter Your Weight" className="form-control" {...register("weight", { required: true })} />
                            {errors.weight && <span className="text-danger">Enter Your Weight</span>}
                        </div>

                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentBookingFrom;