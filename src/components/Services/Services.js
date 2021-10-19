import React from 'react';
import useFetch from '../../hooks/useFetch';
import TopServices from '../home/TopServices/TopServices';

const Services = () => {
    const [services] = useFetch();
    console.log(services)
    return (
        <div>

            <div>

            </div>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
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