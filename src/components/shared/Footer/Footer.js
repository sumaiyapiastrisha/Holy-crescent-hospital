import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
    //declare font awesome icons name
    const gmail = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const address = <FontAwesomeIcon icon={faAddressCard} />

    return (

        //footer
        <footer className="text-center bg-primary text-white pt-5">
            <div >
                <h3>Contact us</h3>
            </div>

            <div className=" footer  d-flex justify-content-center">
                <div className="icon gmail  px-4">
                    <p className="text-gray">{gmail}</p>
                </div>
                <div className="icon phone px-4">
                    <p>{phone}</p>

                </div>
                <div className="icon address px-4">
                    <p>{address}</p>

                </div>
            </div>
            <div>
                <p>&copy; Copyright 2021 Holy Creasent Hospital</p>

            </div>

        </footer>
    );
};

export default Footer;
