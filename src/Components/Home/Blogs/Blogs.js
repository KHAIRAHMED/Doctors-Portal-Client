import React from 'react';
import pepoleOne from "../../../images/people-1.png"
import pepoleTwo from "../../../images/people-2.png"
import pepoleThree from "../../../images/people-3.png"
import Blog from '../Blog/Blog';

const blogs = [
    {
        name: "Winson Herry",
        subTitle : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus similique .",
        img: pepoleOne,
        date: new Date().toLocaleDateString(),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt exercitationem ea, quod deserunt aut magni nihil repellat libero atque sed, neque id quisquam expedita maiores omnis rem maxime perspiciatis."
    },
    {
        name: "Winson Herry",
        subTitle : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus similique .",
        img: pepoleTwo,
        date: new Date().toLocaleDateString(),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt exercitationem ea, quod deserunt aut magni nihil repellat libero atque sed, neque id quisquam expedita maiores omnis rem maxime perspiciatis."
    },
    {
        name: "Winson Herry",
        subTitle : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus similique .",
        img: pepoleThree,
        date: new Date().toLocaleDateString(),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt exercitationem ea, quod deserunt aut magni nihil repellat libero atque sed, neque id quisquam expedita maiores omnis rem maxime perspiciatis."
    },
]
const Blogs = () => {
    return (
        <section className="d-flex justify-content-center my-5">
            <div className="w-75">
                <div className="text-center">
                    <h6 style={{color:"#12D0D7"}}>OUR BLOGS</h6>
                    <h3 className="mt-2 mb-5">From Our Blogs News</h3>
                </div>
                <div className="row">
            
                    {
                        blogs.map(blog => <Blog blog={blog}></Blog>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Blogs;