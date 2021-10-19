import React from 'react';
import { Link } from 'react-router-dom';
import './TopServices.css'

const TopServices = (props) => {
    // home page services
    const { id, title, image, price } = props.service;
    return (
        <div className="col service" >
            <div className="card h-100">
                <img src={image} class="card-img-top" alt={image} />
                <div className="card-body">
                    <h1 class="card-title text-primary">{title}</h1>
                    <p class="card-text">Service charge  :  {price}</p>
                    <p>The World-Renowned Board-Certified {title} Facility in Bangladesh, Co. Our Board-Certified {title} are Committed to Helping Patients Recover from {title}.</p>
                </div>

                <Link to={`/ServiceDetails/${id}`} >
                    <button className="btn btn-primary p-2 px-4 my-3">see more</button>
                </Link>
            </div>
        </div>

    );
};

export default TopServices;