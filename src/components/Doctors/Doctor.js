import React from 'react';
import './Doctors.css'

const Doctor = () => {
    return (

        // Doctors information

        <div className="doctors  my-5 py-5">

            <div>
                <div className=" pb-5 text-primary">
                    <h1>Our Doctors</h1>
                </div>
                <div class="card-group row row-cols-1 row-cols-md-3 g-4 bg-primary-100 topServices">
                    <div className="col service" >
                        <div className="card h-100">
                            <img src="https://media.istockphoto.com/photos/portrait-of-female-doctor-picture-id479378798?k=6&m=479378798&s=170667a&w=0&h=EFfjyd2qxcDzx4Z0Cm5ZTBEmYjUUp1tDsXOCQTbkrIk=" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 class="card-title text-primary">Dr.  Resse</h3>
                                <p class="card-text">Dr. Reese is also one of the best doctors of Psychiatry. She treats the problems of depressions and mind-related problems. She is considered world’s best doctor by many.</p>

                            </div>

                            <div>
                                <button className="btn btn-primary p-2 px-4 my-3">Book</button>
                            </div>


                        </div>
                    </div>
                    <div className="col service" >
                        <div className="card h-100">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.GOBz0V_3pLM1bFdelFuTigHaKw&pid=Api&P=0&w=300&h=300" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 class="card-title text-primary">Dr.   Abdu</h3>
                                <p class="card-text">Dr. Abdu is an Associate Professor of Orthopedics and of The Dartmouth Institute Medical Director at Dartmouth-Hitchcock Medical Center </p>
                            </div>

                            <div>
                                <button className="btn btn-primary p-2 px-4 my-3">Book</button>
                            </div>


                        </div>
                    </div>
                    <div className="col service" >
                        <div className="card h-100">
                            <img src="https://media.istockphoto.com/photos/indian-doctor-picture-id118534338?k=6&m=118534338&s=612x612&w=0&h=Rp1tpp-KZ7LqGa10-6mRVP8J82V4yKXlJANqO8TnVtk=" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 class="card-title text-primary">Dr. Abaza</h3>
                                <p class="card-text">Dr. Abaza is a specialized doctor in ENT Otolaryngologist, Adenoidectomy, esophagoscopy, Nasal airway surgery, and tracheostomy. She is a world-famous ENT Doctor and treats problems of the ear, head, nose, throat, and neck. </p>

                            </div>

                            <div>
                                <button className="btn btn-primary p-2 px-4 my-3">Book</button>
                            </div>


                        </div>
                    </div>
                    <div className="col service" >
                        <div className="card h-100">
                            <img src="https://thumbs.dreamstime.com/z/doctor-posing-6987236.jpg" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 class="card-title text-primary">Dr. Sudhansu Bhattacharyya, MBBS, MS, MCH</h3>
                                <p class="card-text">Dr. Sudhansu is also one of the best Indian Cardiovascular Surgeons. He obtained MBBS and M.S. General Surgery from Ahmedabad.  </p>

                            </div>

                            <div>
                                <button className="btn btn-primary p-2 px-4 my-3">Book</button>
                            </div>


                        </div>
                    </div>
                    <div className="col service" >
                        <div className="card h-100">
                            <img src="https://thumbs.dreamstime.com/z/dentist-doctor-man-20139823.jpg" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 class="card-title text-primary">Dr. Mark. F. Aaron, M.D.</h3>
                                <p class="card-text">Dr. Aaron is also one of the best doctors in cardiologists. His specialization is Cardiovascular Disease. The term Cardiology is related to the heart and its problems. He is a world famous doctor known for curing various heart diseases.</p>

                            </div>

                            <div>
                                <button className="btn btn-primary p-2 px-4 my-3">Book</button>
                            </div>


                        </div>
                    </div>
                    <div className="col service" >
                        <div className="card h-100">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.hIbKZbZXI1NnaGro6VfEcAHaDF&pid=Api&P=0&w=418&h=175" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 class="card-title text-primary">Dr. megha</h3>
                                <p class="card-text">Dr. Megha is also one of the best doctors of Psychiatry. She treats the problems of depressions and mind-related problems. She is considered world’s best doctor by many.</p>

                            </div>

                            <div>
                                <button className="btn btn-primary p-2 px-4 my-3">Book</button>
                            </div>


                        </div>
                    </div>
                    <div className="col service" >
                        <div className="card h-100">
                            <img src="https://media.istockphoto.com/photos/doctor-sitting-at-desk-using-computer-picture-id649373022?k=6&m=649373022&s=170667a&w=0&h=J1sLT8IjFJScB3RqZxWnAtcemh7GS6Bauq7smVhn-NA=" class="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 class="card-title text-primary">Dr.  Ragini</h3>
                                <p class="card-text">Dr. Ragini is also one of the best doctors of Psychiatry. She treats the problems of depressions and mind-related problems. She is considered world’s best doctor by many.</p>

                            </div>

                            <div>
                                <button className="btn btn-primary p-2 px-4 my-3">Book</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;