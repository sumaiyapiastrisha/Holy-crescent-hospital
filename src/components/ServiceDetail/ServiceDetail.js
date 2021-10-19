import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const { title, image, price } = props.service;
    return (
        <div class="row g-0 service-Detail">
            <div class="col-md-4">
                <img src={image} class=" rounded-start" alt={image} />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Service charge  :  {price}</p>
                    <p>The World-Renowned Board-Certified {title} Facility in Bangladesh, Co. Our Board-Certified {title} are Committed to Helping Patients Recover from {title}.</p>
                </div>
            </div>
        </div>



    );
};

export default ServiceDetail;
