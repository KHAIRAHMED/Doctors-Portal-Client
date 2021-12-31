import React from 'react';
import pepoleOne from "../../../images/people-1.png"
import pepoleTwo from "../../../images/people-2.png"
import pepoleThree from "../../../images/people-3.png"
import Testimonial from '../Testimonial/Testimonial';

const testimonials = [
    {
        name: "Winson Herry",
        address: "Feni",
        img: pepoleOne,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt exercitationem ea, quod deserunt aut magni nihil repellat libero atque sed, neque id quisquam expedita maiores omnis rem maxime perspiciatis."
    },
    {
        name: "Winson Herry",
        address: "Feni",
        img: pepoleTwo,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt exercitationem ea, quod deserunt aut magni nihil repellat libero atque sed, neque id quisquam expedita maiores omnis rem maxime perspiciatis."
    },
    {
        name: "Winson Herry",
        address: "Feni",
        img: pepoleThree,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt exercitationem ea, quod deserunt aut magni nihil repellat libero atque sed, neque id quisquam expedita maiores omnis rem maxime perspiciatis."
    },
    {
        name: "Winson Herry",
        address: "Feni",
        img: pepoleThree,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt exercitationem ea, quod deserunt aut magni nihil repellat libero atque sed, neque id quisquam expedita maiores omnis rem maxime perspiciatis."
    }
]
const Testimonials = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75">
                <div>
                    <h4 className="mt-5 mb-3" style={{ color: "#1CC7C1" }}>TESTIMONIALS</h4>
                    <h2 className="mb-5">What's Our Patients <br /> says</h2>
                </div>
                <div className="row">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;