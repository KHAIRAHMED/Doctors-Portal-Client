import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, description, address, img } = testimonial
    return (
        <div className="col-md-4 col-lg-3 col-sm-6 col-12 mt-3">
            <div className="card">
                <div className="card-body">
                    <p>{description}</p>
                    <div className="d-flex align-items-center">
                        <div>
                            <img src={img} alt="patient comment" />
                        </div>
                        <div className="ps-2">
                            <h6 style={{color:"#10CFE4"}}>{name}</h6>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;