import React from 'react';
import { Link } from 'react-router-dom';

const TopServices = (props) => {
    console.log(props)
    const { id, title, image, price } = props.service;
    return (
        <div className="col" >
            <div className="card">
                <img src={image} class="card-img-top" alt={image} />
                <div className="card-body">
                    <h1 class="card-title">{title}</h1>
                    <p class="card-text">{price}</p>
                </div>

                <Link to={`/ServiceDetails/${id}`} >
                    <button className="btn btn-warning">book{title.toLowerCase()}</button>
                </Link>
            </div>
        </div>

    );
};

export default TopServices;