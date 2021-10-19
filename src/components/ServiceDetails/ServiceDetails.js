import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const ServiceDetails = () => {
    const { id } = useParams();

    const [services] = useFetch();
    return (
        <div>

            <div class="card mb-3 service-container mx-5"  >
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