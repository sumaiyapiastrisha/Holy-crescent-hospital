import React from 'react';

const ServiceDetail = (props) => {
    const { title } = props.service;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default ServiceDetail;
