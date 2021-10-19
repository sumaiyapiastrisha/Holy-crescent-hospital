import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Banner from '../Banner/Banner';
import TopServices from '../TopServices/TopServices';
import './Home.css'

const Home = () => {
    const [services] = useFetch();
    const slicedServices = services.slice(1, 7);
    return (
        <div>

            <div>
                <Banner></Banner>
            </div>


            <div>
                <div>
                    <h1 className="mt-5">Our Services</h1>
                </div>
                <div class=" topServices row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 border-0">

                    {

                        slicedServices.map(service => (
                            <TopServices
                                key={service.id}
                                service={service}>

                            </TopServices>
                        )
                        )

                    }

                </div>
                <Link to="/services" className="btn btn-primary px-5 mt-5">See all</Link>
            </div>

            {/* Posts */}

            <div>
                <div className="my-5 pt-5">
                    <h1>Our latest post</h1>
                </div>
                <div class="card-group row row-cols-1 row-cols-md-2 g-4  topServices">
                    <div class="col">
                        <div class="card text-start posts">
                            <img src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Operation-Facilities-802x401.jpg" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Accredited surgical facility
                                </h5>
                                <p class="card-text">Since the dawn of time, there has been a process to developing web presentations - you...</p>
                                <p class="card-text"><small class="text-muted">28 August 2021</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-start posts">
                            <img src="http://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/Check-your-Baby-280x215.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Health checks for babies
                                </h5>
                                <p class="card-text">Somewhere out in space live The Herculoids! Zok, the laser-ray dragon! Igoo, the giant rock ape!...</p>
                                <p class="card-text"><small class="text-muted">24 September 2021</small></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="row g-0 service-Detail my-5 py-5 philosophy topServices">
                <div class="col-md-4">
                    <img src="https://img1.grunge.com/img/gallery/when-did-physicians-start-to-be-called-doctors/intro-1608648669.jpg" class=" rounded-start" alt="" />
                </div>
                <div class="col-md-8">
                    <div class="card-body bg-primary text-white py-5 px-5">
                        <h1 class="card-title">Our Philosophy</h1>
                        <p class="card-text">This is the subtitle for the heading

                            Patients have an important role to play at each stage of their care and the five safety tips will serve to encourage them to be more involved in their health care.

                            Patients can do a lot of small things to make their health-care experience as safe as possible.

                            Hospitals are places of recovery and healing but there are also safety risks for patients, such as infections, falls and medication errors that can happen despite our best efforts.</p>
                        <button className="btn-white rounded border-0 p-2 px-5">Learn more</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
