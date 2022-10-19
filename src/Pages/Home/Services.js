import { getQueriesForElement } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


import img1 from '../../images/p1.jpg'
import img2 from '../../images/p2.jpg'
import img3 from '../../images/p3.jpg'


import Service from './Service';
const Services = () => {

    const services = [
        {
            id: 1,
            name: 'Apple . Airpods',
            price: '$400',
            color: 'Pre-Owned',
            img: img1
        },
        {
            id: 2,
            name: 'Apple . IPhone 7 Plus',
            price: '$500',
            color: 'Pre-Owned-Black',
            img: img2

        },
        {
            id: 3,
            name: 'Google Pixel 2 Version Edition',
            price: '$700',
            color: 'Pre-Owned-Black',
            img: img3

        },
        {
            id: 4,
            name: 'Samsung Galaxy S9 Plus',
            price: '$700',
            color: 'Pre-Owned-Black',
            img: img1,

        },


    ]
    return (
        <div>
            <div className='my-10'>
                <h1 className=' text-xl font-bold accent'>Featured listings</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;