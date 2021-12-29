import React,{useState} from 'react';
import axios from "axios"
const AddDoctors = () => {
  const [doctorInfo , setDoctorInfo] = useState({})
  const [file , setFile] = useState(null)

  const handleOnBlur=(e)=>{
   const newDocInfo = {...doctorInfo}
   newDocInfo[e.target.name] = e.target.value 
   setDoctorInfo(newDocInfo)
  }
  const handleFileChange =(e)=>{
    setFile(e.target.files[0])
  }
  const handleOnSubmit =(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("name", doctorInfo.name)
    formData.append("email", doctorInfo.email)
    formData.append("Qualification", doctorInfo.Qualification)
    formData.append("appointmentTime", doctorInfo.appointmentTime)
    formData.append("phone", doctorInfo.phone)
    formData.append("serviceName", doctorInfo.serviceName)

    axios.post('https://morning-headland-85395.herokuapp.com/addDoctor', formData)
    .then(function (response) {
    })
    .catch(function (error) {
    });
  //   fetch('https://morning-headland-85395.herokuapp.com/addDoctor',{
  //     method:"POST",
  //     body:formData
  //   })
  //   .then(res => res.json())
  //   .then(result => console.log(result))
   }
  return (
    <section className="p-5">
      <form onSubmit={handleOnSubmit} className="row g-3 justify-content-center p-3" style={{ background: "white" , borderRadius:"10px" }}>
        <div className="col-md-10">
          <input type="text" name="name" onBlur={handleOnBlur} className="form-control" placeholder='Enter Doctor Name' required />
        </div>
        <div className="col-md-10">
          <input type="email" onBlur={handleOnBlur} name="email" className="form-control" placeholder="Enter Doctor Email" required />
        </div>
        <div className="col-md-5">
          <input type="text" onBlur={handleOnBlur} name="Qualification" className="form-control" placeholder="Enter Doctor Qualification" required />
        </div>
        <div className="col-md-5">
          <input type="text" onBlur={handleOnBlur} name="appointmentTime" className="form-control" placeholder="Enter Doctor Servicing Time" required />
        </div>
        <div className="col-md-5">
          <input type="text" onBlur={handleOnBlur} name="serviceName" className="form-control" placeholder="Enter Doctor Service Name" required />
        </div>
        <div className="col-md-5">
          <input type="text" onBlur={handleOnBlur} name="phone" className="form-control" placeholder="Enter Doctor Mobile Number" required />
        </div>
        <div className="mb-3 col-md-10">
          <label className="text-secondary">Upload A Doctor Image</label>
          <input type="file" onChange={handleFileChange} className="form-control" aria-label="file example" required />
        </div>
       
        <div className="col-10 mb-3">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </section>
  );
};

export default AddDoctors;