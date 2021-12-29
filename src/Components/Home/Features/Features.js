import React from 'react';
import treatment from "../../../images/treatment.png"
const Features = () => {
    return (
        <section className="d-flex justify-content-center mt-5">
            <div className="row w-75">
                <div className="col-md-5">
                    <img src={treatment} className="img-fluid" alt="treatment-img" />
                </div>
                <div className="col-md-6">
                    <h2 style={{}} className="my-5">Conceptional Dental's Care On Your Terms</h2>
                    <p className="text-secondary mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis expedita iusto ipsam nulla tempore ut, obcaecati explicabo eligendi veritatis? Animi, eligendi culpa explicabo ut dolorem facilis nihil sint quidem eius.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis similique modi error harum at earum obcaecati tenetur mollitia ab quibusdam iure minus nesciunt, sit, nulla minima soluta blanditiis cum cupiditate.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>   
        </section>
    );
};

export default Features;