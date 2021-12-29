import React from 'react';
import chair from "../../../images/chair.png"
const HeaderMain = () => {
    return (
      <main  style={{height:"600px"}} className="row d-flex align-items-center">
          <div className="col-md-4 col-sm-6 col-12 offset-md-1">
            <h1 style={{color:"#3A4256"}}>Your New Smile <br /> Starts Here</h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima corrupti, provident incidunt atque rerum, inventore veritatis quas at, facilis alias quae quaerat tempora eligendi voluptatibus accusamus odio asperiores eaque quasi.</p>
            <button className="btn btn-primary">GET APPOINTMENT</button>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
                <img className="img-fluid" src={chair} alt="" />
          </div>
      </main>
    );
};

export default HeaderMain;