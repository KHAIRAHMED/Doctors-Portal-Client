import React from 'react';
import chair from "../../../images/chair.png"
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    return (
      <main  style={{height:"" , width:"100%"}} className="row d-flex justify-content-center pt-5">
          <div className="col-md-4 col-sm-5 col-11 offset-md-1">
            <h1 style={{color:"#3A4256"}}>Your New Smile <br /> Starts Here</h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti, provident incidunt atque rerum, inventore veritatis quas at, facilis alias quae quaerat tempora eligendi voluptatibus accusamus odio asperiores eaque quasi.</p>
            <Link to="/appointment" className="btn btn-primary mb-4">GET APPOINTMENT</Link>
            
          </div>
          <div className="col-md-7 col-sm-7 col-11">
                <img className="img-fluid" src={chair} alt="header-main " />
          </div>
      </main>
    );
};

export default HeaderMain;