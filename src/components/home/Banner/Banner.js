import React from 'react';
import './Banner.css'

const Banner = () => {
    // banner
    return (
        <div className="banner d-flex flex-column justify-content-center">
            <h1 className=" px-5 text-primary">WE CARE </h1>
            <h4>about your</h4>
            <h3 className=" px-5 text-primary">Health</h3>
            <p className="text-center px-5 ">At Banner Health, we understand that rehabilitation through compassionate, excellent care is important to you. Our therapists provide comprehensive, outpatient and inpatient care for you and your child.</p>
            <div>
                <button className="btn btn-primary">Learn more</button>
            </div>
        </div>
    );
};

export default Banner;