import React from 'react';
import Blogs from '../Blogs/Blogs';
import ContactFrom from '../ContactFrom/ContactFrom';
import Features from '../Features/Features';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAnAppointment from '../MakeAnAppointment/MakeAnAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Doctors from './../Doctors/Doctors';


const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <Features></Features>
           <MakeAnAppointment></MakeAnAppointment>
           <Testimonials></Testimonials>
           <Blogs></Blogs>
           <Doctors></Doctors>
           <ContactFrom></ContactFrom>
           <Footer></Footer>
        </div>
    );
};

export default Home;