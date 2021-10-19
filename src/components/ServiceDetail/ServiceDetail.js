import React from 'react';
import './ServiceDetail.css'


// Single service details
const ServiceDetail = (props) => {
    const { title, image, price } = props.service;
    return (
        <div className="col  border-0 service-Detail my-5 d-flex flex-column align-items-center register" >
            <div className="card border-0 h-100  flex-column align-items-center">
                <img src={image} class="card-img-top" alt={image} />
                <div className="card-body">
                    <h1 class="card-title text-primary">{title}</h1>
                    <p class="card-text">Service charge  :  {price}</p>
                    <p>The World-Renowned Board-Certified {title} Facility in Bangladesh, Co. Our Board-Certified {title} are Committed to Helping Patients Recover from {title}.</p>
                    <b>Available time: 10am-12am</b>
                </div>


            </div>
        </div>



    );
};

export default ServiceDetail;
