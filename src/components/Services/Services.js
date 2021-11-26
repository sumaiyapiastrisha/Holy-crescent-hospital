import React from 'react';
import useFetch from '../../hooks/useFetch';
import TopServices from '../home/TopServices/TopServices';
import './Service.css'


    //  Show services   

const Services = () => {
    const [services] = useFetch();

    return (
        <div>

            <div>
                <h1 className="my-5  text-primary">Our Services</h1>
            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 topServices">
                {

                    services.map(service => (
                        <TopServices
                            key={service.id}
                            service={service}>

                        </TopServices>
                    )
                    )
                }
            </div>
        </div>


    );
};

export default Services;