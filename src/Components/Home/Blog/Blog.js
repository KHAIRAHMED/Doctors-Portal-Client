import React from 'react';
import "./Blog.css"
const Blog = ({blog}) => {
    const {name , subTitle , img , date , description} = blog
    return (
        <div className="col-md-4 col-sm-6 col-12 mt-3">
        <div class="card  blog-section" style={{width: "16rem"}}>
            <div class="card-body">
            <div className="d-flex align-items-center">
                    <div>
                        <img src={img} alt="patient comment" />
                    </div>
                    <div className="ps-2">
                        <h6 style={{color:"#10CFE4"}}>{name}</h6>
                        <p className="mt-2 text-secondary">{date}</p>
                    </div>
                </div>
                <h3 className="mt-2">
                    {subTitle}
                </h3>
                <p className="text-secondary">{description}</p>
              
            </div>
        </div>
    </div>
    );
};

export default Blog;