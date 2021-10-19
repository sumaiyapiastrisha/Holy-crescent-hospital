import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {
    const { id } = useParams();

    const [services] = useFetch();
    return (
        <div>
            <h1>{id}</h1>
            <div className="service-container">
                {

                    services.filter(service => service.id == id).map(service => <ServiceDetail
                        key={service.id}
                        service={service}

                    ></ServiceDetail>)
                }
            </div>

        </div>
    );
};

export default ServiceDetails;